import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private data: string;
  private name: string;
  private component: Map<string, any> = new Map();

  public getData() {
    let temp: String = this.data
    console.log(this.data);
    this.eraseData();
    return temp;
  }
  setData(data: string) {
    console.log(data);
    this.data = data;
  }
  eraseData() {
    this.data = undefined;
  }

  public getComponent(key: string): any {
    console.log(key + " g " + this.component.get(key));
    return this.component.get(key);
  }
  setComponent(key: string, value: any) {
    console.log(key + " p " + value)
    this.component.set(key, value);
  }
  getMap(): Map<string, any> {
    return this.component;
  }
  eraseName() {
    this.name = undefined;
  }

}
