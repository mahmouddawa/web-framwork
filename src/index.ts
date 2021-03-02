import {UserEdit} from './views/UserEdit';
import {User} from './modules/User';

const user = User.buildUser({name:'mandy', age:43});
const root =  document.getElementById("root");
if(root){
  const userEdit = new UserEdit(
    root,
    user
  );
  userEdit.render();
  console.log(userEdit);
}
else{
  throw new Error('Root element not found')
}


