import React from "react";
import "./index.scss";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import SvgRightarrow from "../../../assets/agentIcon/SvgRightArrow";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";

const QuoteDetailView = () => {
  return (
    <div className="overall__quotecomparision__view__container">
      <div className="header_title">Leads</div>
      <div className="left_arrow mt-3">
        <SvgLeftArrow />
        <label className="left_arrow_text">Lead ID : 12345678</label>
      </div>
      <Card className="mt-4">
        <div className="table_header">Comparison</div>

        <div class="grid m-0">
          <div class="col-6">
            <div className="quote__id__text">Quote ID : 123456</div>
          </div>
          <div class="col-6">
            <div className="quote__id">Quote ID : 123457</div>
          </div>
        </div>
        <div className="grid m-0">
          <div className="col-6">
          <div className="sub_title">
          <label className="policy_text">Policy Details</label>
          <div className="quote_details">
            <label className="insurance_text">Insurance Company</label>
            <label className="alpha_text">Alpha Insurance Company</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Insurance Policy Type</label>
            <label className="alpha_text">CV</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Account Code</label>
            <label className="alpha_text">Acc012345</label>
          </div>
        </div>
            </div>
            <div className="col-6">
               <div className="sub_title">
          <label className="policy_text">Policy Details</label>
          <div className="quote_details">
            <label className="insurance_text">Insurance Company</label>
            <label className="alpha_text">Alpha Insurance Company</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Insurance Policy Type</label>
            <label className="alpha_text">CV</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Account Code</label>
            <label className="alpha_text">Acc012345</label>
          </div>
        </div>
            </div>
          </div>
      
       <div className="grid m-0">
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Assured Details</label>
          <div className="quote_details">
            <label className="insurance_text">Name</label>
            <label className="alpha_text">Carson</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Email ID</label>
            <label className="alpha_text">Carson@abc.com</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Contact Number</label>
            <label className="alpha_text">9874563210</label>
          </div>
        </div>

        </div>
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Assured Details</label>
          <div className="quote_details">
            <label className="insurance_text">Name</label>
            <label className="alpha_text">Carson</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Email ID</label>
            <label className="alpha_text">Carson@abc.com</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Contact Number</label>
            <label className="alpha_text">9874563210</label>
          </div>
        </div>
        </div>

       </div>

<div className="grid m-0">
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Insurance Vehicle Details</label>
          <div className="quote_details">
            <label className="insurance_text">Vehicle Brand</label>
            <label className="alpha_text">Honda</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Model Year</label>
            <label className="alpha_text">2024</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Vehicle Model</label>
            <label className="alpha_text">Vario CVT 150</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Model Variant</label>
            <label className="alpha_text">CVT 150</label>
          </div>

          <div className="quote_details">
            <label className="insurance_text">Vehicle Color</label>
            <label className="alpha_text">Black</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Seating Capacity</label>
            <label className="alpha_text">2</label>
          </div>
        </div>
        </div>
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Insurance Vehicle Details</label>
          <div className="quote_details">
            <label className="insurance_text">Vehicle Brand</label>
            <label className="alpha_text">Honda</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Model Year</label>
            <label className="alpha_text">2024</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Vehicle Model</label>
            <label className="alpha_text">Vario CVT 150</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Model Variant</label>
            <label className="alpha_text">CVT 150</label>
          </div>

          <div className="quote_details">
            <label className="insurance_text">Vehicle Color</label>
            <label className="alpha_text">Black</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Seating Capacity</label>
            <label className="alpha_text">2</label>
          </div>
        </div>
        </div>
        </div>

<div className="grid m-0">
<div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Coverage details</label>
          <div className="quote_details">
            <label className="insurance_text">Total Sum Insured</label>
            <label className="alpha_text">5,00,000.00</label>
          </div>
        </div>
        </div>
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Coverage details</label>
          <div className="quote_details">
            <label className="insurance_text">Total Sum Insured</label>
            <label className="alpha_text">5,00,000.00</label>
          </div>
        </div>
        </div>
        </div>

        <div className="grid m-0">
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Payment Details</label>
          <div className="quote_details">
            <label className="insurance_text">NET Premium</label>
            <label className="alpha_text">5000.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">DST</label>
            <label className="alpha_text">400.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">VAT</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">LGT</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Others</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Discount</label>
            <label className="alpha_text">-500.00</label>
          </div>
          <div className="quote_details">
            <label className="gross_texts">Gross premium</label>
            <label className="gross_counts">6500.00</label>
          </div>
        </div>
        </div>
        <div className="col-6">
        <div className="sub_title">
          <label className="policy_text">Payment Details</label>
          <div className="quote_details">
            <label className="insurance_text">NET Premium</label>
            <label className="alpha_text">5000.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">DST</label>
            <label className="alpha_text">400.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">VAT</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">LGT</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Others</label>
            <label className="alpha_text">500.00</label>
          </div>
          <div className="quote_details">
            <label className="insurance_text">Discount</label>
            <label className="alpha_text">-500.00</label>
          </div>
          <div className="quote_details">
            <label className="gross_text">Gross premium</label>
            <label className="gross_count">6500.00</label>
          </div>
        </div>
        </div>
        </div>
      </Card>
      <div className="button_component">
      
        <Button label="Download" classNames="policy_button">
        </Button>
      </div>
    </div>
  );
};

export default QuoteDetailView;
