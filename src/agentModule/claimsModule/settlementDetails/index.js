import React, { useRef, useState } from "react";
import NavBar from "../../../components/NavBar";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import DropdownField from "../../component/DropdwonField";
import InputTextField from "../../component/inputText";
import { Checkbox } from "primereact/checkbox";
import DatepickerField from "../../component/datePicker";
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from "../../../assets/icons/SvgImageUpload";
import SvgImageShow from "../../../assets/agentIcon/SvgHelp";
import "./index.scss";
import CustomToast from "../../../components/Toast";
import customHistory from "../../../routes/customHistory";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postSettlementClaimMiddleware } from "./Store/claimSettlementMiddleware";

const initialValues = {
  SettlementType: "",
  SettlementAmount: "",
  IssueDate: new Date(),
  SettleDate: new Date(),
};
const items = [{ label: "Cash" }, { label: "Card" }, { label: "Cheque" }];

const SettlementDetails = () => {
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const handleEdit = () => {
    navigate("/agent/claimrequest/claimdetails");
  };
  const handleSubmit = (value) => {
    toastRef.current.showToast();
    console.log("find settlement", value);
    dispatch(postSettlementClaimMiddleware(value));
    setTimeout(() => {
      navigate("/agent/claimdetailedview/12344");
    }, 2000);
  };

  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };
  const [checked, setChecked] = useState(false);
  const handleBackNavigation = () => {
    customHistory.back();
  };
  const formik = useFormik({
    initialValues: initialValues,
    // validate: customValidation,
    // onSubmit: handleSubmit,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <div>
      <CustomToast ref={toastRef} message="Claim Settled Successfully" />
      <div className="claim__settlementdetails__container">
        <div className="claim__details__container__titles">Clients</div>
        <div className="claim__details__container__back__btn mt-3">
          <SvgLeftArrow />
          <div className="claim__details__container__back__btn__title">
            Client Id: {id}
          </div>
        </div>
        <Card>
          <div className="claim__details__card__container__title">
            Claim Settlement
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField
                label="Settlement type"
                value={formik.values.SettlementType}
                onChange={(e) =>
                  formik.setFieldValue("SettlementType", e.value)
                }
                options={items}
                optionLabel="name"
                placeholder={"Select"}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Settlement Amount"
                value={formik.values.SettlementAmount}
                onChange={formik.handleChange("SettlementAmount")}
              />
            </div>
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DatepickerField
                label="Issue Date"
                value={formik.values.IssueDate}
                onChange={(e) => {
                  formik.setFieldValue("IssueDate", e.target.value);
                }}
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <DatepickerField
                label="Settle date"
                value={formik.values.SettleDate}
                onChange={(e) => {
                  formik.setFieldValue("SettleDate", e.target.value);
                }}
                dateFormat="yy-mm-dd"
              />
            </div>
          </div>

          <div class="col-12 mt-4 p-0">
            <div className="claim__request__upload__subtitle  mb-2">
              Documents
            </div>

            <div className="upload__card__container mt-2">
              <div className="file_icon_selector">
                <FileUpload
                  url="./upload"
                  auto
                  customUpload
                  mode="basic"
                  name="demo"
                  accept=".png,.jpg,.jpeg"
                  uploadHandler={(e) => {
                    handleUppendImg(
                      e.options.props.name,
                      e.files[0],
                      "the data"
                    );
                  }}
                />
                <div className="icon_click_option">
                  <SvgImageUpload />
                </div>
                <div className="upload__caption text-center">Upload</div>
                <div className="upload__caption text-center">
                  Maximum 2 MB (PNG or JPEG Files Only)
                </div>
              </div>
            </div>
          </div>

          <div className="claimrequest__back__but">
            <Button
              onClick={handleBackNavigation}
              link
              className="claim__back__but"
            >
              Back
            </Button>
            <Button onClick={formik.handleSubmit} className="claim__snd__but">
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SettlementDetails;
