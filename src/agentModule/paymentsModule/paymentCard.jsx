import { Card } from "primereact/card";
import React from "react";
import SvgArrow from "../../assets/agentIcon/SvgArrow";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Carddata from "./mock";
import { useSelector } from "react-redux";

const PaymentCard = ({ dataSearch, status }) => {
  console.log(dataSearch, "dataSearch");

  const { paymenttabledata, paymentSearchList, loading } = useSelector(
    ({ agentPaymentMainReducers }) => {
      return {
        loading: agentPaymentMainReducers?.loading,
        paymenttabledata: agentPaymentMainReducers?.paymenttabledata,
        paymentSearchList: agentPaymentMainReducers?.paymentSearchList
      };
    }
  );
  console.log(paymenttabledata, "paymenttabledata");
  const navigate = useNavigate();
  // const filteredData = data.filter((val) => val.status === status);

  const filteredData =
    paymenttabledata &&
    paymenttabledata
      .filter((val) => val.status === status)
      .filter((val) => {
        return (
          val.name.toLowerCase().includes(dataSearch.toLowerCase()) ||
          val.clintid.toLowerCase().includes(dataSearch.toLowerCase())
        );
      });

  const handleAction = (status) => {
    if (status === "PAID") {
      navigate(`/agent/policydetailedviewonly`);
    } else if (status === "PENDING") {
      navigate(`/agent/policydetailedview`);
    } else if (status === "REVIEWING") {
      navigate(`/agent/policy/paymentapproval`);
    }
  };
  return (
    <div>
      {filteredData.map((data) => (
        <div key={data.id} className="payment__overall__fieldcard">
          {/* <Card  > */}
          <div className="payment__paid__fieldcard">
            <div className="payment__paid__titlefieldcard">{data.name}</div>
            <div className="payment__paid__subtitlefieldcard">
              {data.subtitle}
            </div>
          </div>
          <div>
            <div className="payment__paid__titlefieldcard">Gross Premium</div>
            <div className="payment__paid__pricefieldcard">
              ₱ {data.grosspremiu}
            </div>
          </div>
          <div>
            <div className="payment__paid__titlefieldcard">Client ID</div>
            <div className="payment__paid__subtitlefieldcard">
              {data.clintid}
            </div>
          </div>
          <div>
            <div className="payment__paid__titlefieldcard">Date</div>
            <div className="payment__paid__subtitlefieldcard">{data.date}</div>
          </div>
          <div>
            <div className="payment__paidfieldcard">{data.status}</div>
          </div>
          <div>
            <Button
              outlined
              onClick={() => {
                handleAction(data.status);
              }}
              icon={<SvgArrow />}
              className="sorbyfilter_container"
            />
          </div>
          {/* </Card> */}
        </div>
      ))}
    </div>
  );
};

export default PaymentCard;
