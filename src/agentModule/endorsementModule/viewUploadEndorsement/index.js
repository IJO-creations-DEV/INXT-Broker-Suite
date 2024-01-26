import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import InputTextField from "../../component/inputText";
import SvgBlueArrow from "../../../assets/agentIcon/SvgBlueArrow";

const ViewEndorsement = () => {
  const navigate = useNavigate();

  const handleclickNavigation = () => {
    navigate("/agent/endorsement/paymentconfirmation");
  };
  const handlePayLater = () => {
    navigate(`/agent/clientview/${123}`);
  };

  const handleEndorsement=()=>{
    const pdfUrl = "https://zealeyeai-my.sharepoint.com/personal/infra_zealeye_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs%2FEndorsement%20Schedule%2Epdf&parent=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs&ga=1";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="view__endorsement__container">
      <div className="view__endorsement__container__title">Clients</div>
      <div className="grid mt-3">
        <div className="view__endorsement__container__back__btn__container col-12 md:col-6 lg:col-6">
          <SvgLeftArrow />
          <div className="view__endorsement__container__back__btn__title">
            Client ID :123456
          </div>
        </div>
      </div>
      <div className="view__endorsement__card__container mt-4">
        <Card className="card__container">
          <div className="view__endorsement__card__container__title">
            Endorsement
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Policy Number"
                value="123456"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Endorsement Number"
                value="123456"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Production"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Inception"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Issued Date"
                value="12/12/2023"
                disabled={true}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Expiry"
                value="12/12/2023"
                disabled={true}
              />
            </div>
          </div>

          <div className="view__endorsement__card__sub__title mt-2 mb-2">
            Document
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <div onClick={()=>handleEndorsement()} className="endorsement__detail__view__box">
                <div className="grid mt-2">
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="endorsement__detail__view__box__title">
                      Endorsement
                    </div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="endorsement__detail__view__box__container">
                      <div className="endorsement__detail__view__box__sub__title">
                        View
                      </div>
                      <SvgBlueArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid m-0 mt-2">
            <div className="col-12 md:col-12 lg:col-12 back__complete__btn__container ">
              <div className="back__btn__container">
                <Button className="back__btn" onClick={handlePayLater}>
                  Pay Later
                </Button>
              </div>
              <div className="complete__btn__container">
                <Button
                  className="complete__btn"
                  onClick={() => {
                    handleclickNavigation();
                  }}
                >
                  Proceed to payment
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ViewEndorsement;
