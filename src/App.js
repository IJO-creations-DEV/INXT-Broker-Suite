import Maincomponent from "./routes/MainRoute";
import "./App.scss";
import Login from "./module/AuthModule/Login";


const App = () => {
  return (
    <div className="App">
      <Login />
      <Maincomponent />
    </div>
  );
};

export default App;
