import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private _listDataService : ListDataService) { }

  // public value = "";
  public newItem: Function;
  public listData = [];

  ngOnInit() {
    this.listData = this._listDataService.listData;
    this.newItem = this._listDataService.newItem;
  }
}
