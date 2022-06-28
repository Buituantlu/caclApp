import {makeAutoObservable} from 'mobx';

class AppStore {
  calculation = '';
  answer =  '';

  constructor() {
    makeAutoObservable(this);
  }

  calculate(operation) {
    switch (operation) {
      case 'clear':
        this.calculation = '';
        this.answer = 0;
        break;
      case '=':
        try {
          this.answer = eval(this.calculation);
        } catch {
          window.alert('error!');
          this.answer = 0;
        } finally {
          this.calculation = '';
        }
        break;
      default:
        this.calculation = this.calculation + operation;
        this.answer = this.calculation;
    }
  }

}
export default AppStore;
