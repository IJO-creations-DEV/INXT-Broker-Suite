import React from "react";
import Maincomponent from "./routes/MainRoute";
import "./App.scss";
import Login from "./module/AuthModule/Login";
import AgentLogin from "./agentModule/authModule/Login";
import Cookies from "js-cookie";
import { TOKEN } from "./utility/constant";

const App = () => {
  const hasToken = !!Cookies.get(TOKEN);

  console.log(hasToken, "hasToken");

  return (
    <div className="App">
      {/* master login*/}
      {/* <Login /> */}
      {/* AgentLogin */}
      {hasToken ? <Maincomponent /> : <AgentLogin />}
    </div>
  );
};

export default App;
