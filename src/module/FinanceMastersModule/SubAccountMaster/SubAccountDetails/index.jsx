import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import NavBar from "../../../../components/NavBar";
import SvgDot from "../../../../assets/icons/SvgDot";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import InputField from "../../../../components/InputField";
import { Card } from "primereact/card";
import { ScrollPanel } from "primereact/scrollpanel";
import SvgBackicon from "../../../../assets/icons/SvgBackicon";

const SubAdd = () => {
  const navigation = useNavigate();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);

  const item = [
    { name: "Main00123 - Main Account Description" },
    { name: "Main00125 - Main Account Description" },
    { name: "Main00128 - Main Account Description" },
  ];
  const item1 = [
    {
      name: "INR-Indian Currency",
      name: "EUR-Euro",
      name: "HKD-Hong Kong Dollar",
    },
  ];

  const items = [
    { label: "Sub Account", url: "/master/finance/subaccount" },
    {
      label: "Sub Account Details",
      url: "/master/finance/subaccount/subaccountdetails",
    },
  ];
  const texts = [
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
    "Main00123 - Main Account Description",
  ];
  const texts1 = [
    "INR - Indian Currency",
    "EUR - Euro",
    "HKD - 	Hong Kong Dollar",
    "AUD - 	Australian Dollar",
    "AUD - 	Australian Dollar",
  ];

  const home = { label: "Master" };
  useEffect(() => {
    const timerId = setTimeout(() => {
      setVisiblePopup(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [visiblePopup]);

  return (
    <div className="grid sub__details">
      <div className="col-12">
        <NavBar />
      </div>
      <div className="col-12 mb-2">
      <div className="svgback_container">
        <span onClick={() => navigation(-1)}>
            <SvgBackicon/>
            </span>
        <div className="add__sub__title">Sub Account Details</div>
        </div>
        <div className="mt-3">
          <BreadCrumb
            home={home}
            className="breadCrums__view__add__screen"
            model={items}
            separatorIcon={<SvgDot color={"#000"} />}
          />
        </div>
      </div>

      <Card>
        <div className="grid sub__details">
          <div className="col-12 md:col-3 lg:col-3">
            <InputField
              label="Sub Account Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              value="Sub00123"
            />
          </div>

          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              label="Sub Account Code"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              value="Sub account Name"
            />
          </div>
        </div>
        <div className="grid sub__details">
          <div className="col-12 md:col-6 lg:col-6">
            <InputField
              label="Description"
              classNames="dropdown__add__sub"
              className="label__sub__add"
              value="Description"
            />
          </div>
        </div>

        <div class="grid">
          <div class="sm-col-12  md:col-6 lg-col-6">
            <label className="main_acc_text">Main Account Code</label>

            <div>
              
              
                <ScrollPanel  className="scrollpanal_container">
                  <div>
                    {texts.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                  </div>
                </ScrollPanel>
              
            </div>
          </div>
          <div class="sm-col-12  md:col-6 lg-col-6">
            <label className="main_acc_text">Currency</label>

            <div>
             
                <ScrollPanel  className="scrollpanal_container">
                  <div>
                    {texts1.map((text, index) => (
                      <div key={index}>{texts1}</div>
                    ))}
                  </div>
                </ScrollPanel>
              
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default SubAdd;
