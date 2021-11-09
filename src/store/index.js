import CounterStore from "./ConterStore";
import AddStore from "./AddStore";

class RootStore {
    constructor() {
      this.counterStore = new CounterStore();
      this.addStore = new AddStore();
    }
  }
  
  export default RootStore;
  