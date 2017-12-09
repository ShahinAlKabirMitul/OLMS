import { Entity } from './entity';

export class Resource extends Entity {
   
    name: string;
    type: string;
    isPublic: boolean;
}

export class ResourceType {
    constructor(id: string, value: string) {
        this.id = id;
        this.value = value;
    }

    id: string;
    value: string;
}