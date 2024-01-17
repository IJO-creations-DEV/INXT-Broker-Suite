import React from 'react'
import { InputText } from "primereact/inputtext";
import SvgSearch from "../../../../../assets/agentIcon/SvgSearch"
const LeadListingTable = () => {
    return (
        <div>
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-6">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        {/* <SvgSearch/> */}
                        <InputText placeholder="Search" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LeadListingTable