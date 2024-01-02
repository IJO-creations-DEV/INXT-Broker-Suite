import React, { useState } from "react";
import "./index.scss";
import NavBar from "../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";
import TableData from "./TableData/index";
import ModalData from "./PopUpData/ModalData";
const AccountCategoryMaster = () => {
  const [visible, setVisible] = useState(false);
  const [EditID, setEditID] = useState(null);
  const [popUpAction, setpopUpAction] = useState(null);
  const [EmptyTable, setEmptyTable] = useState(false);
  const items = [
    {
      label: "Account Category",
      url: "/master/finance/accountcategory",
    },
  ];
  const home = { label: "Master" };
  const handleSave = (values) => {
    setVisible(false);
    setEmptyTable(true);
  };
  const handleEdit = (values) => {
    setVisible(false);
  };
  const handleAction = (editindex, actionName) => {
    setVisible(true);
    setEditID(editindex);
    setpopUpAction(actionName);
  };
  return (
    <div className="container__account__category__master">
      <div className="grid m-0 top__container">
        <div className="col-12 p-0">
          <NavBar />
        </div>
        <div className="col-12 p-0">
          <div className="correction__title__reversal">
            Account Category Master
          </div>
        </div>
        <div className="col-12 p-0 flex justify-content-end">
          <Button
            icon={
              <div className="pr-2">
                <SvgAdd />
              </div>
            }
            label="Add"
            className="correction__btn__reversal"
            onClick={() => handleAction(null, "Add")}
          />
        </div>
        <div className="col-12 p-0">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="grid m-0 table__container">
        <div className="col-12 p-0">
          <TableData handleAction={handleAction} EmptyTable={EmptyTable} />
        </div>
      </div>
      <ModalData
        visible={visible}
        setVisible={setVisible}
        handleSave={handleSave}
        setEditID={setEditID}
        handleEdit={handleEdit}
        popUpAction={popUpAction}
      />
    </div>
  );
};

export default AccountCategoryMaster;
