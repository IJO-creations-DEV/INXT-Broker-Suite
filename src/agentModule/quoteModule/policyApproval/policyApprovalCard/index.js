import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import React from "react";
import { useNavigate } from "react-router-dom";
import SvgRightarrow from "../../../../assets/agentIcon/SvgRightArrow";

const PolicyApprovalCard = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/uploadpolicy");
  };
  const handleEdit = () => {
    navigate("/agent/convertpolicy/customerinfo");
  };

  return (
    <div className="policy__approval__card__container mt-4">
      <Card className="pt-5">
        <div className="policy__approval__card__title">Waiting for Policy</div>
        <div className="policy__approval__card__image__containe mt-4">
          <Image
            src="https://i.ibb.co/gz54P23/Hourglass.png"
            width="106px"
            height="187px"
          />
        </div>
        <div className="policy__approval__card__sub__text__container mt-3">
          <div className="policy__approval__card__sub__text">
            The quotation has been submitted to the Insurance Company. Kindly
            wait for the issuance of the Insurance Policy
          </div>
        </div>

        <div className="policy__approval__card__btn__container mt-6">
          <div className="edit__btn__container">
            <Button className="edit__btn" onClick={handleEdit}>
              Edit
            </Button>
          </div>
          <div className="recived__btn__container">
            <Button
              className="recived__btn"
              onClick={() => {
                handleclick();
              }}
            >
              Policy Received
              <span className="flex" style={{ marginLeft: "10px" }}>
                <SvgRightarrow />
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PolicyApprovalCard;
