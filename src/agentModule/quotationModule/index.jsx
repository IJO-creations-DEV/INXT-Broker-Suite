import { Card } from 'primereact/card'
import React from 'react'
import QuotationTable from './quotationTable';
import "../quotationModule/index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import SvgDot from "../../assets/agentIcon/SvgDots";

const ClientListingCard = () => {
    const items = [
    
        { label: "Quotation", url: "/agent/clientlisting" },
       
      ];
      const Initiate = { label: "Home" };
      
    return (
        <div className="claim__table__container__quotation mt-4">
             <div class="grid mt-3">
        <div class="col-12 md:col-6 lg:col-6">
          <label className="leadlisting__overal__container__title">Quotation</label>
          <div className='mt-3'>
        <BreadCrumb
          model={items}
          home={Initiate}
          className="breadCrums"
          separatorIcon={<SvgDot color={"#000"} />}
        />
      </div>
        </div>
       
            <Card style={{ borderRadius: "20px",width:'100%' }}>
                


                <QuotationTable />



            </Card>
        </div>
        </div>
    )
}

export default ClientListingCard