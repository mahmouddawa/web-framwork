import {View} from './View';
import {User,UserProps} from '../modules/User';


export class UserShow extends View<User,UserProps>{

  template():string{
    return `
      <div>
      <h1>user detail</h1>
      <div>${this.model.get('name')}</div>
      <div>${this.model.get('age')}</div>
      </div>
    ` 
  }

}