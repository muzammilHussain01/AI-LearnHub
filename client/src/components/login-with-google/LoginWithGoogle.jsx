import Button from 'react-bootstrap/Button';
import { JSO } from "jso";
import { useEffect } from "react";

const LoginWithGoogle = () => {

    // Configure JSO client instance
    const client = new JSO({
        providerID: "google",
        client_id: "519896297150-05r1ddahi3mc1op6g3faino8ieuk008r.apps.googleusercontent.com",
        redirect_uri: "http://localhost:5173",  // Update this to match your app URL
        authorization: "https://accounts.google.com/o/oauth2/v2/auth",
        response_type: "id_token token",
        scopes: { request: ["openid", "email", "profile"] },
        debug: true
    });

    // Process OAuth callback on page load
    useEffect(() => {
        client.callback();
    }, []);

    // Async login function
    const loginWithGoogle = async () => {
        try {
            const token = client.getToken();
            console.log("I got the token: ", token);
            alert(`Logged in! ID Token:\n${token.id_token}`);
        } catch (err) {
            console.error("Failed to get token", err);
            alert("Login failed. Check console.");
        }
    };

    return (
        <Button variant="outline-primary" onClick={loginWithGoogle} style={{width:"100%"}}>
            Login With Google
        </Button>
    );
};

export default LoginWithGoogle;
