import {Model} from '../modules/Model';

export abstract class View<T extends Model<K>,K >{
  constructor(public parent:Element, public model: T){
    this.bindModel();
  };
  abstract eventsMap():{ [key:string]:()=> void};
  abstract template():string;
  bindModel():void{
    this.model.on('change', ()=>{
      this.render();
    })
  }

  bindEvent(fragment:DocumentFragment){
    const eventsMap = this.eventsMap();
    for(let eventKey in eventsMap){
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element=>{
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }
  render():void{
    // rethink of some other way to compare the dom like react or
    //angular instead of deleting the dom and build a new one

    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvent(templateElement.content);
    this.parent.append(templateElement.content);
  }
}