import React, { useEffect, useState } from "react";
import "./index.scss";
import { data } from "./mock";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import SvgLogo from "../../Assets/Icon/SvgLogo";
import SvgBell from "../../Assets/Icon/SvgBell";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const RightView = () => {
    if (isMobile) {
      return (
        <div className="barger__icon">
          <Button icon="pi pi-bars" text />
        </div>
      );
    } else {
      return (
        <div className="grid">
          <div className="image__main__block col">
            <div className="image__block">
              <Image src={data.Image} alt="Image" width="45" />
            </div>
          </div>
          <div className="col-7 md:col-5 lg:col-4">
            <div className="text__block">
              <div className="text">{data.Name}</div>
              <i className="pi pi-angle-right" style={{ color: "#6366f1" }}></i>
            </div>
          </div>
          <div className="bell__icon__block col">
            <div className="text-center">
              <div className="bell__icon bg-primary p-2">
                <SvgBell height={20} width={20} color={"#FFFFFFFF"} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="heder__block grid grid-nogutter">
      <div className=" col">
        <div className="left__side  p-4  bg-primary font-bold">
          <SvgLogo className="mr-2" color={"#FFFFFFFF"} />
        </div>
      </div>
      <div className="box__wrap col">
        <div className="right__side text-center p-2 font-bold">
          <RightView />
        </div>
      </div>
    </div>
  );
};

export default Header;
