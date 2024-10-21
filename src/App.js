import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <div className="App">
      <p>Google Auth Integration</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default App;
