import React, { useRef } from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import "./index.scss";
import CustomToast from "../../../components/Toast";

const SettlementApproval = () => {
  const params = useParams();
  const { id } = params;
  const toastRef = useRef(null);
  const navigate = useNavigate();
  const handleReject = () => {
    toastRef.current.showToast();
    setTimeout(() => {
      navigate(`/agent/clientview/${123}`);
    }, 2000);
  };
  const handleSubmit = () => {
    navigate(`/agent/claimrequest/settlementdetails/${id}`);
  };
  return (
    <div className="claimsettlement__approval__overall">
      <div className="claim__requestapproval__upload__main__title">Clients</div>
      <div className="claim__request__uploadarrow__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID :123456
        </div>
      </div>
      <CustomToast ref={toastRef} message="Claim Rejected" />
      <Card className="mt-4 claimrequest__overall__card">
        <div>
          <div className="claim__title_txt mt-6">Waiting for Settlement</div>
          <div className="claimtitle__img__overallcontainer mt-4">
            <img
              src="https://i.ibb.co/4pbj1hp/waiting-for-approval.png"
              className="claimtitle__img__container"
            />
          </div>
          <div className="claimtitle__txt_container mt-6">
            <div>Your claim is currently being processed.</div>
            <div>
              Kindly be patient until the status of the claim settlement has
              been finalized
            </div>
          </div>
        </div>
        <div className="claimtitle__butt_container mt-6">
          <Button link onClick={handleReject} className="claim__back__but">
            Reject
          </Button>
          <Button onClick={handleSubmit} className="claim__snd__but">
            Proceed
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SettlementApproval;
