import React from "react";
import GoogleButton from "react-google-button";

//google login component, redirecting to google
export default class GoogleLogin extends React.Component {
  handleGoogleSignIn = () => {
    fetch("localhost:5000/login");
  };
  render() {
    return (
      <div>
        <GoogleButton
          type="dark"
          name="submit"
          className="googleButton"
          onClick={() => (window.location = "http://localhost:5000/login")}
        >
          Sign in with Google
        </GoogleButton>
      </div>
    );
  }
}
