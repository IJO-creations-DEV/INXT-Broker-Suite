import Maincomponent from "./routes/MainRoute";
import "./App.css";
import Login from "./module/AuthModule/Login";
import ResetPassward from "./module/AuthModule/ResetPassward";

const App = () => {
  return (
    <div className="App">
        {/* <Maincomponent /> */}
     <ResetPassward/>
    </div>

  );
};

export default App;
