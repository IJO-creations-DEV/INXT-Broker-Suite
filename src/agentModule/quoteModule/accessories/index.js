import React from "react";
import "./index.scss";
import SvgLeftArrow from "../../../assets/agentIcon/SvgLeftArrow";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import customHistory from "../../../routes/customHistory";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import InputTextField from "../../component/inputText";
import { postaccessoriesMiddleware } from "./store/accessoriesMiddleware";

const initialValue = {
  Aircon: "",
  Stereo:"",
  Magwheels:"",
  Others:"",
  Deductible:"",
  Towing:"",
  RepairLimit:""
};

const Accessories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (values) => {
    dispatch(postaccessoriesMiddleware(values));
    navigate("/agent/createquote/ordersummary");
  };
  const handleBackNavigation = () => {
    customHistory.back();
  };

  const formik = useFormik({
    initialValues: initialValue,
    // validate,
    onSubmit: (values) => {
      handleclick(values);
      // hadlecalculation();
    },
  });



  return (
    <div className="overall__create__quote__accessories">
      <div className="header__title">Leads</div>
      <div className="left__arrow mt-3">
        <SvgLeftArrow />
        <label className="left__arrow__text">Lead ID : 12345678</label>
      </div>
      <form>
        <Card className="mt-4">
          <div className="table__header">Create Quote</div>
          <div className="sub__heading mt-2">Accessories</div>
          <div class="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Aircon"
                value={formik.values.Aircon}
                onChange={formik.handleChange("Aircon")}
                error={formik.touched.Aircon && formik.errors.Aircon}
              />
            </div>
            <div class="col-6">
              <InputTextField
                label="Stereo"
                value={formik.values.Stereo}
                onChange={formik.handleChange("Stereo")}
                error={formik.touched.Stereo && formik.errors.Stereo}
              />
            </div>
          </div>
          <div className="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Mag wheels"
                value={formik.values.Magwheels}
                onChange={formik.handleChange("Magwheels")}
                error={formik.touched.Magwheels && formik.errors.Magwheels}
              />
            </div>
            <div class="col-6">
              <InputTextField
                label="Others"
                value={formik.values.Others}
                onChange={formik.handleChange("Others")}
                error={formik.touched.Others && formik.errors.Others}
              />
            </div>
          </div>
          <div class="grid mt-6">
            <div class="col-6">
              <InputTextField
                label="Deductible"
                value={formik.values.Deductible}
                onChange={formik.handleChange("Deductible")}
                error={formik.touched.Deductible && formik.errors.Deductible}
              />
            </div>
            <div class="col-6">
              <InputTextField
                label="Towing"
                value={formik.values.Towing}
                onChange={formik.handleChange("Towing")}
                error={formik.touched.Towing && formik.errors.Towing}
              />
            </div>
          </div>
          <div class="grid mt-2">
            <div class="col-6">
              <InputTextField
                label="Repair Limit"
                value={formik.values.RepairLimit}
                onChange={formik.handleChange("RepairLimit")}
                error={formik.touched.RepairLimit && formik.errors.RepairLimit}
              />
            </div>
          </div>
          <div className="back__button__container col-12 md:col-12 lg:col-12">
            <div className="back__text__container">
              <Button
                label="Back"
                className="back__btn"
                onClick={handleBackNavigation}
              />
            </div>
            <div className="next__text__container">
              <Button
                onClick={() => {
                  formik.handleSubmit();
                }}
                label="Next"
                className="next__btn"
              />
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Accessories;
