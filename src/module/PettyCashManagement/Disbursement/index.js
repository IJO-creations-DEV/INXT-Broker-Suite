import React, { useState } from "react";
import InputField from '../../../components/InputField';
import DropDowns from '../../../components/DropDowns';
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import SvgDropdown from '../../../assets/icons/SvgDropdown';

const Disbursement = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const item = [
        {label: 'Initiate'},
        {label: 'Request'},
        {label: 'Disbursement'},
        {label: 'Disbursement'},
        {label: 'Replenish'}
    ];

  return (
    <div className="grid">
      <div className="col-12 md:col-2 lg-col-2 ">
        <InputField
          classNames="input__filed"
          label="Date "
          placeholder="11/12/2023"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2 lg-col-2 ">
        <InputField
          classNames="input__filed"
          label="Date "
          placeholder="11/12/2023"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2 lg-col-2 ">
        <InputField
          classNames="input__filed"
          label="Date "
          placeholder="11/12/2023"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2 lg-col-2 ">
        <InputField
          classNames="input__filed"
          label="Date "
          placeholder="11/12/2023"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
      <div className="col-12 md:col-2 lg-col-2 ">
        <InputField
          classNames="input__filed"
          label="Date "
          placeholder="11/12/2023"
          textColor={"#111927"}
          textSize={"16"}
          textWeight={500}
        />
      </div>
    </div>
  )
}

export default Disbursement
