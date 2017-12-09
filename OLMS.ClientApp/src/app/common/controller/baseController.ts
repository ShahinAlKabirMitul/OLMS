
import { Entity } from './../../model/entity';
import { BaseService } from './../base.service';
import { BaseRequestModel } from './../../request.model/base.request';
import { Observable } from 'rxjs/Rx';
export abstract class BaseController<T extends Entity>  {
    public model: T;
    service: BaseService<T>;
    constructor(baseService: BaseService<T>) {
        this.service = baseService;
        this.requestModel = new BaseRequestModel();
        this.requestModel.page = 1;
        this.requestModel.perPageCount = 5;
        this.requestModel.orderBy = 'Modified';
        this.model = this.createInstence(Entity) as T;
        console.log(this.model);

    }

    createInstence<Entity>(c: new () => Entity): Entity {
        return new c();

    }
   
    async save() {
        console.log(this.model);

        this.model.created=new Date();
        this.model.createdBy="me";
        this.model.modified=new Date();
        this.model.modifiedBy="me";
        this.model.id="1";
        await this.service.save(this.model).toPromise().then( (s)=>{
           if(s.status==200)
             alert('Save Succssfully');
        } ).catch( (s)=>{
            alert(s);
        } );

    }
    abstract reset();

    //query controller starts
    requestModel: BaseRequestModel;
    models: Observable<T[]>;

    async search() {


        console.log(this.requestModel);
        this.models = await this.service.search(this.requestModel);


    }
    sort(property: string) {
        this.requestModel.isAscending = !this.requestModel.isAscending;
        this.requestModel.orderBy = property;
        this.search();
    }

    next() {
        this.requestModel.page = this.requestModel.page + 1;

        this.search();
    }
    pre() {

        if (this.requestModel.page > 1) {
            this.requestModel.page = this.requestModel.page - 1;
            this.search();
        }

    }


}