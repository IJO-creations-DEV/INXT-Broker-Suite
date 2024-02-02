import React, { useRef } from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import "./index.scss";
import CustomToast from "../../../components/Toast";

const PaymentErrorEndorsment = () => {
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
  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  const handleSubmit = () => {
    navigate("/agent/uploadendorsement");
  };
  return (
    <div className="endorsement__waiting__approval__overall">
      <div className="endorsement__waiting__requestapproval__upload__main__title">
        Clients
      </div>
      <div
        onClick={handleCommonAction}
        className="endorsement__waiting__request__uploadarrow__back__btn mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="endorsement__waiting__request__upload__back__btn__title">
          Carson Darrin / Client ID : {id}
        </div>
      </div>
      <CustomToast
        ref={toastRef}
        message="Endorsement Rejected"
        messageType="error"
      />
      <Card className="mt-4 claimrequest__overall__card">
        <div>
          <div className="endorsement__waiting__title_txt mt-6">
            Waiting for Update
          </div>
          <div className="claimtitle__img__overallcontainer mt-4">
            <img
              src="https://i.ibb.co/4pbj1hp/waiting-for-approval.png"
              className="claimtitle__img__container"
            />
          </div>
          <div className="claimtitle__txt_container mt-6">
            <div>
              Endorsement Request for Policy Number: 08234237498 has been
              raised.
            </div>
            <div> Please wait until it has been processed.</div>
          </div>
        </div>
        <div className="claimtitle__butt_container mt-6">
          <Button
            link
            onClick={handleReject}
            className="endorsement__waiting__back__but"
          >
            Reject
          </Button>
          <Button
            onClick={handleSubmit}
            className="endorsement__waiting__snd__but"
          >
            Proceed
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PaymentErrorEndorsment;
