import React, { useState } from "react";
import "./index.scss";
import NavBar from "../../../components/NavBar";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Button } from "primereact/button";
import TableData from "./TableData/index";
import ModalEditData from "./PopUpData/ModalEditData";
import ModalViewData from "./PopUpData/ModalViewData";
import ModalAddData from "./PopUpData/ModalAddData";
import { useSelector, useDispatch } from "react-redux";
import {
  getAccountCategoryDetailViewMiddleWare,
  getAccountCategoryDetailEditMiddleWare,
} from "./store/accountCategoryMeddleware";

const AccountCategoryMaster = () => {
  const dispatch = useDispatch();
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleView, setVisibleView] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
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
    // setVisible(false);
    setEmptyTable(true);
  };
  const handleEdit = (values) => {
    // setVisible(false);
  };
  const handleViewAction = (data) => {
    dispatch(getAccountCategoryDetailViewMiddleWare(data));
    setVisibleView(true);
  };
  const handleEditAction = (data) => {
    dispatch(getAccountCategoryDetailEditMiddleWare(data));
    setVisibleEdit(true);
  };
  const handleAddAction = () => {
    setVisibleAdd(true);
  };

  const handleAction = (editindex, actionName) => {
    setVisibleAdd(true);
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
              <div className="pt-1">
                <SvgAdd />
              </div>
            }
            label="Add"
            className="correction__btn__reversal"
            onClick={handleAddAction}
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
          <TableData
            handleViewAction={handleViewAction}
            handleEditAction={handleEditAction}
            EmptyTable={EmptyTable}
          />
        </div>
      </div>

      <ModalAddData
        visible={visibleAdd}
        setVisible={setVisibleAdd}
        handleSave={handleSave}
        setEditID={setEditID}
        handleEdit={handleEdit}
        popUpAction={popUpAction}
      />
      <ModalEditData
        visible={visibleEdit}
        setVisible={setVisibleEdit}
        handleSave={handleSave}
        setEditID={setEditID}
        handleEdit={handleEdit}
        popUpAction={popUpAction}
      />
      <ModalViewData
        visible={visibleView}
        setVisible={setVisibleView}
        handleSave={handleSave}
        setEditID={setEditID}
        handleEdit={handleEdit}
        popUpAction={popUpAction}
      />
    </div>
  );
};

export default AccountCategoryMaster;
