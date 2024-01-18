import { Card } from "primereact/card";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import BarchartMonthly from "./BarchartMonthly";
import SvgArrow from "../../../../assets/agentIcon/SvgArrow";

const CenterCard = ({ commission }) => {
  console.log(commission, "test data")

  const [selectedCity, setSelectedCity] = useState("2024");
  const cities = [
    { name: '2024' },
    { name: '2023' },
    { name: '2022' },
    { name: '2021' },
    { name: '2020' }
  ];

  return (
    <div className="center__card__container grid  m-0">
      <div className="col-12 md:col-8 lg:col-8">
        <Card>
          <div className="grid  m-0">
            <div className="col-12 md:col-6 lg:col-6">
              <div className="center__card__container__title">Earnings</div>
              <div className="center__card__container__sub__title">
                Based on the selected period
              </div>
            </div>
            <div className="center__card__container__tabs col-12 md:col-6 lg:col-6">
              <div className="center__card__container__year__lable">Year</div>
              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                className="w-full md:w-8rem" optionValue="name" />
            </div>
          </div>
          <BarchartMonthly year={selectedCity} data={commission} />

        </Card>
      </div>
      <div className="col-12 md:col-4 lg:col-4">
        <Card>
          <div>
            <div className="center__card__container__calender__title">
              Upcoming events
            </div>
            <div className="center__card__container__calender__sub__title">
              Based on the Activity Monitor
            </div>
            <div className="center__card__container__btn__container mt-3">
              <div className="center__card__container__btn">See More <SvgArrow /></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CenterCard;
