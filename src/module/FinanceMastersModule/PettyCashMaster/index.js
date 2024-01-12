import { BreadCrumb } from 'primereact/breadcrumb';
import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../../../components/NavBar';
import SvgDot from '../../../assets/icons/SvgDot';
import "../PettyCashMaster/index.scss"
import SvgAdd from '../../../assets/icons/SvgAdd';
import { useNavigate } from 'react-router-dom';
import SvgFilters from '../../../assets/icons/SvgFilters';
import { InputText } from 'primereact/inputtext';
import SvgSearchIcon from '../../../assets/icons/SvgSearchIcon';
import SvgUpload from "../../../assets/icons/SvgUpload"
import { TieredMenu } from 'primereact/tieredmenu';
import PettyDataTabel from './PettyDataTabel';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { getPettyCashSearchList } from './store/pettyCashMasterMiddleWare';


const PettyCashMaster = ({ response }) => {
  console.log(response, "response")
  const [visible, setVisible] = useState(false);
  const [newDataTable, setnewDataTable] = useState([]);
  const navigate = useNavigate()
  const items = [
    { id: 1, label: 'Petty Cash', url: '/master/finance/pettycash' },
  ];
  const home = { label: "Master " };
  const handleNavigate = () => {
    navigate('/accounts/journalvoucher/addjournalvoucture')
  };

  ;

  const handleEdit = () => {
    console.log("handleEdit success");
    setVisible(true);
  };
  const handlePolicy = () => {
    navigate('/master/finance/pettycash/addpettycash')
  }


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
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    console.log(values.search, "getSearchPolicyList");
    dispatch(getPettyCashSearchList({ textSearch: values.search }));
  }


  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handleSubmit
  });
  useEffect(() => {
    if (formik.values.search !== "") {

      dispatch(getPettyCashSearchList({ textSearch: formik.values.search }));
    }
  }, [formik.values.search]);
  const { pettyCashList, pettyCashSearchList, loading } = useSelector(({ pettyCashMainReducers }) => {
    return {
      loading: pettyCashMainReducers?.loading,
      pettyCashList: pettyCashMainReducers?.pettyCashList,
      pettyCashSearchList: pettyCashMainReducers?.pettyCashSearchList


    };
  });
  console.log(pettyCashList, "pettyCashList");

  return (
    <div className='grid  container__petty__cash'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6 mb-1'>
        <div className='add__icon__title__petty'>Petty Cash Master</div>
        <div className='mt-4'>
          <BreadCrumb
            home={home}
            className={items.map((val) => {
              return val.label === '/subaccount' ? 'breadCrums__view__reversal__petty' : 'item__color__petty';
            })}
            model={items}

            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="menu-container">
        <TieredMenu className='mt-2' model={menuitems} popup ref={menu} breakpoint="767px" />
      </div>
      <div className='col-12 md:col-6 lg:col-6 add__icon__alighn__petty mb-3'>
        <div className='upload__icon__view__petty' onClick={handleNavigate}>
          <div className='upload__icon__petty' >
            <SvgUpload color={'#fff'} />
          </div>
          <div className='upload__text__petty'>
            Upload
          </div>
        </div>
        <div className='add__icon__view__petty' onClick={handlePolicy}>
          <div className='add__icon__petty' >
            <SvgAdd color={'#fff'} />
          </div>
          <div className='add__text__petty'>
            Add
          </div>
        </div>
      </div>
      <div className='col-12 m-0 '>
        <div className='sub__container__petty'>
          <form onSubmit={formik.handleSubmit} className='col-12 search__filter__view__petty'>
            <div className='col-12 md:col-12 lg:col-12'>
              <div className='searchIcon__view__input__petty'>
                {/* <span className='pl-2'> <SvgSearchIcon /></span> */}
                <i className="pi pi-search pl-3" />
                <InputText
                  style={{ width: '100%' }}
                  classNames='input__sub__account__petty'
                  placeholder='Search By Petty Cash Code'
                  value={formik.values.search}
                  onChange={formik.handleChange("search")}
                />
              </div>
            </div>
          </form>
          <div className='col-12 '>
            <div className='main__tabel__title__petty p-2'>Petty Cash List</div>
          </div>
          <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card p-1">
              <PettyDataTabel handleEdit={handleEdit} newDataTable={newDataTable} visible={visible} pettyCashList={formik.values.search !== "" ? pettyCashSearchList : pettyCashList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PettyCashMaster

