import {User} from './modules/User';

const collection = User.buildCollection();

collection.on('change', ()=>{
  console.log(collection);
})
collection.fetch();

