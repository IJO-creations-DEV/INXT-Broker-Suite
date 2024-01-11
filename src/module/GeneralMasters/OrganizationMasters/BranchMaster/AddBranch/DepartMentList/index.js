import React, { useState, useEffect } from 'react'
import { Card } from "primereact/card";
import SvgAdd from '../../../../../../assets/icons/SvgAdd';
import { Button } from 'primereact/button';
import './index.scss'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Productdata from '../../../ComapanyMaster/mock'
import SvgTable from '../../../../../../assets/icons/SvgTable';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import InputField from '../../../../../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { getDepatmentView, postAddDepartment } from '../../store/branchMiddleware';
import SvgIconeye from '../../../../../../assets/icons/SvgIconeye';
import SvgEditicons from '../../../../../../assets/icons/SvgEditicons';

const DepartMentList = () => {
  const { departmentList, loading, depatmentView } = useSelector(({ organizationBranchMainReducers }) => {
    return {
      loading: organizationBranchMainReducers?.loading,
      departmentList: organizationBranchMainReducers?.departmentList,
      depatmentView: organizationBranchMainReducers?.depatmentView

    };
  });
  console.log(departmentList, "departmentList");
  const [visible, setVisible] = useState(false);
  const [visibleView, setVisibleView] = useState(false)
  const [visibleedit, setVisibleEdit] = useState(false)
  const isEmpty = Productdata.length === 0;

  const emptyTableIcon = (
    <div>
      <div className="empty-table-icon">
        <SvgTable />
      </div>
      <div className="no__data__found">No data entered</div>
    </div>
  );


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
  const handleView = (columnData) => {
    dispatch(getDepatmentView(columnData))
    setVisibleView(true)
  }
  const handleEdit = (columnData) => {
    setVisibleEdit(true)
  }
  const headerStyle = {
    fontSize: 16,
    fontFamily: "Inter var",
    fontWeight: 500,
    padding: 6,
    color: "#000",
    border: "none",
  };
  const dispatch = useDispatch()
  const initialValues = {
    DepartmentCode: "",
    DepartmentName: "",
    Description: ""
  }
  const handleSubmit = (values) => {
    alert("hii")
    dispatch(postAddDepartment(formik.values))
    setVisible(false)
  }
  const customValidation = (values) => {
    const errors = {}

    if (!values.DepartmentCode) {
      errors.DepartmentCode = "This field Code is required";
    }
    if (!values.DepartmentName) {
      errors.DepartmentName = "This field is required";
    }
    if (!values.Description) {
      errors.Description = "This field is required";
    }
    return errors
  }
  const formik = useFormik({
    initialValues: initialValues,
    validate: customValidation,
    onSubmit: handleSubmit,
  });



  return (
    <div className='overall_list'>
      <div className='cardlist_container'>
        <div className='subhead_list'>
          <label className='head_lable'>DepartMent List</label>

          <Button label="Add" icon={<SvgAdd />} onClick={() => setVisible(true)} />

        </div>

        <DataTable value={departmentList} tableStyle={{ minWidth: '50rem', marginTop: '1rem' }}
          paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
          // paginatorTemplate="RowsPerPageDropdown  FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} - {last} of {totalRecords}"
          paginatorTemplate={template2} scrollable={true}
          scrollHeight="40vh"
          emptyMessage={isEmpty ? emptyTableIcon : null}

        >

          <Column field="DepartmentCode" header="Department Code"></Column>
          <Column field="DepartmentName" header="Department Name"></Column>
          <Column field="Status" header="Status"></Column>
          <Column
            body={(columnData) => (
              <div className="action_icons">
                <SvgIconeye onClick={() => handleView(columnData)} />
                <SvgEditicons onClick={() => handleEdit(columnData)} />
              </div>
            )}
            header="Action"
            headerStyle={headerStyle}
            className="fieldvalue_container"
          >

          </Column>
        </DataTable>

      </div>
      <Dialog header="Add Department" visible={visible} style={{ width: '40vw' }} onHide={() => setVisible(false)}>
        <div class='grid'>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                placeholder={"Enter"}
                value={formik.values.DepartmentCode}
                onChange={formik.handleChange("DepartmentCode")}
              />
              {formik.touched.DepartmentCode && formik.errors.DepartmentCode && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.DepartmentCode}
                </div>
              )}
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Name"
                placeholder={"Enter"}
                value={formik.values.DepartmentName}
                onChange={formik.handleChange("DepartmentName")}
              />
              {formik.touched.DepartmentName && formik.errors.DepartmentName && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.DepartmentName}
                </div>
              )}
            </div>
          </div>
        </div>
        <div class='grid'>
          <div class="sm-col-12 col-12 md:col-12 lg-col-12">
            <div>
              <InputField
                classNames="field__container"
                label="Description"
                placeholder={"Enter"}
                value={formik.values.Description}
                onChange={formik.handleChange("Description")}
              />
              {formik.touched.Description && formik.errors.Description && (
                <div style={{ fontSize: 12, color: "red" }}>
                  {formik.errors.Description}
                </div>
              )}

            </div>
          </div>

          <div className="nexttextlable_container">

            <Button
              className="submittextlabel_button p-2"
              label="Save"
              onClick={formik.handleSubmit}

            />
          </div>

        </div>
      </Dialog>
      <Dialog header="Department Details" visible={visibleView} style={{ width: '40vw' }} onHide={() => setVisibleView(false)}>
        <div class='grid'>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                placeholder={"Enter"}
                value={depatmentView.DepartmentCode}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Name"
                placeholder={"Enter"}
                value={depatmentView.DepartmentName}
              />
            </div>
          </div>
        </div>
        <div class='grid'>
          <div class="sm-col-12 col-12 md:col-12 lg-col-12">
            <div>
              <InputField
                classNames="field__container"
                label="Description"
                placeholder={"Enter"}
                value={depatmentView.Description}
              />
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog header="Edit Details" visible={visibleedit} style={{ width: '40vw' }} onHide={() => setVisibleEdit(false)}>
      <div class='grid'>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Code"
                placeholder={"Enter"}
                value={depatmentView.DepartmentCode}
              />
            </div>
          </div>
          <div class="sm-col-12 col-12 md:col-6 lg-col-6">
            <div>
              <InputField
                classNames="field__container"
                label="Department Name"
                placeholder={"Enter"}
                value={depatmentView.DepartmentName}
              />
            </div>
          </div>
        </div>
        <div class='grid'>
          <div class="sm-col-12 col-12 md:col-12 lg-col-12">
            <div>
              <InputField
                classNames="field__container"
                label="Description"
                placeholder={"Enter"}
                value={depatmentView.Description}
              />
            </div>
          </div>
        </div>
        <div className="nexttextlable_container">

            <Button
              className="submittextlabel_button p-2"
              label="Update"
              onClick={formik.handleSubmit}

            />
          </div>
      </Dialog>
    </div>
  )
}

export default DepartMentList