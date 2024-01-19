import homeReducers from "../agentModule/dashBoardModule/home/store/homeReducers"
import leadReducer from "../agentModule/leadModule/Store/leadReducer";
import paymentReducer from "../agentModule/paymentsModule/store/paymentReducer";
import CustomerInfoReducer from "../agentModule/quoteModule/customerInfo/store/infoReducer";
import clientsReducers from "../agentModule/quoteModule/clientListing/store/clientsReducer";
import openItemsReducers from "../agentModule/openItems/store/openItemsReducers";

const agentReducers = {
    homeReducers,
    leadReducer,
    paymentReducer,
    clientsReducers,
    CustomerInfoReducer,
    openItemsReducers
}
export default agentReducers;
