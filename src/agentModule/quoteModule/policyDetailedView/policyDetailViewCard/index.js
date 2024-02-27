import { Card } from "primereact/card";
import React from "react";
import InputTextField from "../../../component/inputText";
import DatepickerField from "../../../component/datePicker";
import SvgBlueArrow from "../../../../assets/agentIcon/SvgBlueArrow";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../../assets/agentIcon/SvgDot";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const initialValues = {
  PolicyNumber: "",
  Production: "12/12/2024",
  Inception: "12/12/2024",
  IssueDate: "12/12/2024",
  Expiry: "12/12/2025",
};

const handleSubmit = () => {
  // navigate("/agent/convertpolicy/uploadvehiclephotos");
};

const PolicyDetailedViewCard = ({ action }) => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/agent/endorsement/paymentconfirmation");
  };
  const handlePayLater = () => {
    navigate(`/agent/clientview/${123}`);
  };

  const { policydetailedlist, loading } = useSelector(
    ({ policyDetailedViewMainReducers }) => {
      return {
        loading: policyDetailedViewMainReducers?.loading,
        policydetailedlist: policyDetailedViewMainReducers?.policydetailedlist,
      };
    }
  );
  console.log(policydetailedlist, "find policydetailedlist");

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      handleSubmit();
    },
  });

  const handlePolicySubmit = () =>{
    const pdfUrl = "https://drive.google.com/file/d/1vGQQmRiSLyf5Tsu1VfYa6IOmFrXK_0gp/view";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleInvoiceSubmit = () =>{
    const pdfUrl = "https://drive.google.com/file/d/18LjJnT_J0jgpn9wKG1EKDsipYxIS6W7X/view";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="policy__detail__view__card__container mt-4">
      <Card>
        <div className="policy__details__card__view__container__title">
          Policy details
          {/* <SvgDot /> */}
        </div>
        <div className="grid mt-2">
          <div className="col-12">
            <InputTextField
              label="Insurance Company"
              value="Alpha Insurance company"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Product" value="Motor" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Policy Number"
              value={policydetailedlist.PolicyNumber}
              onChange={formik.handleChange("PolicyNumber")}
            />
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Production"
              value={formik.values.Production}
              // onChange={formik.handleChange("Production")}
            />
            {/* <DatepickerField
              label="Production"
              value={formik.values.Production}
              onChange={(e) => {
                formik.setFieldValue("Production", e.target.value);
              }}
              dateFormat="yy-mm-dd"
            /> */}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Inception"
              value={formik.values.Inception}
              // onChange={formik.handleChange("Inception")}
            />
            {/* <DatepickerField
              label="Inception"
              value={formik.values.Inception}
              onChange={(e) => {
                formik.setFieldValue("Inception", e.target.value);
              }}
              dateFormat="yy-mm-dd"
            /> */}
          </div>
        </div>

        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Issue Date"
              value={formik.values.IssueDate}
              // onChange={formik.handleChange("IssueDate")}
            />
            {/* <DatepickerField
              label="Issue Date"
              value={formik.values.IssueDate}
              onChange={(e) => {
                formik.setFieldValue("IssueDate", e.target.value);
              }}
              dateFormat="yy-mm-dd"
            /> */}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField
              label="Expiry"
              value={formik.values.Expiry}
              // onChange={formik.handleChange("Expiry")}
            />

            {/* <DatepickerField
              label="Expiry"
              value={formik.values.Expiry}
              onChange={(e) => {
                formik.setFieldValue("Expiry", e.target.value);
              }}
              dateFormat="yy-mm-dd"
            /> */}
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Total Coverage" value="1,00,000.00" />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <InputTextField label="Gross Premium" value="6,500.00" />
          </div>
        </div>

        <div className="policy__detail__view__title mt-2">Documents</div>
        <div className="grid mt-2">
          <div className="col-12 md:col-6 lg:col-6">
            <div onClick={()=>handlePolicySubmit()} className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">Policy</div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
                      View
                    </div>
                    <SvgBlueArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div onClick={()=>handleInvoiceSubmit()} className="policy__detail__view__box">
              <div className="grid mt-2">
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__title">
                    Invoice
                  </div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="policy__detail__view__box__container">
                    <div className="policy__detail__view__box__sub__title">
                      View
                    </div>
                    <SvgBlueArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {action === "edit" && (
          <div className="policy__detail__view__btn__container mt-4">
            <div className="paylater__btn__container">
              <Button className="back__btn" onClick={handlePayLater}>
                Pay Later
              </Button>
            </div>
            <div className="proceed__btn__container">
              <Button
                className="next__btn"
                onClick={() => {
                  handleclick();
                }}
              >
                Proceed to payment
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PolicyDetailedViewCard;
