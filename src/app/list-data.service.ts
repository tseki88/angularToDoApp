import { Injectable } from '@angular/core';
import { ToDo } from './toDo';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor() { }

  public idAccumulator: number = 0;
  public listData: ToDo[] = [];


  // 
  newItem(contentInfo: string) {
    // TODO: no idea why id returns NaN...
    let idNumber:number = ++this.idAccumulator * 1
    let newItemObject: ToDo = {
      id: idNumber,
      content: contentInfo,
      complete: false,
    };

    // push the new listItem into data pool
    this.listData.push(newItemObject);
  }


}
