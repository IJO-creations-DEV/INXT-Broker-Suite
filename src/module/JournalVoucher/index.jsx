import { BreadCrumb } from "primereact/breadcrumb";
import React, { useState, useRef, useEffect } from "react";
import NavBar from "../../components/NavBar";
import SvgDot from "../../assets/icons/SvgDot";
import "../JournalVoucher/index.scss";
import SvgAdd from "../../assets/icons/SvgAdd";
import { useNavigate } from "react-router-dom";
import SvgFilters from "../../assets/icons/SvgFilters";
import { InputText } from "primereact/inputtext";
import SvgSearchIcon from "../../assets/icons/SvgSearchIcon";
import { Dropdown } from "primereact/dropdown";
import { dataa } from "./data";
import { TieredMenu } from "primereact/tieredmenu";
import SvgTable from "../../assets/icons/SvgTable";
import { useDispatch, useSelector } from "react-redux";
import DataTabelJV from "./DataTabelJV";
import {
  getJournalVoucherSearchList,
  journalVoucherMiddleware,
} from "./store/journalVoucherMiddleware";
import { useFormik } from "formik";
import { data } from "./DetailsJournalVocture/data";
import SvgDropdown from "../../assets/icons/SvgDropdown";
import SvgDropdownicon from "../../assets/icons/SvgDropdownicon";

const JournalVoucher = () => {
  const { journalVoucherList, journalVoucherSearchList, loading } = useSelector(
    ({ journalVoucherMainReducers }) => {
      return {
        loading: journalVoucherMainReducers?.loading,
        journalVoucherList: journalVoucherMainReducers?.journalVoucherList,
        journalVoucherSearchList:
          journalVoucherMainReducers?.journalVoucherSearchList,
        // addJournalVoucher: journalVoucherReducers?.addJournalVoucher
      };
    }
  );
  console.log(journalVoucherList, "journalVoucherList");

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Name", code: "NY" },
    { name: "Edit", code: "RM" },
    { name: "Voucher Number", code: "LDN" },
  ];

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newDataTable, setnewDataTable] = useState([]);
  const navigate = useNavigate();
  const items = [
    { id: 1, label: "Journal Voucher", to: "/accounts/journalvoucher" },
  ];
  const home = { label: "Accounts " };
  const handleNavigate = () => {
    navigate("/accounts/journalvoucher/addjournalvoucture");
  };

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleEdit = () => {
    console.log("handleEdit success");
    setVisible(true);
  };
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values.search, "getSearchPolicyList");
    dispatch(getJournalVoucherSearchList({ textSearch: values.search }));
  };

  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handleSubmit,
  });
  useEffect(() => {
    if (formik.values.search !== "") {
      dispatch(
        getJournalVoucherSearchList({ textSearch: formik.values.search })
      );
    }
  }, [formik.values.search]);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
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

  // const dispatch=useDispatch();
  //   useEffect(()=>{
  // dispatch(journalVoucherMiddleware(data))
  //   },[])

  return (
    <div className="grid  container__Journal__Voture">
      <div className="col-12">
        <NavBar />
      </div>
      <div className="col-12 md:col-6 lg:col-6 mb-1">
        <div className="add__icon__title__Journal__Voture">Journal Voucher</div>
        <div className="mt-4">
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
        {/* <TieredMenu className='mt-2' model={menuitems} popup ref={menu} breakpoint="767px" /> */}
      </div>
      <div className="col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture mb-3">
        <div
          className="add__icon__view__Journal__Voture"
          onClick={handleNavigate}
        >
          <div className="add__icon__Journal__Voture">
            <SvgAdd color={"#fff"} />
          </div>
          <div className="add__text__Journal__Voture">Voucher</div>
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="sub__container__Journal__Voture">
          <div className="col-12 search__filter__view__Journal__Voture">
            {/* <form
              onSubmit={formik.handleSubmit}
              className="col-12 md:col-10 lg:col-10"
            >
              <div className="searchIcon__view__input__Journal__Voture">
                <span className="p-input-icon-left" style={{ width: "100%" }}>
                  <i className="pi pi-search" />
                  {/* <span className='p-1'> <SvgSearchIcon /></span> */}
                  {/* <InputText
                    style={{ width: "100%" }}
                    classNames="input__sub__account__Journal__Voture"
                    placeholder="Search by Transaction Code"
                    value={formik.values.search}
                    onChange={formik.handleChange("search")}
                  /> */}
                   {/* <InputText
                placeholder="Search customers"
                className="searchinput_left"
              />
                </span>
              </div>

            // </form> */} 
            <div class="col-12 md:col-6 lg:col-10" style={{ paddingLeft: 10 ,paddingRight:10}}>
            {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
            <span className="p-input-icon-left" style={{ width: "100%" }}>
              <i className="pi pi-search" />
              <InputText
                placeholder="Search customers"
                className="searchinput_left"
              />
            </span>
          </div>


            <div className="col-12 md:col-2 lg:col-2">
              {/* <div className='sort__filter__view__Journal__Voture' onClick={(e) => menu.current.toggle(e)}>
                <div className='sort__by__text__Journal__Voture'>Search By</div>
                <div>
                  <SvgFilters />
                </div>
              </div> */}
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Search by"
                className="sorbyfilter_container"
                dropdownIcon={<SvgDropdownicon />}
              />
            </div>
          </div>
          <div className="col-12 ">
            <div className="main__tabel__title__Journal__Voture " style={{ paddingLeft: 10,paddingRight:10 }}>
              Journal Voucher history
            </div>
          </div>
          <div
            className="col-12 md:col-12 lg-col-12"
            style={{ maxWidth: "100%", maxHeight: "40vh" ,paddingLeft:16,paddingRight:16}}
          >
            <div className="card p-1">
              <DataTabelJV
                handleEdit={handleEdit}
                newDataTable={newDataTable}
                visible={visible}
                journalVoucherList={
                  formik.values.search !== ""
                    ? journalVoucherSearchList
                    : journalVoucherList
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalVoucher;
