import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
   
  dataservice(){

    return "calling data service";
  }
}
