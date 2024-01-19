import homeReducers from "../agentModule/dashBoardModule/home/store/homeReducers";
import leadReducer from "../agentModule/leadModule/Store/leadReducer";
import paymentReducer from "../agentModule/paymentsModule/store/paymentReducer";
import policyDetailsReducer from "../agentModule/quoteModule/policyDetails/store/policyDetailsReducer";
import coverageDetailsReducer from "../agentModule/quoteModule/coverageDetails/store/coverageDetailsReducer";
import accessoriesReducer from "../agentModule/quoteModule/accessories/store/accessoriesReducer";
import orderSummaryReducer from "../agentModule/quoteModule/orderSummary/store/orderSummaryReducer";
import CustomerInfoReducer from "../agentModule/quoteModule/customerInfo/store/infoReducer";
import clientsReducers from "../agentModule/quoteModule/clientListing/store/clientsReducer";
import openitemsReducers from "../agentModule/openItems/store/openitemsReducers";

const agentReducers = {
  homeReducers,
  leadReducer,
  paymentReducer,
  openitemsReducers,
  policyDetailsReducer,
  coverageDetailsReducer,
  accessoriesReducer,
  orderSummaryReducer,
  clientsReducers,
  CustomerInfoReducer
};
export default agentReducers;
