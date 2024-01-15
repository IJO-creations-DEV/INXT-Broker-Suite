import React, { useEffect, useState } from "react";
import "../PettyDataTabel/index.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import SvgTable from "../../../../assets/icons/SvgTable";
import SvgEyeIcon from "../../../../assets/icons/SvgEyeIcon";
import { useNavigate } from "react-router-dom";
import data from "./data";
import ToggleButton from "../../../../components/ToggleButton";
import SvgEditIcon from "../../../../assets/icons/SvgEditIcon";
import { useDispatch, useSelector } from "react-redux";
import SvgIconeye from "../../../../assets/icons/SvgIconeye";
import SvgEditicon from "../../../../assets/icons/SvgEdit";
import { getPatchPettyCashEdit, getPettyCashView } from "../store/pettyCashMasterMiddleWare";
const PettyDataTabel = ({ newDataTable, pettyCashList }) => {

    const { getPettyCashEdit, loading } = useSelector(({ pettyCashMainReducers }) => {
        return {
            loading: pettyCashMainReducers?.loading,
            getPettyCashEdit: pettyCashMainReducers?.getPettyCashEdit

        };
    });
    console.log(getPettyCashEdit, "getPettyCashEdit");
    const navigate = useNavigate()
    const [first, setFirst] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRowsPerPage(event.rows);
    };
    const isEmpty = pettyCashList.length === 0;
    const emptyTableIcon = (
        <div className="empty-table-icon">
            <SvgTable />
        </div>
    );
    const renderToggleButton = () => {
        return (
            <div>
                <ToggleButton />
            </div>
        );
    };
    const headerStyle = {
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        // padding: 6,
        color: "#000",
        border: "none",
    };

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
    const dispatch = useDispatch()
    const handleView = (columnData) => {
        console.log(columnData.id, "columnData")
        dispatch(getPettyCashView(columnData))
        navigate(`/master/finance/pettycash/pettycashdetail/${columnData.id}`)

    }
    const handleEdit = (columnData) => {
        console.log(columnData,"columnData");
        dispatch(getPatchPettyCashEdit(columnData))
        // alert(columnData.id, "hiii")
        navigate(`/master/finance/pettycash/editpettycash/${columnData.id}`)
    }

    return (
        <div className="petty__cash__table__container">
            <DataTable
                value={pettyCashList}
                style={{ overflowY: 'auto', maxWidth: '100%' }}
                responsive={true}
                className='table__view__Journal__Voture'
                paginator
                paginatorLeft
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                onPage={onPageChange}
                onPageChange={onPageChange}
                emptyMessage={isEmpty ? emptyTableIcon : null}

            >
                <Column
                    field="pettycashcode"
                    header="Petty Cash Code"
                    className="fieldvalue_container"


                ></Column>
                <Column
                    field="pettycashname"
                    header="Petty Cash Name"
                    className="fieldvalue_container"

                ></Column>

                <Column
                    field="pettycashsize"
                    header="Petty Cash Size"
                    className="fieldvalue_container"


                ></Column>
                <Column
                    field="minicashbox"
                    header="Minimum Cash Box"
                    className="fieldvalue_container"


                ></Column>
                <Column
                    field="transactionlimit"
                    header="Transaction Limit"
                    className="fieldvalue_container"


                ></Column>
                <Column
                    field="status"
                    body={(columnData) => <ToggleButton id={columnData.id} />}
                    header="Status"
                    headerStyle={{ textAlign: 'center', ...headerStyle }}
                    className="fieldvalue_container"
                ></Column>

                <Column
                    field="action"
                    body={(columnData) => (
                        <div style={{ display: 'flex', justifyContent: 'space-between', cursor: "pointer" }}>
                           
                            <SvgIconeye onClick={() => handleView(columnData)} />
                            <SvgEditicon onClick={() => handleEdit(columnData)} />
                        </div>
                    )}
                    header="View"
                    className="fieldvalue_container"
headerStyle={
    {display:'flex',justifyContent:'center',alignItems:'center'}
}
style={{textAlign:'center'}}
                ></Column>
            </DataTable>
        </div>
    );
};

export default PettyDataTabel;
