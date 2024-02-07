
import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import "./index.scss";
import { useFormik } from "formik";
import DropDowns from "../../../../../components/DropDowns";
import InputField from "../../../../../components/InputField";
import { Button } from "primereact/button";
import SvgDropdown from "../../../../../assets/icons/SvgDropdown";
import SvgModalClose from "../../../../../assets/icons/SvgNodalClose";
import { useDispatch, useSelector } from "react-redux";
import { addLevelPatchEditPopup } from "../../store/commissionMiddleWare";
const ViewCommissionPopup = ({ showViewPopup, setShowViewPopup, handleUpdate }) => {
    const { loading, commissionPopupView } = useSelector(({ commissionMianReducers }) => {
        return {
            loading: commissionMianReducers?.loading,
            commissionPopupView: commissionMianReducers?.commissionPopupView

        };
    });
    console.log(commissionPopupView.sharingRate, "popupEditData")

    const codeOptionsMain = [
        { label: commissionPopupView.level, value: commissionPopupView.level },
      
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
    const dispatch=useDispatch()
    const handleSubmit = (value) => {
        // dispatch(addLevelPatchEditPopup(value))
        setShowViewPopup(false);
        console.log(value, "valuedata");
    }
    const [levetOptionData, setLevelOptionData]=useState([])

    // const setFormikValues = () => {
    //     const levelData=popupEditData?.level
       
    //     const updatedValues = {
    //         id: popupEditData?.id,
    //         level:levelData,
    //         sharingRate: popupEditData?.sharingRate,
    //         commissionCode: popupEditData?.commissionCode,
    //     };
    //     if(levelData){
    //         formik.setValues({ ...formik.values, ...updatedValues });
    //         setLevelOptionData([{ label: levelData, value: levelData }]);
    //     }
      
    //     formik.setValues({ ...formik.values, ...updatedValues });
    // };
    const formik = useFormik({
        initialValues: {
            level: "",
            sharingRate: "",

        },
        validate: customValidation,
        onSubmit:handleSubmit
        // onSubmit: (values) => {
        //     // console.log("Submitting form with values:", values);
        //     handleSubmit(values);
        //     // // formik.resetForm();
        //     // handleUpdate(values);
        //     setShowEditPopup(false);
        // },
    });
    // useEffect(() => {
    //     setFormikValues();
    // }, [popupEditData]);

    return (
        <Dialog
            header="Add Level Wise Commission Sharing "
            visible={showViewPopup}
            className="commission__modal__container master__flow__common__dialog__container"
            onHide={() => setShowViewPopup(false)}
            dismissableMask={true}
            style={{ boxShadow: "none" }} 
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
                            value={commissionPopupView.level}
                            onChange={(e) => formik.setFieldValue("level", e.value)}
                            options={codeOptionsMain}disabled={true}
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
                            label="sharingRate"
                            disabled={true}
                            value={
                                commissionPopupView.sharingRate
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
                    {/* <Button
                        label="Save"
                        className="jv__btn__reversal"
                        disabled={!formik.isValid}
                        onClick={formik.handleSubmit}
                    /> */}
                </div>

            </div>
        </Dialog>
    );
};

export default ViewCommissionPopup;


