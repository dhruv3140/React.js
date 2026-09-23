import React, {useContext} from "react";
import UserContext from "../context/usercontext";
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login to continue</div>
    
    return (
        <div>
            <h2>Welcome {user.username}</h2>
        </div>
    )
}
export default Profile