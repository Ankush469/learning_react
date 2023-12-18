import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user}=useContext(UserContext);

  if(!user) return <div>please Login</div>
  

  return <div 
  className='text-black'>
    Wlecome {user.username}
  </div>


}

export default Profile