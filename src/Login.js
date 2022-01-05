import  { React, useState } from "react";
import {useMsal, AuthenticatedTemplate} from "@azure/msal-react"
import { loginRequest, b2cPolicies } from "./authConfig";
import { render } from "@testing-library/react";



function Login(){

    const { instance } = useMsal();
    
    render()
    {
        return(
            <div>
                <AuthenticatedTemplate>
                <IdTokenContent/>
                </AuthenticatedTemplate>

                <button onClick={() => instance.loginPopup(loginRequest)} > Sign in</button>
                </div>
        )
    }
}

const IdTokenContent = () => {
    /**
     * useMsal is hook that returns the PublicClientApplication instance, 
     * an array of all accounts currently signed in and an inProgress value 
     * that tells you what msal is currently doing. For more, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
     */
    const { accounts } = useMsal();
    const [idTokenClaims, setIdTokenClaims] = useState(null);

    function GetIdTokenClaims() {
        debugger;
        setIdTokenClaims(accounts[0].idTokenClaims)
    }

    return (
        <>
        
            <h5 className="card-title">Welcome1 {accounts[0].environment}</h5>
            {idTokenClaims ?
                <IdTokenClaims idTokenClaims={idTokenClaims} />
                :
                <button variant="secondary" onClick={GetIdTokenClaims}>View ID Token Claims</button>
            }
        </>
    );
};

export const IdTokenClaims = (props) => {
    return (
        <div id="token-div">
            <p><strong>Audience: </strong> {props.idTokenClaims.aud}</p>
            <p><strong>Issuer: </strong> {props.idTokenClaims.iss}</p>
            <p><strong>OID: </strong> {props.idTokenClaims.oid}</p>
            <p><strong>UPN: </strong> {props.idTokenClaims.preferred_username}</p>
        </div>
    );
}

// class Login extends React.Component {
//     state = {
//         username:'',
//         pwd:''
//     }
    
    

//     OnTextChange = (e) =>
//     {
//         const {name, value} = e.target;
//         this.setState({[name]:value});
//         // console.log(this.state.username);
//         // console.log(this.state.pwd);
//     }

//     onFormSubmit = (e) =>
//     {   
//         e.preventDefault();
//         console.log("mur");
//         console.log(this.state.pwd);
//         console.log(this.state.username);
       

//     }
    
//     render(){
//         return(
//             <div>
//                 <div>
//                 Hello Login</div>
                
//                 <input name="username" type="text" placeholder="User name" onChange={this.OnTextChange}></input>
//                 <input name="pwd" placeholder="Password" type="password" onChange={this.OnTextChange}></input>
//                 <button name="submit" onClick={() => instance.loginPopup(loginRequest)}>Submit</button>
//                 </div>
//         )
//     }
// }

export default Login;