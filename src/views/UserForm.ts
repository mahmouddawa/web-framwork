import {User, UserProps} from '../modules/User';
import {View} from './View';


export class  UserForm extends View<User,UserProps>{

  eventsMap():{ [key:string]: ()=>void}{
    return {
      'click:.set-age':this.onSetAgeClick,
      'click:.set-name':this.onSetNameClick,
      'click:.save-model':this.onSaveClick
    }
  }
  onSaveClick = ():void =>{
    this.model.save();
  }
  onSetAgeClick=():void =>{
    this.model.setRandomAge();
  }
  onSetNameClick = ():void=>{
    const input = this.parent.querySelector('input');
    if(input){
      const name = input.value;
      this.model.set({name});
    }
  }

  template():string{
    return `
    <div>
      <input placeholder=${this.model.get('name')} />
      <button class="set-name">update name</button>
      <button class="set-age" > set a random number </button>
      <br>
      <br>
      <button class="save-model"> save User</button>
    </div>
    `
  }

}