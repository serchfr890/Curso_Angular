import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private _dataservice: DataService){
    this._dataservice.getIsLoading().subscribe(val => {
      console.log('ISLOADING: ', val);
      this.loading = val;
    })
  }
}
