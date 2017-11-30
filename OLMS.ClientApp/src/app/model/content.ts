import { Entity } from './entity';
export class Content extends Entity {
    
            constructor() {
                super();
            }
    
            serial: number;
            title: string;
            description: string;
            url: string;
            totalSeconds: number;
            tags: string;
            category: number;
            courseTitle: string;
            courseId: string;
        }