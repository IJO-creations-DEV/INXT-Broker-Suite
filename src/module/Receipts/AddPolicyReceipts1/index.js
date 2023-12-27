import React, { useState } from "react";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import InputField from "../../../components/InputField";
import SvgDot from "../../../assets/icons/SvgDot";
import { Button } from "primereact/button";
import SvgDropdown from "../../../assets/icons/SvgDropdown";
import DropDowns from "../../../components/DropDowns";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import SvgBack from "../../../assets/icons/SvgBack";


function BranchAdding() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [selectedItem4, setSelectedItem4] = useState(null);
  const [selectedItem5, setSelectedItem5] = useState(null);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const handleClick =()=>{
    navigate("/addpolicyedit")
  }
  
  const navigate = useNavigate();
  const items = [{ label: "Receipts" }, { label: "Add Receipts" }];
  const home = { label: "Accounts " };
  const item = [
    { name: "Policy", code: "PL" },
    { name: "Policy1", code: "P1" },
    { name: "Policy2", code: "P2"},
   
  ];
  const item1 = [
    { name: "Branch00123", code: "BH" },
    { name: "Branch00345", code: "B1" },
    { name: "Branch00678", code: "B2"},
   
  ];
  const item2 = [
    { name: "Depart00123", code: "DP" },
    { name: "Depart00345", code: "D1" },
    { name: "Depart00678", code: "D2"},
   
  ];
  const item3 = [
    { name: "00123", code: "C1" },
    { name: "00345", code: "C2" },
    { name: "00678", code: "C3"},
   
  ];
  const item4 = [
    { name: "INR", code: "IR" },
    { name: "INR1", code: "IR1" },
    { name: "INR2", code: "IR2"},
   
  ];
  const item5 = [
    { name: "Trans0123", code: "TR1" },
    { name: "Trans345", code: "TR2" },
    { name: "Trans456", code: "TR3"},
   
  ];
 

  return (
    <div className="overall_add_policy_receipts_container">
        <NavBar/>
        <div>
        <SvgBack/>
      <label className="label_header">Add Receipts</label>
      </div>
      <BreadCrumb
        model={items}
        home={home}
        className="breadcrumbs_container"
        separatorIcon={<SvgDot color={"#000"} />}
      />
      <Card>
        <div class="grid">
          <div class="sm-col-12  md:col-3 lg-col-4 col-offset-9">
            <DropDowns
              className="dropdown__container"
              label="Receipt Date"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
        </div>
        <div class="grid">
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
            <div>
              <InputField
                classNames="field__container"
                label="Receipt Number"
                placeholder={"Enter"}
              />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Receipt Type"
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.value)}
              options={item}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Branch Code"
              value={selectedItem1}
              onChange={(e) => setSelectedItem1(e.value)}
              options={item1}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
          <div class="sm-col-12  md:col-3 lg-col-4">
            <div>
            <DropDowns
              className="dropdown__container"
              label="Department Code"
              
              value={selectedItem2}
              onChange={(e) => setSelectedItem2(e.value)}
              options={item2}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
            </div>
          </div>
        </div>

      
        <div class="grid">
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              className="dropdown__container"
              label="Customer Code"
              value={selectedItem3}
              onChange={(e) => setSelectedItem3(e.value)}
              options={item3}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="col-3 md:col-3 lg-col-3">
            <DropDowns
              className="dropdown__container"
              label="Currency Code"
              value={selectedItem4}
              onChange={(e) => setSelectedItem4(e.value)}
              options={item4}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
          </div>
          <div class="sm-col-12 col-12 md:col-3 lg-col-4">
          <DropDowns
              className="dropdown__container"
              label="Transaction Code"
              value={selectedItem5}
              onChange={(e) => setSelectedItem5(e.value)}
              options={item5}
              optionLabel="name"
              placeholder={"Select"}
              dropdownIcon={<SvgDropdown color={"#000"} />}
            />
           
          </div>
      
        </div>
     <div class="grid">
          <div class="col-6 md:col-6 lg-col-6">
            <div>
            <InputField
                classNames="field__container"
                label="Remarks (Optional)"
                placeholder={"Enter"}
              />
           
            </div>
          </div>
      
        </div> 

      </Card>

      <div className="next_container">
        <div className="exit_print_buttons">
          <Button label="Next" className="print" onClick={handleClick} />
        </div>
     
      </div>
    </div>
  );
}

export default BranchAdding;
