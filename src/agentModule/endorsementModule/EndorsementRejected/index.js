import React, { useRef } from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import "./index.scss";
import CustomToast from "../../../components/Toast";

const EndorsementRejected = () => {
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
    navigate("/agent/endorsement/personaldetails");
  };
  return (
    <div className="endorsement__rejected__overall">
      <div className="endorsement__waiting__requestapproval__upload__main__title">
        Clients
      </div>
      <div
        onClick={handleCommonAction}
        className="endorsement__waiting__request__uploadarrow__back__btn mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="endorsement__waiting__request__upload__back__btn__title">
          Client ID :{id}
        </div>
      </div>
      <CustomToast ref={toastRef} message="Endorsement Rejected" />
      <Card className="mt-4 border-round-3xl claimrequest__overall__card">
        <div className="mt-6">
          <div className="claimtitle__img__overallcontainer mt-4">
            <img
              src="https://i.ibb.co/4pbj1hp/waiting-for-approval.png"
              className="claimtitle__img__container"
            />
          </div>
          <div className="claimtitle__txt_container mt-6">
            <div>This Endorsement Request has been rejected.</div>
            <div>
              You can still view all the information for your reference.
            </div>
          </div>
        </div>
        <div className="claimtitle__butt_container mt-8">
          <Button
            onClick={handleSubmit}
            className="endorsement__waiting__snd__but"
          >
            Details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EndorsementRejected;
