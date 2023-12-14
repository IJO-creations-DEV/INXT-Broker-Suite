import React from "react";
import { useFormik } from "formik";
import SvgLogo from "../../Assets/Icon/SvgLogo";
import SvgFacebook from "../../Assets/Icon/SvgFacebook";
import SvgTwitter from "../../Assets/Icon/SvgTwitter";
import SvgInstagram from "../../Assets/Icon/SvgInstagram";
import SvgLinkedin from "../../Assets/Icon/Svglinkedin";
import SvgSendArrow from "../../Assets/Icon/SvgSendArrow";
import "./index.scss";
import InputField from "../components/InputField";
import { Button } from "primereact/button";
import { useLanguage } from "../../config/LanguageContext";

const formInitialValue = {
  email: "",
};

const Footer = () => {
  const { translate } = useLanguage();
  const handleSubmit = () => {
    console.log(formik.values, "value");
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: formInitialValue,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className="footer__block">
      <div className="grid">
        <div className="img__block col-12 md:col-6 lg:col-4">
          <div className="p-3">
            <SvgLogo className="mr-2" color={"#1E1E1E"} />
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="contact__block col-12 md:col-6 lg:col-3 ">
          <div class="contact__block__text p-2">
            {translate("Footer")["Do you have any concerns?"]}
          </div>
          <div class="contact__block__btn p-2">
            <Button label="Contact Us" />
          </div>
        </div>
        <div class="media__block col-12 md:col-6 lg:col-4">
          <div class="media__block__text p-2">
            {translate("Footer")["Follow us on social media"]}
          </div>
          <div class="media__block__icon grid p-2 mt-2">
            <div class="col-2 lg:col-1">
              <SvgFacebook />
            </div>
            <div class="col-2 lg:col-1">
              <SvgTwitter />
            </div>
            <div class="col-2 lg:col-1">
              <SvgInstagram />
            </div>
            <div class="col-2 lg:col-1">
              <SvgLinkedin />
            </div>
          </div>
        </div>
        <div class="email__block col-12 md:col-6 lg:col-4">
          <div class="email__block__text p-2">
            {translate("Footer")["Don’t miss out on any updates"]}
          </div>
          <div class=" p-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid">
                <div className="col">
                  <InputField
                    classNames="input__field__dark__box"
                    name="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    placeholder="Enter Your Email ID"
                    error={formik.errors.email}
                  />
                </div>
                <div className="email__block__btn col-2 ">
                  <Button
                    className="btn"
                    icon={<SvgSendArrow />}
                    type="submit"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="policy__block col-12 md:col-6 lg:col-2 md:text-center">
          <div class="policy__block__text p-2">
            {translate("Footer")["Privacy Policy"]}
          </div>
        </div>
        <div class="terms__block col-12 md:col-6 lg:col-3 md:text-center">
          <div class="terms__block__text p-2">
            {translate("Footer")["Terms of Use and Service"]}
          </div>
        </div>
        <div class="copyrigt__block col-12 md:col-12 lg:col-6">
          <div class="copyrigt__block__text p-2 mt-1 ">
            {
              translate("Footer")[
                "Copyright @ 2023 inxtcover. All Rights Reserved"
              ]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
