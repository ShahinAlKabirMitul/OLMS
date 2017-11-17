import { Observable } from 'rxjs/Rx';
import { BaseRequestModel } from './../request.model/base.request';


import { Entity } from './../model/entity';
import { BaseService } from '../common/base.service';

export abstract class BaseController<T>  {
    model: T;
    service: BaseService<T>;


    constructor(baseService: BaseService<T>) {
        this.service = baseService;
        this.requestModel=new BaseRequestModel();
    }

    async  save() {
        console.log(this.model);
        await this.service.save(this.model).toPromise();

    }
    abstract reset();

    //query controller starts
    requestModel: BaseRequestModel;
    models: Observable<T[]>;

    async search() {

        if (!this.requestModel.orderBy) {
            this.requestModel.orderBy = 'name';
        }
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