import homeReducers from "../agentModule/dashBoardModule/home/store/homeReducers"
import leadReducer from "../agentModule/leadModule/Store/leadReducer";
import paymentReducer from "../agentModule/paymentsModule/store/paymentReducer";
import clientsReducers from "../agentModule/quoteModule/clientListing/store/clientsReducer";

const agentReducers = {
    homeReducers,
    leadReducer,
    paymentReducer,
    clientsReducers
}
export default agentReducers;
