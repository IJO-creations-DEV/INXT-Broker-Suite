import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/icons/SvgAdd";
import "../CurrencyMaster/index.scss";
import SvgDropdownicon from "../../../assets/icons/SvgDropdownicon";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../../assets/icons/SvgDot";
import NavBar from "../../../components/NavBar";
import SvgFilters from "../../../assets/icons/SvgFilters";
import InputField from "../../../components/InputField";
import SvgSearchIcon from "../../../assets/icons/SvgSearchIcon";
import { Paginator } from "primereact/paginator";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import SvgUploade from "../../../assets/icons/SvgUploade";
import SvgTable from "../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../assets/icons/SvgEyeIcon";
import ToggleButton from "../../../components/ToggleButton";
import SvgEditicon from "../../../assets/icons/SvgEdit";
// import { useNavigation } from '';
import { TieredMenu } from 'primereact/tieredmenu';
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyDetailEdit, getCurrencyDetailView, getCurrencySearchList } from "./store/currencyMasterMiddlewar";

const CurrencyMaster = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const { CurrencyList, loading, CurrencySearchList } = useSelector(({ currencyMasterReducer }) => {
    return {
      loading: currencyMasterReducer?.loading,
      CurrencyList: currencyMasterReducer?.CurrencyList,
      CurrencySearchList: currencyMasterReducer?.CurrencySearchList,
    };
  });
  const isEmpty = CurrencyList.length === 0;

  const emptyTableIcon = (
    <div className="empty-table-icon">
      <SvgTable />
    </div>
  );
  const menu = useRef(null);
  const menuitems = [
    {
      label: 'Name',
    },
    {
      label: 'Date',
    },
    {
      label: 'Voucher Number',
    },
  ];
  const template2 = {
    layout: 'RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
      ];

      return (
        <React.Fragment >
          <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }} >
            Row count :{' '}
          </span>
          <Dropdown value={options.value} className="pagedropdown_container" options={dropdownOptions} onChange={options.onChange} />
        </React.Fragment>
      );
    },

  };

  const renderViewButton = (rowData) => {

    return (
      <div className="center-content">
        <Button
          icon={<SvgEyeIcon />}
          className="eye__btn"
          onClick={() => handleView(rowData)}
        />
        <Button
          icon={<SvgEditicon />}
          className="eye__btn"
          onClick={() => handleEdit(rowData)}
        />
      </div>
    );
  };

  const renderToggleButton = () => {
    return (
      <div>
        <ToggleButton />
      </div>
    );
  };

  const handleView = (rowData) => {
    dispatch(getCurrencyDetailView(rowData));
    navigate("/master/finance/currency/viewcurrency");
  };

  const handleEdit = (rowData) => {
    dispatch(getCurrencyDetailEdit(rowData));
    navigate("/master/finance/currency/editcurrency");
  };
  const headerStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const ViewheaderStyle = {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
    display: "flex",
    justifyContent: "center",
    width: "8rem"
  };

  const handleNavigate = () => {
    navigate("/master/finance/currency/addcurrency");
  };

  const items = [{ label: "Currency", url: "/master/finance/currency" }];
  const home = { label: "Master" };

  const handleClick = () => { };

  useEffect(() => {
    if (search?.length > 0) {
      dispatch(getCurrencySearchList(search))
    }
  }, [search])

  return (
    <div className="grid  container__currency">
      <div className="col-12 md:col-6 lg:col-6 mb-1">
        <div className="add__icon__title">Currency Master</div>
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__reversal"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="col-12 md:col-6 lg:col-6 add__icon__alighn mb-1">
        <div className="btn__container">
          <Button
            label="Upload"
            icon={<SvgUploade color={"#fff"} />}
            className="upload__btn"
            onClick={() => {
              handleClick();
            }}
          />
          <Button
            label="Add"
            icon={<SvgAdd color={"#fff"} />}
            className="add__btn"
            onClick={() => {
              handleNavigate();
            }}
          />
        </div>
      </div>
      <div className="col-12 m-0 ">
        <div className="sub__account__sub__container">
          <div className="col-12 search__filter__view">
            <div className="col-12 md:col-12 lg:col-12">
              <div className="searchIcon__view__input mt-2">
                <span className="pl-3" style={{ color: 'gray' }}>
                  <i className="pi pi-search" />
                </span>
                <InputText
                  style={{ width: "100%" }}
                  classNames="input__sub__account"
                  placeholder="Search By Currency code "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 md:col-2 lg:col-2">
              {/* <TieredMenu model={menuitems} popup ref={menu} breakpoint="767px" />
            <Button label="Search by" outlined icon={<SvgDropdownicon />}
              className="sorbyfilter_container"
              onClick={(e) => menu.current.toggle(e)}
            /> */}
            </div>
          </div>
          <div className="col-12 ">
            <div className="main__tabel__title p-2">Currency List</div>
          </div>
          <div
            className="col-12 md:col-12 lg-col-12"
            style={{ maxWidth: "100%" }}
          >
            <div className="card">
              <DataTable
                value={search ? CurrencySearchList : CurrencyList}
                tableStyle={{
                  minWidth: "50rem",
                  color: "#1C2536",
                }}
                scrollable={true}
                scrollHeight="40vh"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                emptyMessage={isEmpty ? emptyTableIcon : null}
              >
                <Column
                  field="Currencycode"
                  header="Currency code"
                  sortable
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.Currencycode.toUpperCase()}
                ></Column>
                <Column
                  field="CurrencyName"
                  header="Currency Name"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.CurrencyName.toUpperCase()}
                //   sortable
                ></Column>
                <Column
                  field="ISOcode"
                  header="ISO code"
                  sortable
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.ISOcode.toUpperCase()}
                //   sortable
                ></Column>
                <Column
                  field="CurrencyFormat"
                  header="Currency Format"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.CurrencyFormat.toUpperCase()}
                ></Column>
                <Column
                  field="SmallestUnit"
                  header="Smallest Unit"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.SmallestUnit.toUpperCase()}
                ></Column>
                <Column
                  field="UnitDescription"
                  header="Unit Description"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                  body={(rowData) => rowData.UnitDescription.toUpperCase()}
                ></Column>
                <Column
                  body={(columnData) => <ToggleButton id={columnData.id} />}
                  header="Status"
                  headerStyle={{ textAlign: "center", ...headerStyle }}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  body={renderViewButton}
                  header="View"
                  headerStyle={{ ...ViewheaderStyle }}
                  className="fieldvalue_container_centered"
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyMaster;
