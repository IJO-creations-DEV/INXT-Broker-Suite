import { BreadCrumb } from "primereact/breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import SvgDot from "../../../assets/icons/SvgDot";
import "../Commission/index.scss";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import SvgSearchIcon from "../../../assets/icons/SvgSearchIcon";
import { TieredMenu } from "primereact/tieredmenu";
import CommissionTabel from "./CommissionTabel";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getCommissionSearchList } from "./store/commissionMiddleWare";

const Commission = () => {
  const [visible, setVisible] = useState(false);
  const [newDataTable, setnewDataTable] = useState([]);

  const navigate = useNavigate();
  const items = [
    { id: 1, label: "Commissions", url: "/master/generals/commission" },
  ];
  const home = { label: "Master " };
  const handleNavigate = () => {
    navigate("/accounts/journalvoucher/addjournalvoucture");
  };

  const handleEdit = () => {
    console.log("handleEdit success");
    setVisible(true);
  };
  const handlePolicy = () => {
    navigate("/master/generals/commission/addcommission");
  };

  const menu = useRef(null);
  const menuitems = [
    {
      label: "Name",
    },
    {
      label: "Date",
    },
    {
      label: "Voucher Number",
    },
  ];
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values.search, "getSearchPolicyList");
    dispatch(getCommissionSearchList({ textSearch: values.search }));
  };
  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handleSubmit,
  });
  useEffect(() => {
    if (formik.values.search !== "") {
      dispatch(getCommissionSearchList({ textSearch: formik.values.search }));
    }
  }, [formik.values.search]);

  const [products, setProducts] = useState([]);
  const { commissionList, loading, commissionSearchList, getCommissionEdit } =
    useSelector(({ commissionMianReducers }) => {
      return {
        loading: commissionMianReducers?.loading,
        commissionList: commissionMianReducers?.commissionList,
        commissionSearchList: commissionMianReducers?.commissionSearchList,
        getCommissionEdit: commissionMianReducers?.getCommissionEdit,
      };
    });
  console.log(commissionList, "commissionList");
  return (
    <div className="grid  container__commission">
      <div className="col-12 md:col-6 lg:col-6 mb-1">
        <div className="add__icon__title__Journal__Voture">
          Commissions Master
        </div>
        <div style={{margin:"20px 0px"}}>
          <BreadCrumb
            home={home}
            className={items.map((val) => {
              return val.label === "/subaccount"
                ? "breadCrums__view__reversal__Journal__Voture"
                : "item__color__Journal__Voture";
            })}
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="menu-container">
        <TieredMenu
          className="mt-2"
          model={menuitems}
          popup
          ref={menu}
          breakpoint="767px"
        />
      </div>
      <div className="col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture mb-3">
        <div className="add__icon__view__petty" onClick={handlePolicy}>
          <div className="add__icon__petty">
            <SvgAdd color={"#fff"} />
          </div>
          <div className="add__text__petty">Add</div>
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="sub__container__Journal__Voture">
          <form
            onSubmit={formik.handleSubmit}
            className="col-12 search__filter__view__Journal__Voture"
          >
            <div className="col-12 md:col-12 lg:col-12">
              <div className="searchIcon__view__input__Journal__Voture">
                <span className="pl-2">
                  {" "}
                  <SvgSearchIcon />
                </span>
                <InputText
                  style={{ width: "100%" }}
                  classNames="input__sub__account__Journal__Voture"
                  placeholder="Search By Commission Code"
                  value={formik.values.search}
                  onChange={formik.handleChange("search")}
                />
              </div>
            </div>
          </form>
          <div className="col-12 ">
            <div className="main__tabel__title__Journal__Voture p-2">
            Commission List
            </div>
          </div>
          <div
            className="col-12 md:col-12 lg-col-12"
            style={{ maxWidth: "100%" }}
          >
            <div className="card p-1">
              <CommissionTabel
                handleEdit={handleEdit}
                newDataTable={newDataTable}
                visible={visible}
                getCommissionEdit={getCommissionEdit}
                commissionList={
                  formik.values.search !== ""
                    ? commissionSearchList
                    : commissionList
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
