
import {GoogleLogout} from 'react-google-login';

const clientId = "385346956852-la1fnkoibb8ehlt263abo1p94ffrf49j.apps.googleusercontent.com";
function Logout(){

    const onSuccess = () =>{
        console.log("Log out successfull!");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId = {clientId}
                butttonText = {"Logout"}
                onLogoutSuccess = {onSuccess}
                />
        </div>
    )
}
export default Logout;