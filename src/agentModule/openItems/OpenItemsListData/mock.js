import SvgDocumentIcon from "../../../assets/agentIcon/SvgDocumentIcon";
import SvgGreenDocument from "../../../assets/agentIcon/SvgGreenDocument";
import SvgPaymentIcon from "../../../assets/agentIcon/SvgPaymentIcon";
import SvgRenewalIcon from "../../../assets/agentIcon/SvgRenewalIcon";

export const mock = [
    {

        id: 1,
        name: "Carson Darrin",
        clientId: "12345678",
        policyNo: "Policy0123",
       status: "Pending Payments",
        count: "10",
        icon: <SvgPaymentIcon />
        
    },
    {
        id: 2,
        name: "Carson Darrin",
        clientId: "12345678",
        policyNo: "Policy0123",
        status: "Renewal Request",
        count: "8",
        icon: <SvgRenewalIcon />

    }
]