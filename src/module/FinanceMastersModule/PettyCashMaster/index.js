import React, { useState,useEffect} from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import NavBar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import SvgDot from "../../../assets/icons/SvgDot"
import SvgFilters from "../../../assets/icons/SvgFilters";
import SvgAdd from "../../../assets/icons/SvgAdd";
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { ProductService } from './mock';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import SvgArrow from "../../../assets/icons/SvgArrow";


const PettyCashMaster = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);


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
                    <Dropdown value={options.value} className="pagedropdown_container"options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
       
    };





    const headerStyle = {
      width:'14%',
        // backgroundColor: 'red',
        fontSize: 14,
        fontFamily: 'Inter var',
        fontWeight: 500,
        padding: 6,
        color:'#000',
        border: 'none',
        textalign:'center'
    };

  const items = [
    { label: "Petty Cash" },
    // { label: "Accounts " },
    // { label: "Receipts" },
  ];
  const home = { label: "Master" };
 
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
    navigate('/master/finance/pettycash/addpettycash')
  }
  const handleArrowClick=()=>{
    navigate('/master/finance/pettycash/pettycashdetail')
  }
  const handleEditClick = () => {
    navigate("/otherreceiptsview");
  };
  return (
    <div className='overall__pettycashmaster__container'>
         <NavBar/>
<div className="overallfilter_container">
         <div >
            <label className='label_header'>Petty Cash Master</label>
            <BreadCrumb
                model={items}
                home={home}
                className='breadcrumbs_container'
                separatorIcon={<SvgDot color={"#000"} />} />
          </div>
          <div className="filterbutton_container">
            {/* <SvgFilters/> */}
            
            <div className="addbutton_container" onClick={handlePolicy} >
          <SvgAdd className="addicon" />
          <p className="addtext">Add</p>
             </div>
          </div>
          </div>


          <Card 
        //   className="overallcard_container"
          >
            {/* <div className="searchiput_container"> */}
    

<div  className="header_search_container">
    <div class="col-12 md:col-6 lg:col-10">
        {/* <div class="text-center p-3 border-round-sm bg-primary font-bold"> */}
        <span className="p-input-icon-left" style={{width:"100%"}}>
                <i className="pi pi-search" />
                <InputText placeholder="Search By Petty Cash Code" className="searchinput_left"/>
            </span>
        </div>
    {/* </div> */}
    <div class="col-12 md:col-6 lg:col-2">
     
    <Button label="Sort By" outlined icon={<SvgFilters/>} className="sorbyfilter_container" /></div>
    
    </div>
    <div className="listlable_textcontainer">
<label className="listlable_text">Petty Cash List</label>

            </div>

    <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem',color:'#1C2536',maxHeight:'50vh',overflowy:"auto" }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} - {last} of {totalRecords}"
                    paginatorTemplate={template2}
                    className="datatable_container"
                >
                  
                    <Column field="name" header="Petty Cash Code" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="name" header="Petty Cash Name" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="Petty Cash Size" headerStyle={headerStyle} className='fieldvalue_container'></Column>
                    <Column field="quantity" header="Minimum Cash Box"  headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="name" header="Transaction Limit" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="name" header="Status" headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                    <Column field="category" header="View"  headerStyle={headerStyle}  className='fieldvalue_container'></Column>
                  
                    <Column
                  body={(params) => (
                    <SvgArrow onClick={() => handleArrowClick()} />
                  )}
                  header="View"
                  headerStyle={headerStyle}
                  className="fieldvalue_container"
                ></Column>
             
                </DataTable>


            </div>

</Card>


    </div>
  );
};

export default PettyCashMaster;
