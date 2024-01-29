import Maincomponent from "./routes/MainRoute";
import "./App.scss";
import Login from "./module/AuthModule/Login";
import Cookies from "js-cookie";
import { TOKEN } from "./utility/constant";


const App = () => {
  const hasToken = Cookies.get(TOKEN) === "token";
  console.log(hasToken,'hasToken')
  return (
    <div className="App">
    {hasToken === false && (   <Login />)}
      {hasToken === true && (  <Maincomponent />)}
    </div>
  );
};

export default App;
