import React from 'react';
// Import SvgWhiteLogo from your SVG component
import '../Register/index.scss'; // Import your custom styles
// import SvgWhiteLogo from '../../../assets/icons/';
import InputField from '../../../components/InputField';
import { Button } from 'primereact/button';
import SvgLogo from '../../../assets/icons/SvgLogo';
import SvgCheckBox from '../../../assets/icons/SvgCheckBox';
import SvgWhiteLogo from '../../../assets/icons/SvgWhiteLogo';

const Register = () => {
    return (
        <div className="grid m-0 container__login">
            <div className="col-12 md:col-8 left__side__login">
                <div>
                    <div className="p-mt-5 side__logo">
                        <div className="p-mt-1 welcome__text">
                            Welcome to
                        </div>
                        <SvgWhiteLogo />
                        <div className="logo__cover___white">
                            Cover
                        </div>
                    </div>

                    <div className="welcome__content">
                        A productive finance dashboard for all your needs
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-4 ">
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <div className='logo__icon'>
                        <SvgLogo color={"#000"} />
                    </div>
                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <div className='login__header'>Register</div>
                </div>
                <div className="col-12 md:col-12 lg:col-12  ">
                    <div className='dont__have__text'>Already have an account?<span className='register'>Login</span></div>

                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <InputField
                        classNames='input__filed'
                        placeholder="Name"
                    />
                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <InputField
                        classNames='input__filed'
                        placeholder="Email Address"
                    />
                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <InputField
                        classNames='input__filed'
                        placeholder="Password"
                    />
                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >

                    <div className='dont__have__text'><span className='check__icon'><SvgCheckBox/></span> I have read the <span className='register'>Terms and Conditions</span></div>


                    </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <Button
                        className='login__button'
                        label='Register'
                    />
                </div>
                <div className="col-12 md:col-12 lg:col-12  ">
                    <div className='forget__text'>Forgot password?</div>
                </div>
            </div>
        </div>
    );
}

export default Register;
