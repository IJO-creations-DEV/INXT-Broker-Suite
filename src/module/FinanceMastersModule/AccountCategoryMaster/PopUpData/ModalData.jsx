import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../../components/DropDowns";
import InputField from "../../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../assets/icons/SvgDropdown";

const ModalData = ({
  visible,
  setVisible,
  setEditID,
  handleSave,
  handleEdit,
  popUpAction,
}) => {
  console.log(popUpAction, "find popUpAction");
  const customValidation = (values) => {
    const errors = {};

    if (!values.categoryCode) {
      errors.categoryCode = "This field is required";
    }
    if (!values.categoryName) {
      errors.categoryName = "This field is required";
    }
    if (!values.description) {
      errors.description = "This field is required";
    }

    return errors;
  };
  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values, "find values");
  };
  const formik = useFormik({
    initialValues: {
      categoryCode: "",
      categoryName: "",
      description: "",
    },
    validate: customValidation,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
      handleSave(values);
      handleEdit(values);
      setVisible(false);
    },
  });
  return (
    <Dialog
      header={
        popUpAction === "Edit"
          ? "Edit Category"
          : popUpAction === "View"
          ? "Account Category Detail"
          : "Add Account Category"
      }
      visible={visible}
      className="account__category__jv__Edit__modal__container"
      onHide={() => setVisible(false)}
      dismissableMask={true}
    >
      <div className="form__container">
        <div className="grid m-0 p-0">
          <div className="col-12 md:col-12 lg:col-4 xl:col-4 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Account Category Code"
              placeholder="enter"
              value={formik.values.categoryCode}
              onChange={(e) =>
                formik.setFieldValue("categoryCode", e.target.value)
              }
            />
            {formik.touched.categoryCode && formik.errors.categoryCode && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.categoryCode}
              </div>
            )}
          </div>
          <div className="col-12 md:col-12 lg:col-8 xl:col-8 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Account Category Name"
              placeholder="enter"
              value={formik.values.categoryName}
              onChange={(e) =>
                formik.setFieldValue("categoryName", e.target.value)
              }
            />
            {formik.touched.categoryName && formik.errors.categoryName && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.categoryName}
              </div>
            )}
          </div>
          <div className="col-12 md:col-12 lg:col-8 xl:col-8 ">
            <InputField
              classNames="input__field__corrections"
              className="input__label__corrections"
              label="Description"
              placeholder="enter"
              value={formik.values.description}
              onChange={(e) =>
                formik.setFieldValue("description", e.target.value)
              }
            />
            {formik.touched.description && formik.errors.description && (
              <div style={{ fontSize: 12, color: "red" }}>
                {formik.errors.description}
              </div>
            )}
          </div>

          <div
            className="col-12 save__popup__correction"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {popUpAction !== "View" && (
              <Button
                label={popUpAction === "Add" ? "Save" : "Update"}
                className="correction__btn__reversal"
                disabled={!formik.isValid}
                onClick={formik.handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalData;
