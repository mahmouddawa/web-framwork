import {User} from './modules/User';

const user = User.buildUser({id:1, name:'boby', age:50});


user.on('save',()=>{
  console.log(user);
})

user.save();

