import homeReducers from "../agentModule/dashBoardModule/home/store/homeReducers"
import leadReducer from "../agentModule/leadModule/Store/leadReducer";
import paymentReducer from "../agentModule/paymentsModule/store/paymentReducer";


 const agentReducers =  {
    homeReducers,
    leadReducer,
    paymentReducer
}
export default agentReducers;
