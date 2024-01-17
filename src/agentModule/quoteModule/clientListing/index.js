import React, { useRef, useState } from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate, useParams } from 'react-router-dom'
import { BreadCrumb } from 'primereact/breadcrumb'
import SvgDot from '../../../assets/icons/SvgDot'
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column'
import { ClientListingData } from './mock'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import SvgEditIcon from '../../../assets/icons/SvgEditIcon'
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext'
import SvgFilters from '../../../assets/icons/SvgFilters'

const ClientListing = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/agent/clientlisting')
  }
  const menuRight = useRef(null);
  console.log(menuRight, "ssd")
  const [visible, setVisible] = useState(false)
  const params = useParams();
  const { id } = params
  const home = { label: "Home" };

  const menuItems = [
    {
      label: 'View',
      command: () => handleMenuClick('view'),
      icon: "pi pi-refresh"

    },
    {
      label: 'Claim',
      command: () => handleMenuClick('claim'),
      icon: "pi pi-refresh"

    }, {
      label: 'Renewal',
      command: () => handleMenuClick('renewal'),
      icon: "pi pi-refresh"

    },
    {
      label: 'Endorsement',
      command: () => handleMenuClick('endrosement'),
      icon: "pi pi-refresh"

    }
  ];



  const items = [
    {
      label: "Clients",
      url: "/master/finance/accountcategory",
    }, {
      label: `Client ID: ${id}`,
      url: "/master/finance/accountcategory",

    }
  ]
  const handleEdit = (rowData) => {
    console.log(rowData.id, "rown");
    // setEditID(rowData.id);
    setVisible(true);
  };
  const headerStyle = {
    textAlign: "end",
  };
  const template2 = {
    layout:
      "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 },
      ];

      return (
        <div className="table__selector">
          <React.Fragment>
            <span style={{ color: "var(--text-color)", userSelect: "none" }}>
              Row count :{" "}
            </span>
            <Dropdown
              value={options.value}
              className="pagedropdown_container"
              options={dropdownOptions}
              onChange={options.onChange}
            />
          </React.Fragment>
        </div>
      );
    },
  };
  const handleMenuToggle = (event, menuRef) => {
    menuRef.current.toggle(event);
  };
  const handleMenuClick = (menuItem) => {
    if (menuItem == "view") {
      navigate('/agent/claimrequest/claimdetails')
    }
    // Handle the menu item click here
    console.log(`${menuItem} clicked`);
    // You can use the menuItem information as needed (e.g., display a toast)
    // toast.current.show({ severity: 'info', summary: `${menuItem} Clicked`, detail: 'Item clicked' });
  };




  const renderEditButton = (rowData) => {
    return (
      <div className="card flex justify-content-center">

        <Menu model={menuItems} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />

        <Button icon="pi pi-align-right" className="mr-2" onClick={(event) => handleMenuToggle(event, menuRight)} aria-controls="popup_menu_right" aria-haspopup />

      </div>
      // <div className="action__icon">
      //   <Button
      //     icon={<SvgEditIcon />}
      //     onClick={() => handleEdit(rowData.id)}
      //     className="action__button"
      //   />
      // </div>
    );
  };
  const renderPaymentStatus = (rowData) => {
    console.log(rowData, "rowData");

    return (
      <div>
        {rowData?.payment}
      </div>
    )
  }
  return (
    <div>
      <div className="claim__request__upload__main__title">Clients</div>
      <div className="col-12 p-0">
        <BreadCrumb
          home={home}
          className="breadCrums__view__reversal"
          model={items}
          separatorIcon={<SvgDot color={"#000"} />}
        />
      </div>

      <Card className="mt-4 border-round-3xl">
        <div className="card">
          <TabView>
            <TabPanel header="Policy">
              <div className="header_search_container">
                <div class="col-12 md:col-6 lg:col-9">
                  <span className="p-input-icon-left" style={{ width: "100%" }}>
                    <i className="pi pi-search" />
                    <InputText
                      placeholder="Search customers"
                      className="searchinput_left"
                    />
                  </span>
                </div>

                <div class="col-12 md:col-6 lg:col-3">
                  <Button
                    label="Sort By"
                    outlined
                    icon={<SvgFilters />}
                    className="sorbyfilter_container"
                  />
                </div>
              </div>

              <DataTable
                value={ClientListingData}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                currentPageReportTemplate="{first} - {last} of {totalRecords}"
                paginatorTemplate={template2}
                className="corrections__table__main"
                scrollable={true}
                scrollHeight="40vh"
              >
                <Column
                  field="policyNumber"
                  header="Policy Number"
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="grossPremium"
                  header="Gross Premium"
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="expiryDate"
                  header="Expiry Date"
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="payment"
                  header="Payment"
                  body={renderPaymentStatus}
                  className="fieldvalue_container"
                ></Column>
                <Column
                  field="id"
                  body={renderEditButton}
                  header="Action"
                  className="fieldvalue_container last__div__table"
                  headerStyle={headerStyle}
                ></Column>
              </DataTable>
            </TabPanel>
            <TabPanel header="Claim">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
            </TabPanel>
            <TabPanel header="Renewal">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>
            <TabPanel header="Endorsement">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>

          </TabView>
        </div>

      </Card>
    </div>
  )
}

export default ClientListing
