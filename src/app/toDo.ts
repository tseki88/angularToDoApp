export class ToDo {
    id: number;
    content: string;
    complete: boolean;
    
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}