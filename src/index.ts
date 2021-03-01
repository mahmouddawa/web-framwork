import {UserForm} from './views/UserForm';
import {User} from './modules/User';

const user = User.buildUser({name:'mandy', age:43});
const root =  document.getElementById("root");
if(root){
  const userForm = new UserForm(
    root,
    user
  );
  userForm.render();
}
else{
  throw new Error('Root element not found')
}


