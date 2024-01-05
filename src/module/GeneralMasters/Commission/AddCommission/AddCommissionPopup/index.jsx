
import React from "react";
import { Dialog } from "primereact/dialog";
import "./index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../../../components/DropDowns";
import InputField from "../../../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";
import SvgModalClose from "../../../../../assets/icons/SvgNodalClose";
import { postAddLevelShareRatingCommission } from "../../store/commissionMiddleWare";
import { useDispatch } from "react-redux";
const AddCommissionPopup = ({ visible, setVisible, handleUpdate }) => {

    const codeOptionsMain = [
        { label: "Option 1", value: "Main00123" },
        { label: "Option 2", value: "Main00124" },
    ];


    const customValidation = (values) => {
        const errors = {};

        if (!values.level) {
            errors.level = "This field is required";
        }

        if (!values.sharingRate) {
            errors.sharingRate = "This field is required";
        }


        return errors;
    };
    // const handleSubmit = (values) => {
    //     console.log(values, "find values");
    //     setVisible(false);
    // };
    const dispatch=useDispatch()
    const handleSubmit = (values) => {
        dispatch(postAddLevelShareRatingCommission(formik.values))
          .then(() => {
            // toastRef.current.showToast();
            // setTimeout(() => {
            //     setVisible(false);
            // }, 2000);
            setVisible(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    
    const formik = useFormik({
        initialValues: {
            level: "",
            sharingRate: "",

        },
        validate: customValidation,
        onSubmit: (values) => {
            handleSubmit(values);
            formik.resetForm();
            handleUpdate(values);
            setVisible(false);
            
        },
    });
    
    return (
        <Dialog
            header="Add Level Wise Commission Sharing "
            visible={visible}
            className="commission__modal__container"
            onHide={() => setVisible(false)}
            dismissableMask={true}
        >
            <div className="form__container">
                <div className="grid m-0">
                    <div className="col-12 md:col-6 lg:col-6 xl:col-6">
                        <DropDowns
                            className="input__field__jv"
                            dropdownIcon={<SvgDropdown color={"#000"} />}
                            placeholder="Select "
                            classNames="select__label__jv"
                            optionLabel="value"
                            label="Level"
                            value={formik.values.level}
                            onChange={(e) => formik.setFieldValue("level", e.value)}
                            options={codeOptionsMain}
                        />
                        {formik.touched.level && formik.errors.level && (
                            <div
                                style={{ fontSize: 12, color: "red" }}
                                className="formik__errror__JV"
                            >
                                {formik.errors.level}
                            </div>
                        )}
                    </div>
                    <div className="col-12 md:col-6 lg:col-6 xl:col-6">
                        <InputField
                            classNames="input__field__jv"
                            className="input__label__jv"
                            label="Rate"
                            value={
                                formik.values.sharingRate
                            }
                            onChange={(e) => formik.setFieldValue("sharingRate", e.target.value)}
                        />
                        {formik.touched.sharingRate && formik.errors.sharingRate && (
                            <div
                                style={{ fontSize: 12, color: "red" }}
                                className="formik__errror__JV"
                            >
                                {formik.errors.sharingRate}
                            </div>
                        )}
                    </div>

                </div>



                <div
                    className="col-12 save__popup__jv"
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}
                >
                    <Button
                        label="Save"
                        className="jv__btn__reversal"
                        disabled={!formik.isValid}
                        onClick={formik.handleSubmit}
                    />
                </div>

            </div>
        </Dialog>
    );
};

export default AddCommissionPopup;


