import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Button } from "primereact/button";
import SvgAdd from "../../../assets/agentIcon/SvgAdd";
import TopCard from "./topCards";
import CenterCard from "./centerCards";
import BottomCard from "./bottomCards";
import { Menu } from "primereact/menu";
import SvgMotor from "../../../assets/agentIcon/SvgMotor";
import SvgTravel from "../../../assets/agentIcon/SvgTravel";
import SvgHome from "../../../assets/agentIcon/SvgHome";
import { Dialog } from "primereact/dialog";
import SvgSearch from "../../../assets/agentIcon/SvgSearch";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import SvgFrame from "../../../assets/agentIcon/SvgFrame";
import { InputText } from "primereact/inputtext";
import { getClientTableSearchListMiddleware } from "../../quoteModule/clientListing/store/clientsMiddleware";

const Dashboard = () => {
  const clientdata = [
    {
      name: "Carson Darrin",
      clientId: "123",
    },
    {
      name: "qwerty",
      clientId: "1234",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [existclient, setexistclient] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const { userDetails, commissionList } = useSelector(({ homeReducers }) => {
    return {
      userDetails: homeReducers?.dashboardDetails?.userDetails,
      commissionList: homeReducers?.dashboardDetails?.commission,
      // clientListTable:clientsReducers?.clientListTable
    };
  });

  const { clientListTable, ClientTableSearchList } = useSelector(
    ({ clientsReducers }) => {
      return {
        clientListTable: clientsReducers?.clientListTable,
        ClientTableSearchList: clientsReducers?.ClientTableSearchList,
      };
    }
  );
  console.log(clientListTable, ClientTableSearchList, "clientListTableHHH");
  const dropdownOptions = [
    {
      label: (
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => {
            handleClickMotor();
          }}
        >
          <div>
            <SvgMotor />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Motor
          </div>
        </div>
      ),
      value: "Motor",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <SvgTravel />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Travel
          </div>
        </div>
      ),
      value: "Travel",
    },
    {
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div>
            <SvgHome />
          </div>
          <div
            style={{
              fontFamily: "Inter var",
              fontWeight: 400,
              fontSize: "16px",
              color: "#111927",
              width: "100%",
            }}
          >
            Property
          </div>
        </div>
      ),
      value: "Property",
    },
  ];
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (search?.length > 0) {
      dispatch(getClientTableSearchListMiddleware(search));
    }
  }, [search]);
  const handleClickMotor = () => {
    setVisible(true);
  };

  const handleclick = () => {
    navigate("/agent/createlead");
  };
  const handleclientid = () => {
    navigate(`/agent/createquote/policydetails/createquote/${123}`);
  };

  return (
    <div className="dasboard__container">
      <div className="grid  mt-2">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="dasboard__container__title">Good Day to You !</div>
          <div className="dasboard__container__sub__title">John Visser</div>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <div className="btn_lable_save_container">
            <Dropdown
              value={selectedOption}
              options={dropdownOptions}
              // onChange={(e) => setSelectedOption(e.value)}
              placeholder="Create Quote"
              dropdownIcon={<SvgAdd />}
            />
          </div>
        </div>
      </div>
      <TopCard detail={userDetails} />
      <CenterCard commission={commissionList} />
      <BottomCard detail={userDetails} />
      <div className="home__dialog__container__control">
        <Dialog
          className="dailog__box__container agent__flow__common__dialog__container"
          visible={visible}
          style={{ width: "30vw" }}
          onHide={() => setVisible(false)}
          dismissableMask={true}
        >
          <div className="dailog__box__container__title">
            Choose a Quote for
          </div>
          <div className="dailog__box__inputs__container mt-4">
            <div
              className="dailog__box__inputs"
              onClick={() => {
                handleclick();
              }}
            >
              New Lead
            </div>
            <div
              className="dailog__box__inputs__existing__container mt-3 mb-6"
              onClick={() => setexistclient(true)}
            >
              <div className="dailog__box__inputs__existing">
                Existing Client
              </div>
              <div className="dailog__box__inputs__svg">
                <SvgSearch />
              </div>
            </div>
          </div>
        </Dialog>
        <Dialog
          header="Search"
          visible={existclient}
          style={{ width: "40vw" }}
          onHide={() => setexistclient(false)}
          dismissableMask={true}
          className="agent__flow__common__dialog__container"
        >
          <div className="dialog__existingclient__container">
            <div className="dialog__existingclient__header__container">
              <SvgFrame />
              <div style={{ display: "flex" }}>
                <span className="dialog__existingclient___tip">Tip.</span>
                <div className="dialog__existingclient___search">
                  Search by entering a Client Name or Client ID
                </div>
              </div>
            </div>
            <div class="grid">
              <div class="col-12 md:col-12 lg:col-12">
                <span className="p-input-icon-left" style={{ width: "100%" }}>
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Search"
                    style={{ width: "100%", borderRadius: "10px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </span>
              </div>
            </div>

            {search
              ? ClientTableSearchList
              : clientListTable.map((data, index) => {
                  console.log(data, "find data is coming");
                  return (
                    <div
                      className="dialog__existingclient__carddata"
                      onClick={() => {
                        handleclientid();
                      }}
                    >
                      <div className="dialog__existingclient__carddata__name">
                        {data?.Name}
                      </div>
                      <div className="dialog__existingclient__carddata__id">
                        Client ID :{data?.Category}
                      </div>
                    </div>
                  );
                })}

            {/* {search !== "" ? Array.isArray(ClientTableSearchList)
            : clientListTable.map((data) => (
              <div className="dialog__existingclient__carddata" onClick={() => { handleclientid() }}>
                <div className="dialog__existingclient__carddata__name">{data?.Name}</div>
                <div className="dialog__existingclient__carddata__id">Client ID :{data?.LeadID}</div>
              </div>
            ))
            
            // : clientListTable.map((data) => (
            //   <div className="dialog__existingclient__carddata" onClick={() => { handleclientid() }}>
            //     <div className="dialog__existingclient__carddata__name">{data?.Name}</div>
            //     <div className="dialog__existingclient__carddata__id">Client ID :{data?.LeadID}</div>
            //   </div>
            // ))}
          } */}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
