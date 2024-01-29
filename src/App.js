import React from "react";
import Maincomponent from "./routes/MainRoute";
import "./App.scss";
import Login from "./module/AuthModule/Login";
import Cookies from "js-cookie";
import { TOKEN } from "./utility/constant";

const App = () => {
  const hasToken = !!Cookies.get(TOKEN);

  console.log(hasToken, "hasToken");

  return (
    <div className="App">
      {hasToken ? <Maincomponent /> : <Login />}
    </div>
  );
};

export default App;
