import React, { useState, useRef } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import { useFormik } from "formik";
import SvgDot from "../../../../assets/icons/SvgDot";
import { useNavigate } from "react-router";
import SvgBackArrow from "../../../../assets/icons/SvgBackArrow";
import CustomToast from "../../../../components/Toast";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgAdd from "../../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Column } from "primereact/column";
import InputField from "../../../../components/InputField";
import SvgDelete from "../../../../assets/icons/SvgDeleteIcon";
import { Card } from "primereact/card";
import { useDispatch, useSelector } from "react-redux";
import { postAddRequestMiddleware, postEditRequestMiddleware } from "../store/pettyCashRequestMiddleware";

const initialValue = {
  Narration: "",
  Amount: "",
};

const AddRequestTable = () => {
  const [visible, setVisible] = useState(false);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const navigate = useNavigate();

  const { AddRequestTable, loading } = useSelector(
    ({ pettyCashRequestReducer }) => {
      return {
        loading: pettyCashRequestReducer?.loading,
        AddRequestTable: pettyCashRequestReducer?.AddRequestTable,
      };
    }
  );

  
  const isEmpty = AddRequestTable.length === 0;

  const handleSubmit = () => {
    dispatch(postAddRequestMiddleware(totalAmount));
    toastRef.current.showToast();
    {
      setTimeout(() => {
        navigate("/accounts/pettycash/request");
      }, 2000);
    }
  };

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found">No data entered</div>
    </div>
  );

  const items = [
    { label: "Petty Cash", url: "/accounts/pettycash/addrequesttable" },
    {
      label: "Add Request",
      url: "/accounts/pettycash/addrequesttable",
    },
  ];
  const Initiate = { label: "Accounts" };

  const handleClick = () => {
    setVisible(true);
  };

  const handleBack = () => {
    navigate("/accounts/pettycash/pettycashrequest");
  };

  const headerStyle = {
    // width: "10rem",
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    textAlign: "center",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.Narration) {
      errors.Narration = "Narration is required";
    }

    if (!values.Amount) {
      errors.Amount = "Amount is required";
    }
    return errors;
  };

  const handleSave = (value) => {
    const valueWithId = {
      ...value,
      id: AddRequestTable?.length + 1,
    };
    dispatch(postEditRequestMiddleware(valueWithId));
    setVisible(false);
    setshow(true);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validate,
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  const totalAmount = AddRequestTable.reduce((total, item) => total + parseInt(item.Amount), 0);

  const handleDelete = (id) => {
  };

  return (
    <div className="add__request__table">
      <CustomToast ref={toastRef} message="Petty Cash Request Successfully"/>
      <div className="grid  m-0">
        <div className="col-12 md:col-6 lg:col-6">
          <div
            className="pettycash__title"
            onClick={() => {
              handleBack();
            }}
          >
            <SvgBackArrow />
            Add Request
          </div>
          <div className="mt-3">
            <BreadCrumb
              model={items}
              home={Initiate}
              className="breadCrums"
              separatorIcon={<SvgDot color={"#000"} />}
            />
          </div>
        </div>
      </div>
      <Card>
        <div className="sub__container grid ">
          <div className="sub__container__title col-12 md:col-6 lg:col-6">
            <div className="sub__request__title">Request List</div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="btn__container">
              <Button
                label="Add"
                icon={<SvgAdd color={"#fff"} />}
                className="add__btn"
                onClick={() => {
                  handleClick();
                }}
              />
            </div>
          </div>
        </div>
        <div className="table__container">
          <DataTable
            value={AddRequestTable}
            tableStyle={{ minWidth: "50rem" }}
            emptyMessage={isEmpty ? emptyTableIcon : null}
          >
            <Column
              field="Narration"
              header="Narration"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Amount"
              header="Amount"
              headerStyle={headerStyle}
              sortable
            ></Column>
            <Column
              field="Action"
              header="Action"
              headerStyle={{ ...headerStyle, display:"flex",justifyContent: 'flex-end' }}
              body={(rowData) => (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  icon={<SvgDelete />}
                  className="delete__btn"
                  onClick={() => handleDelete(rowData.id)}
                />
              </div>
              )}
            ></Column>
          </DataTable>
        </div>
      </Card>
      {show === true ? (
        <div className="grid mt-4">
          <div className="col-12 md:col-4 lg:col-4">
            <InputField
              classNames="input__filed"
              label="Total Amount"
              placeholder="Enter"
              textColor={"#111927"}
              disabled={true}
              textSize={"16"}
              textWeight={500}
              value={totalAmount}
            />
          </div>
        </div>
      ) : null}
      <div className="grid  mt-4">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="btn__container">
            <Button
              label="Approve"
              className="add__btn"
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
      <Dialog
        header="Add Request Item"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        headerStyle={{
          color: "#343434",
          fontFamily: "Inter var",
          fontSize: 16,
          fontWeight: 500,
          // lineHeight: "150%",
        }}
        className="dailog__container"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="grid">
            <div className="col-12 md:col-8 lg:col-8">
              <InputField
                // classNames="input__filed"
                classNames="fielduniqueone__container"
                label="Narration"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Narration}
                onChange={formik.handleChange("Narration")}
                error={
                  formik.touched.Narration &&
                  formik.errors.Narration
                }
              />
            </div>
            <div className="col-12 md:col-4 lg:col-4">
              <InputField
                classNames="fielduniqueone__container"
                label="Amount"
                placeholder="Enter"
                textColor={"#111927"}
                textSize={"16"}
                textWeight={500}
                value={formik.values.Amount}
                onChange={formik.handleChange("Amount")}
                error={
                  formik.touched.Amount &&
                  formik.errors.Amount
                }
              />
            </div>
          </div>
        </form>
        <div className="grid">
          <div className="col-12 md:col-12 lg:col-12 bt__container">
            <Button
              label="Save"
              className="add__btn"
              onClick={() => {
                formik.handleSubmit();
              }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddRequestTable;
