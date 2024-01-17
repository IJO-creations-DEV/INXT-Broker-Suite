import React, { useRef, useState } from 'react'
import NavBar from '../../components/NavBar'
import { TabPanel, TabView } from 'primereact/tabview'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import SvgFilters from '../../assets/icons/SvgFilters'
import { ClientListingData } from '../quoteModule/clientListing/mock'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import { Column } from 'primereact/column'
import { Menu } from 'primereact/menu'
import { useNavigate } from 'react-router-dom'
import { Card } from 'primereact/card'
import PaymentCard from './paymentCard'
import { Paginator } from 'primereact/paginator'

const Payments = () => {
  const menuRight = useRef(null);
  const navigate = useNavigate();
  const [endrosementModal, setEndrosementModal] = useState(false)

  const renderPaymentStatus = (rowData) => {
    console.log(rowData, "rowData");

    return (
      <div>
        {rowData?.payment}
      </div>
    )
  }
  const handleMenuToggle = (event, menuRef) => {
    menuRef.current.toggle(event);
  };
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
  const headerStyle = {
    textAlign: "end",
  };
  // const template2 = {
  //   layout:
  //     "RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
  //   RowsPerPageDropdown: (options) => {
  //     const dropdownOptions = [
  //       { label: 5, value: 5 },
  //       { label: 10, value: 10 },
  //       { label: 20, value: 20 },
  //       { label: 120, value: 120 },
  //     ];

  //     return (
  //       <div className="table__selector">
  //         <React.Fragment>
  //           <span style={{ color: "var(--text-color)", userSelect: "none" }}>
  //             Row count :{" "}
  //           </span>
  //           <Dropdown
  //             value={options.value}
  //             className="pagedropdown_container"
  //             options={dropdownOptions}
  //             onChange={options.onChange}
  //           />
  //         </React.Fragment>
  //       </div>
  //     );
  //   },
  // };
  const handleMenuClick = (menuItem) => {
    if (menuItem == "view") {
      navigate('/agent/claimrequest/claimdetails')
    }
    if (menuItem == "endrosement") {
      setEndrosementModal(true)
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

  const template2 = {
    layout:
      "RowsPerPageDropdown CurrentPageReport PrevPageLink  NextPageLink ",
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
              Rows per page:{" "}
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
  return (
    <div>
      <NavBar />
      <div>
        <div>
          Payments
        </div>
        <div>
          <div>
            <div>

            </div>
            <div>
              ₱ 174050
            </div>
            <div>
              Gross Premium
            </div>
          </div>
          <div>
            <div>

            </div>
            <div>
              ₱ 8400
            </div>
            <div>
              Collected Premium
            </div>
          </div> <div>
            <div>

            </div>
            <div>
              ₱ 8400
            </div>
            <div>
              Receivables
            </div>
          </div> <div>
            <div>

            </div>
            <div>
              ₱ 13920
            </div>
            <div>
              Earned Commission
            </div>
          </div>
        </div>
        <TabView>
          <TabPanel header="Paid">
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
                
              </div>
            </div>
            <div>
              <PaymentCard />
              <Paginator first={0} rows={10} totalRecords={50}
                template={template2} />

            </div>

            {/* <DataTable
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
                body={render}
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
            </DataTable> */}
          </TabPanel>
          <TabPanel header="Pending">
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="Reviewing">
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
              culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>

        </TabView>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Payments
