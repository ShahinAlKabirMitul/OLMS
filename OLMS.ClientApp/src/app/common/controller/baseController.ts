import { NotFoundError } from '../error/NotFoundError';
import { AppError } from '../error/app-error';
import { UserProfile } from '../../model/userProfile';

import { Entity } from './../../model/entity';
import { BaseService } from './../base.service';
import { BaseRequestModel } from './../../request.model/base.request';
import { Observable } from 'rxjs/Rx';
import { error } from 'selenium-webdriver';
import { NotAuthorized } from '../error/notauthorized';
import { BadInout } from '../error/bad-input';
export abstract class BaseController<T extends Entity>  {
    public model: T;
    service: BaseService<T>;


    constructor(baseService: BaseService<T>,public authProfile:UserProfile) {
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
   
    async  save() {
     
        this.model.created=new Date();
        this.model.createdBy=this.authProfile.getProfile().currentUser.userName;
        this.model.modified=new Date();
        this.model.modifiedBy=this.authProfile.getProfile().currentUser.userName;
        this.model.id="1";
        await this.service.save(this.model).toPromise().then( (s)=>{
           if(s.status==200)
            alert('Save Succssfully');
            this.reset();

          
          
        } ).catch( (error: AppError)=>{
            if (error instanceof NotFoundError) {
                alert('Data Not Found');
            }
            else if(error instanceof NotAuthorized){
                alert('You are not authozid for this action');
            }
            else if(error instanceof BadInout){
                alert('Bad Input');
            }
            else{
                alert('Something wrong');
            }
           

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