import {action, computed, makeObservable, observable} from 'mobx';

class AddStore {
  constructor() {
    makeObservable(this);
  }
  @observable dataArray = [];
 

  @action
  addData(title, body) {
    this.dataArray.push({title: title, body: body});
  }

  @action
  removeElement(index) {
    this.dataArray.splice(index, 1);
  }

  @action
  updateDataArray(title, body, index) {
    obj = this.dataArray.map((item, i) => {
      if (i == index) {
        item = {
          ...item,
          title: title,
          body: body,
        };
      }
      return item
    });
    this.dataArray = obj
  }


export default AddStore;
