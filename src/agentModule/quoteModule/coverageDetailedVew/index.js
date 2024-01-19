import React from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import SvgRightarrow from "../../../assets/agentIcon/SvgRightArrow";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import customHistory from "../../../routes/customHistory";
import { useDispatch, useSelector } from "react-redux";


const LeadPreview = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/policyapproval");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  const { postcustomerinfodata, loading } = useSelector(({ CustomerInfoReducer }) => {
    return {
      loading: CustomerInfoReducer?.loading,
      postcustomerinfodata: CustomerInfoReducer?.postcustomerinfodata,

    };
  });

console.log("211",postcustomerinfodata)
  return (
    <div className="overall__lead__view__container">
      <NavBar />
      <div className="header__title">Leads</div>
      <div className="lead__quote__id mt-3">
        <div className="left__arrow">
          <SvgLeftArrow />
          <label className="left__arrow__text">Lead ID : 12345678</label>
        </div>
        <div className="quote__id__text">Quote ID : 12345678</div>
      </div>
      <Card className="mt-4">
        <div className="table__header">Coverage details</div>
        <div className="quote__details">
          <label>Please check quote details</label>
        </div>
        <div className="sub__title">
          <label className="policy__text">Policy Details</label>
          <div className="quote__details">
            <label className="insurance__text">Insurance Company</label>
            <label className="alpha__text">Alpha Insurance Company</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Insurance Policy Type</label>
            <label className="alpha__text">CV</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Account Code</label>
            <label className="alpha__text">Acc012345</label>
          </div>
        </div>
        <div className="sub__title">
          <label className="policy__text">Assured Details</label>
          <div className="quote__details">
            <label className="insurance__text">Name</label>
            <label className="alpha__text">Carson</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Email ID</label>
            <label className="alpha__text">Carson@abc.com</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Contact Number</label>
            <label className="alpha__text">9874563210</label>
          </div>

          <div className="id__card__text">ID Card</div>
          <div class="grid m-0">
            <div className="col-12">
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/51rWbD4/idimage.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
          </div>

          <div className="grid m-0">
            <div class="col-6">
              <div className="id__card__number">
                <label className="id__card__text">ID Card Number</label>
              </div>
            </div>
            <div class="col-6">
              <div className="id__card__number">
                <label className="id__card__id">3171234567890123</label>
              </div>
            </div>
          </div>
        </div>
        <div className="sub__title">
          <label className="policy__text">Insurance Vehicle Details</label>
          <div className="quote__details">
            <label className="insurance__text">Vehicle Brand</label>
            <label className="alpha__text">Honda</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Model Year</label>
            <label className="alpha__text">2024</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Vehicle Model</label>
            <label className="alpha__text">Vario CVT 150</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Model Variant</label>
            <label className="alpha__text">CVT 150</label>
          </div>

          <div className="quote__details">
            <label className="insurance__text">Vehicle Color</label>
            <label className="alpha__text">Black</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Seating Capacity</label>
            <label className="alpha__text">2</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Motor Number</label>
            <label className="alpha__text">{postcustomerinfodata?.MotorNumber}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Chassis Number</label>
            <label className="alpha__text">{postcustomerinfodata?.ChassisNumber}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Mortgage</label>
            <label className="alpha__text">{postcustomerinfodata?.Mortgage}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Cert Number</label>
            <label className="alpha__text">{postcustomerinfodata?.CertNumber}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Plate Number</label>
            <label className="alpha__text">{postcustomerinfodata?.PlateNumber}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">MV File Number</label>
            <label className="alpha__text">{postcustomerinfodata?.MVFileNumber}</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Authen Code</label>
            <label className="alpha__text">{postcustomerinfodata?.AuthenCode}</label>
          </div>
          <div className="insured_vehicle_text">Insured Vehicle Photo</div>
          <div class="grid m-0">
            <div class="col-6">
              <div className="vehicle__left__text mt-2">
                Vehicle Left Side Photo
              </div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/YLm4Wtc/carimage1.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
            <div class="col-6">
              <div className="vehicle__left__text mt-2">
                Vehicle Right Side Photo
              </div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/NpQCSqg/rightimage.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
          </div>
          <div class="grid m-0">
            <div class="col-6">
              <div className="vehicle__left__text">
                Vehicle Front Side Photo
              </div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/qYTp1Ss/front.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
            <div class="col-6">
              <div className="vehicle__left__text">Vehicle Rear Side Photo</div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/CtQ3Qr1/frontright.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>

            <div className="vehicle__left__text mt-2">
              Vehicle Interior Dashboard Photo
            </div>
          </div>
          <div class="grid m-0">
            <div class="col-12">
              <div className="image__texts mt-2">
                <img
                  src="https://i.ibb.co/ZH7j1K3/dashboardphoto.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sub__title">
          <label className="policy__text">Coverage details</label>
          <div className="quote__details">
            <label className="insurance__text">Total Sum Insured</label>
            <label className="alpha__text">5,00,000.00</label>
          </div>
        </div>
        <div className="sub__title">
          <label className="policy__text">Payment Details</label>
          <div className="quote__details">
            <label className="insurance__text">NET Premium</label>
            <label className="alpha__text">5000.00</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">DST</label>
            <label className="alpha__text">400.00</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">VAT</label>
            <label className="alpha__text">500.00</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">LGT</label>
            <label className="alpha__text">500.00</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Others</label>
            <label className="alpha__text">500.00</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Discount</label>
            <label className="alpha__text">-500.00</label>
          </div>
          <div className="quote__details">
            <label className="gross__text">Gross premium</label>
            <label className="gross__count">6500.00</label>
          </div>
        </div>
      </Card>
      <div className="button__component">
        <Button
          label="Back"
          severity="help"
          text
          className="download__button"
          onClick={handleBackNavigation}
        />
        <Button
          label="Send to Insurance Company"
          classNames="policy_button"
          onClick={() => {
            handleclick();
          }}
        >
          <SvgRightarrow />
        </Button>
      </div>
    </div>
  );
};

export default LeadPreview;
