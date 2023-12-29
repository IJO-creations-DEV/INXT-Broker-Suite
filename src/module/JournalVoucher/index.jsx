import { BreadCrumb } from 'primereact/breadcrumb';
import React, { useState, useRef } from 'react'
import NavBar from '../../components/NavBar';
import SvgDot from '../../assets/icons/SvgDot';
import "../JournalVoucher/index.scss"
import SvgAdd from '../../assets/icons/SvgAdd';
import { useNavigate } from 'react-router-dom';
import SvgFilters from '../../assets/icons/SvgFilters';
import { InputText } from 'primereact/inputtext';
import SvgSearchIcon from '../../assets/icons/SvgSearchIcon';
import { Dropdown } from 'primereact/dropdown';
import { dataa } from './data';
import { TieredMenu } from 'primereact/tieredmenu';
import SvgTable from '../../assets/icons/SvgTable';
import { useSelector } from 'react-redux';
import DataTabelJV from './DataTabelJV';

const JournalVoucher = () => {
  const { journalVoucherList, loading } = useSelector(({ journalVoucherReducers }) => {
    return {
      loading: journalVoucherReducers?.loading,
      journalVoucherList: journalVoucherReducers?.journalVoucherList,

    };
  }); const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newDataTable, setnewDataTable] = useState([]);
  const navigate = useNavigate()
  const items = [
    { id: 1, label: 'Journal Voucher', url: '/accounts/journalvoucher' },
  ];
  const home = { label: "Accounts " };
  const handleNavigate = () => {
    navigate('/accounts/journalvoucher/addjournalvoucture')
  };

  const [first, setFirst] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const handleEdit = () => {
    console.log("handleEdit success");
    setVisible(true);
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRowsPerPage(event.rows);
  };

 

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

  
  return (
    <div className='grid  container__Journal__Voture'>
      <div className='col-12'>
        <NavBar />
      </div>
      <div className='col-12 md:col-6 lg:col-6 mb-1'>
        <div className='add__icon__title__Journal__Voture'>Journal Voucher</div>

        <div className='mt-4'>
          <BreadCrumb
            home={home}
            className={items.map((val) => {
              return val.label === '/subaccount' ? 'breadCrums__view__reversal__Journal__Voture' : 'item__color__Journal__Voture';
            })}
            model={items}

            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>
      <div className="menu-container">
        <TieredMenu className='mt-2' model={menuitems} popup ref={menu} breakpoint="767px" />
      </div>
      <div className='col-12 md:col-6 lg:col-6 add__icon__alighn__Journal__Voture mb-3'>
        <div className='add__icon__view__Journal__Voture' onClick={handleNavigate}>
          <div className='add__icon__Journal__Voture' >
            <SvgAdd color={'#fff'} />
          </div>
          <div className='add__text__Journal__Voture'>
            Voucher
          </div>

        </div>
      </div>
      <div className='col-12 m-0 '>
        <div className='sub__container__Journal__Voture'>
          <div className='col-12 search__filter__view__Journal__Voture'>
            <div className='col-12 md:col-10 lg:col-10'>
              <div className='searchIcon__view__input__Journal__Voture'>
                <span className='p-1'> <SvgSearchIcon /></span>
                <InputText
                  style={{ width: '100%' }}
                  classNames='input__sub__account__Journal__Voture'
                  placeholder='Search by Transaction Code'
                />
              </div>
            </div>
            <div className='col-12 md:col-2 lg:col-2'>
              <div className='sort__filter__view__Journal__Voture' onClick={(e) => menu.current.toggle(e)}>
                <div className='sort__by__text__Journal__Voture'>Search By</div>
                <div>
                  <SvgFilters />
                </div>
              </div>

            </div>
          </div>
          <div className='col-12 '>
            <div className='main__tabel__title__Journal__Voture p-2'>Journal Voucher history</div>
          </div>

          <div className="col-12 md:col-12 lg-col-12" style={{ maxWidth: '100%' }}>
            <div className="card p-1">
              <DataTabelJV handleEdit={handleEdit} newDataTable={newDataTable} visible={visible}/>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default JournalVoucher
