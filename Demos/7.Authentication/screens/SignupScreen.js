import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import * as http from "../util/http";
import { AuthContext } from "../store/AuthContext";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await http.signupUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error);
      alert("Wrong credentials");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={authenticationHandler} />;
};

export default SignupScreen;
