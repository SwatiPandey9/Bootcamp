import {action, computed, makeObservable, observable} from 'mobx';

class AddStore {
  constructor() {
    makeObservable(this);
  }
  @observable dataArray = [];
  @observable name = 'radha';

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

  @computed get getDataArray() {
    return this.dataArray;
  }
}

export default AddStore;
