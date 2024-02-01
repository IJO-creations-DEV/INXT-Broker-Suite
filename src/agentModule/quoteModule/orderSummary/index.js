import React, { useRef, useState } from "react";
import "./index.scss";
import { Card } from "primereact/card";
import SvgCountPlusIcon from "../../../assets/icons/SvgCountPlusIcon";
import SvgCountMinusIcon from "../../../assets/icons/SvgCountMinusIcon";
import CalculaitionTextInputs from "../../component/calculaitionTextInputs";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import CustomToast from "../../../components/Toast";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";
import { useFormik } from "formik";
import { AuthorizedSignatureOptions } from "./mock";
import { postOrderSummaryMiddleware } from "./store/orderSummaryMiddleware";
import { useDispatch } from "react-redux";

const initialValue = {
  NETpremium: "1,100.00",
  ValueAddedTax: "1,500.00",
  Others: "1,300.00",
  AuthorizedSignature: "",
  DocumentaryStampTax: "1,000.00",
  LocalGovtTax: "1,100.00",
  Discount: "000.00",
  NCD: "600",
  GrossPremium: "6000",
};

const OrderSummary = ({action}) => {
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const handleclick = (values) => {
    console.log(values, "valuesleo");
    dispatch(postOrderSummaryMiddleware(values));
    toastRef.current.showToast();
    setTimeout(() => {
      console.log(action,'find ')
      if(action==="edit"){
        navigate("/agent/quotedetailedit");
      }
      if(action==="view"){
        navigate("/agent/quotedetailview");
      }
    }, 2000);
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  const handleDiscountChange = (amount) => {
    const newDiscount = Math.max(0, Math.min(discount + amount, 30));
    setDiscount(newDiscount);
  };

  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      handleclick(values);
    },
  });

  const handlecalculation = () => {
    const count = (formik.values.GrossPremium * discount) / 100;
    formik.setFieldValue("Discount", count);
    console.log(count, formik.values.GrossPremium, "count");
  };
  return (
    <div className="order__summary__container">
      <CustomToast ref={toastRef} message="Quote Created Successfully" />
      <div className="order__summary__main__title">Leads</div>
      <div className="order__summary__back__btn mt-3">
        <SvgLeftArrow />
        <div className="order__summary__back__btn__title">
          Lead ID: 12345678
        </div>
      </div>
      {/* <form> */}
      <Card className="mt-4">
        <div className="order__summary__title">Create Quote</div>
        <div className="order__summary__subtitle mb-2 mt-2">Order Summary</div>
        <div class="grid mt-2 nested-grid">
          <div class="col-12 md:col-6 lg:col-6 xl:col-6">
            <div class="grid">
              <div class="col-12 md:col-12 lg:col-12 xl:col-12">
                <CalculaitionTextInputs
                  label="NET premium"
                  value={formik.values.NETpremium}
                  onChange={formik.handleChange("NETpremium")}
                  error={formik.touched.NETpremium && formik.errors.NETpremium}
                />
              </div>
              <div class="col-12 md:col-12 lg:col-12 xl:col-12 mt-2">
                <CalculaitionTextInputs
                  label="Value Added Tax"
                  value={formik.values.ValueAddedTax}
                  onChange={formik.handleChange("ValueAddedTax")}
                  error={
                    formik.touched.ValueAddedTax && formik.errors.ValueAddedTax
                  }
                />
              </div>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6">
            <div className="discount__dynamic__card">
              <div className="discount__dynamic__card__title">
                Discount (Optional)
              </div>
              <div className="discount__dynamic__card__subtitle">
                Enter discount you will give to customer
              </div>
              <div className="discount__dynamic__card__bottom">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleDiscountChange(-1);
                    handlecalculation();
                  }}
                >
                  <SvgCountMinusIcon />
                </div>
                <div className="discount__reflection__text">{`${discount}%`}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleDiscountChange(1);
                    handlecalculation();
                  }}
                >
                  <SvgCountPlusIcon />
                </div>
              </div>
            </div>
            <div
              className="discount__action__container"
              style={{ color: "green" }}
            >
              <div className="discount__action__text">Min 0%</div>
              <div className="discount__action__text">Max 30%</div>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2 ">
            <CalculaitionTextInputs
              label="Others(Acc. premium)"
              value={formik.values.Others}
              onChange={formik.handleChange("Others")}
              error={formik.touched.Others && formik.errors.Others}
            />
          </div>
          <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
            <DropdownField
              label="Authorized Signature"
              value={formik.values.AuthorizedSignature}
              options={AuthorizedSignatureOptions}
              onChange={(e) => {
                console.log(e.value);
                formik.setFieldValue("AuthorizedSignature", e.value);
              }}
              optionLabel="label"
              error={
                formik.touched.AuthorizedSignature &&
                formik.errors.AuthorizedSignature
              }
            />
          </div>

          <div class="col-12 md:col-12 lg:col-12 xl:col-12 p-0">
            <div class="grid m-0">
              <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Documentary Stamp Tax"
                  value={formik.values.DocumentaryStampTax}
                  onChange={formik.handleChange("DocumentaryStampTax")}
                  error={
                    formik.touched.DocumentaryStampTax &&
                    formik.errors.DocumentaryStampTax
                  }
                />
              </div>
            </div>
            <div class="grid m-0">
              <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Local Gov’t Tax"
                  value={formik.values.LocalGovtTax}
                  onChange={formik.handleChange("LocalGovtTax")}
                  error={
                    formik.touched.LocalGovtTax && formik.errors.LocalGovtTax
                  }
                />
              </div>
            </div>
            <div class="grid m-0">
              <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Discount"
                  value={formik.values.Discount}
                  onChange={formik.handleChange("Discount")}
                  error={formik.touched.Discount && formik.errors.Discount}
                />
              </div>
            </div>
            {/* <div class="grid m-0">
              <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="NCD (10%)"
                  value={formik.values.NCD}
                  onChange={formik.handleChange("NCD")}
                  error={formik.touched.NCD && formik.errors.NCD}
                />
              </div>
            </div> */}
            <div class="grid m-0">
              <div class="col-12 md:col-6 lg:col-6 xl:col-6 mt-2">
                <CalculaitionTextInputs
                  label="Gross Premium"
                  value={formik.values.GrossPremium}
                  onChange={formik.handleChange("GrossPremium")}
                  error={
                    formik.touched.GrossPremium && formik.errors.GrossPremium
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid m-0">
          <div className="col-12 p-0">
            <div className="back__next__btn__container">
              <div className="back__btn__container">
                <Button
                  className="back__btn"
                  onClick={() => handleBackNavigation}
                >
                  Back
                </Button>
              </div>
              <div className="next__btn__container">
                <Button
                  className="next__btn"
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                >
                  Completed Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* </form> */}
    </div>
  );
};

export default OrderSummary;
