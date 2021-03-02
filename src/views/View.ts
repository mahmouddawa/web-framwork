import {Model} from '../modules/Model';

export abstract class View<T extends Model<K>,K >{
  constructor(public parent:Element, public model: T){
    this.bindModel();
  };
  
  abstract template():string;
  regions: {[key:string]:Element} = {};

  regionsMap():{[key:string]:string}{
    return {};
  }

  eventsMap():{ [key:string]:()=> void}{
    return {};
  }
  bindModel():void{
    this.model.on('change', ()=>{
      this.render();
    })
  }

  bindEvent(fragment:DocumentFragment):void{
    const eventsMap = this.eventsMap();
    for(let eventKey in eventsMap){
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element=>{
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }
  mapRegions(fragment:DocumentFragment):void{
    const regionMap= this.regionsMap();
    for(let key in regionMap){
      const selector = regionMap[key];
      const element = fragment.querySelector(selector);
      if(element){
      this.regions[key] = element;
      }
    }
  }
  onRender():void{
    // for view nesting, should be declared in child class
  }
  render():void{
    // rethink of some other way to compare the dom like react or
    //angular instead of deleting the dom and build a new one

    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvent(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  }
}