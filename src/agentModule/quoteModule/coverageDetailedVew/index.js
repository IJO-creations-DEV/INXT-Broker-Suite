import React from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import SvgRightarrow from "../../../assets/agentIcon/SvgRightArrow";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { useNavigate } from "react-router-dom";

const LeadPreview = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/policyapproval");
  }

  return (
    <div className="overall__lead__view__container">
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
                <img src="https://i.ibb.co/51rWbD4/idimage.png" alt="idimage" className="image__size" />
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
            <label className="alpha__text">123456</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Chassis Number</label>
            <label className="alpha__text">123456</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Mortgage</label>
            <label className="alpha__text">Nil</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Cert Number</label>
            <label className="alpha__text">123456</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Plate Number</label>
            <label className="alpha__text">PH 50 M 1000</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">MV File Number</label>
            <label className="alpha__text">MV 0123</label>
          </div>
          <div className="quote__details">
            <label className="insurance__text">Authen Code</label>
            <label className="alpha__text">AU00123</label>
          </div>
          <div className="insured_vehicle_text">Insured Vehicle Photo</div>
          <div class="grid m-0">
            <div class="col-6">
              <div className="vehicle__left__text mt-2">
                Vehicle Left Side Photo
              </div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/51rWbD4/idimage.png"
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
                  src="https://i.ibb.co/51rWbD4/idimage.png"
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
                  src="https://i.ibb.co/51rWbD4/idimage.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
            <div class="col-6">
              <div className="vehicle__left__text">Vehicle Rear Side Photo</div>
              <div className="image__text mt-2">
                <img
                  src="https://i.ibb.co/51rWbD4/idimage.png"
                  alt="idimage"
                  className="image__size"
                />
              </div>
            </div>
            <div className="vehicle__left__text mt-2">
              Vehicle Interior Dashboard Photo
            </div>
            <div class="grid m-0">
              <div className="col-12">
                <div className="image__texts mt-2">
                  <img
                    src="https://i.ibb.co/51rWbD4/idimage.png"
                    alt="idimage"
                    className="image__size"
                  />
                </div>
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
        />
        <Button label="Send to Insurance Company" classNames="policy_button" onClick={() => { handleclick() }}>
          <SvgRightarrow />
        </Button>
      </div>
    </div>
  );
};

export default LeadPreview;
