

import { Entity } from './../model/entity';
import { BaseService } from '../common/base.service';
export abstract class BaseController<T>  {
    model: T;
    service: BaseService<T>;
    constructor(baseService:BaseService<T>) {
        this.service=baseService;
    }

    async  save() {
        console.log(this.model);
        await this.service.save(this.model).toPromise();

    }
    abstract reset();

}