import React, { useState,useEffect} from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../assets/icons/SvgDot"
import SvgFilters from "../../assets/icons/SvgFilters";
import SvgAdd from "../../assets/icons/SvgAdd";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { ProductService } from './mock';


const Index = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const headerStyle = {
        width: '12rem',
        // backgroundColor: 'red',
        fontSize: 16,
        fontFamily: 'Inter var',
        fontWeight: 500,
        padding: 6,
        color:'#000',
        border: 'none'
    };

  const items = [
    { label: "Dashboard" },
    { label: "Accounts " },
    { label: "Receipts" },
  ];
  const home = { label: "Dashboard" };
 
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [globalFilter, setGlobalFilter] = useState('');

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onGlobalFilterChange = (event) => {
    setGlobalFilter(event.target.value);
  };
 
  const handlePolicy =()=>{
    navigate('/createvoucher')
  }
  const handleArrowClick=()=>{
    navigate('/policyreceiptsview')
  }
  const handleEditClick = () => {
    navigate("/otherreceiptsview");
  };
  return (
    <div className='overall__paymentvoucher__container'>
         <NavBar/>
<div className="overallfilter_container">
         <div >
            <label className='label_header'>Payment Voucher</label>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />
          </div>
          <div className="filterbutton_container">
            <SvgFilters/>
            
            <div className="addbutton_container" onClick={handlePolicy} >
          <SvgAdd className="addicon" />
          <p className="addtext">Create Voucher</p>
             </div>
          </div>
          </div>


          <Card 
        //   className="overallcard_container"
          >
            <div className="searchiput_container">
    <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" className="searchinput_left"/>
            </span>
            </div>

    <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem',color:'#1C2536' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate=" FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                >
                  
                    <Column field="name" header="Branch Code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="name" header="Department" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="Document Date" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Document No"  headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="name" header="Customer Code" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="name" header="Instrument No" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="Instrument Status" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Amount" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="code" header="Action" headerStyle={headerStyle} className='fieldvalue_container'></Column>
             
                </DataTable>


            </div>

</Card>


    </div>
  );
};

export default Index;
