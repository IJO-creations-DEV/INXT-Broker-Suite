import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import "./index.scss";

const ClaimRejected = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  const handleSubmit = () => {
    navigate("/agent/claimdocumentupload");
  };
  return (
    <div className="claimrejected__approval__overall">
      <div className="claim__requestapproval__upload__main__title">Clients</div>
      <div
        onClick={handleCommonAction}
        className="claim__request__uploadarrow__back__btn mt-3 cursor-pointer"
      >
        <SvgLeftArrow />
        <div className="claim__request__upload__back__btn__title">
          Client ID : 1233333
        </div>
      </div>
      <Card className="mt-8 claimrequest__overall__card">
        <div className="claimtitle__card_overall">
          <div className="claimtitle__img__overallcontainer mt-8">
            <img
              src="https://i.ibb.co/V21pJZs/REJECTED-1.png"
              className="claimtitle__img__container"
            />
          </div>
          <div className="claimtitle__txt_container mt-6">
            <div>This Claim Request has been rejected.</div>
            <div>You can still view all the information for your reference</div>
          </div>
        </div>
        <div className="claimtitle__butt_container mt-6">
          <Button onClick={handleSubmit} className="claim__snd__but">
            Detail
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ClaimRejected;
