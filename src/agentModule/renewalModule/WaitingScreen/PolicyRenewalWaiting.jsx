import React from "react";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import "./index.scss";

import SvgRightarrow from "../../../assets/agentIcon/SvgRightArrow";

const PolicyRenewalWaiting = () => {
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();
  const handleReject = () => {
    navigate(`/agent/createquote/coveragedetails`);
  };
  const handleSubmit = () => {
    navigate(`/agent/uploadpolicy`);
  };
  const handleCommonAction = () => {
    navigate(`/agent/clientview/${123}`);
  };
  return (
    <div className="renewal__waiting__screen">
      <div className="claim__requestapproval__upload__main__title">Clients</div>
      <div className="claim__request__uploadarrow__back__btn mt-3">
        <div
          onClick={handleCommonAction}
          className="claim__request__upload__back__btn__title cursor-pointer"
        >
          <SvgLeftArrow />
          Carson Darrin / Client ID : 12345678
        </div>

        <div className="claim__request__upload__back__btn__title">
          Renewal ID : 12345678
        </div>
      </div>
      <Card className="mt-4 claimrequest__overall__card">
        <div>
          <div className="claim__title_txt mt-6">
            Waiting for Policy Renewal
          </div>
          <div className="claimtitle__img__overallcontainer mt-4">
            <img
              src="https://i.ibb.co/4pbj1hp/waiting-for-approval.png"
              className="claimtitle__img__container"
            />
          </div>
          <div className="claimtitle__txt_container mt-6">
            <div>
              The Renewal request has been submitted to the Insurance Company.
            </div>
            <div>Kindly wait for the issuance of the Insurance Policy</div>
          </div>
        </div>
        <div className="claimtitle__butt_container mt-6">
          <Button link onClick={handleReject} className="claim__back__but">
            Edit
          </Button>
          <Button onClick={handleSubmit} className="claim__snd__but">
            Policy Received <SvgRightarrow />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PolicyRenewalWaiting;
