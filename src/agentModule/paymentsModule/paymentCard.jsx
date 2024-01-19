import { Card } from "primereact/card";
import React, { useEffect } from "react";
import SvgArrow from "../../assets/agentIcon/SvgArrow";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Carddata from "./mock";
import { useSelector } from "react-redux";

const PaymentCard = ({  dataSearch, status,setStatus }) => {


  const { paymenttabledata, paymentSearchList, loading } = useSelector(
    ({ agentPaymentMainReducers }) => {
      return {
        loading: agentPaymentMainReducers?.loading,
        paymenttabledata: agentPaymentMainReducers?.paymenttabledata,
        paymentSearchList: agentPaymentMainReducers?.paymentSearchList
      };
    }
  );
  useEffect(()=>{
    setStatus(status)
  },[status])
  console.log(paymentSearchList, "paymentSearchList");
  const navigate = useNavigate();
  

  const filteredData =
    paymenttabledata &&
    paymenttabledata
      .filter((val) => val.status === status)




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

{dataSearch !== "" && Array.isArray(paymentSearchList)
        ? paymentSearchList.map((data) => (
          <div key={data.id} className="payment__overall__fieldcard">
        
          <div className="payment__paid__fieldcard">
            <div className="payment__paid__titlefieldcard">{data.name}</div>
            <div className="payment__paid__subtitlefieldcard">
              {data.subtitle}
            </div>
          </div>
          <div>
            <div className="payment__paid__titlefieldcard">Gross Premium</div>
            <div className="payment__paid__pricefieldcard">
              ₱ {data.grosspremium}
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
          ))
        : filteredData.map((data) => (
          <div key={data.id} className="payment__overall__fieldcard">
        
          <div className="payment__paid__fieldcard">
            <div className="payment__paid__titlefieldcard">{data.name}</div>
            <div className="payment__paid__subtitlefieldcard">
              {data.subtitle}
            </div>
          </div>
          <div>
            <div className="payment__paid__titlefieldcard">Gross Premium</div>
            <div className="payment__paid__pricefieldcard">
              ₱ {data.grosspremium}
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
