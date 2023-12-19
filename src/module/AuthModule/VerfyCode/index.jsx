import React from 'react';
import '../Register/index.scss'; 
import SvgWhiteLogo from '../../../assets/icons/SvgWhiteLogo';
import InputField from '../../../components/InputField';
import { Button } from 'primereact/button';

const VerfyCode = () => {
    return (
        <div className="grid m-0 container__login">
            <div className="col-12 md:col-8 left__side__login">
                <div>
                    <div className="p-mt-5 side__logo">
                        <div className="p-mt-1 welcome__text">
                            Welcome to
                        </div>
                        <SvgWhiteLogo color={"#fff"} />
                        <div className="logo__cover___white">
                            Cover
                        </div>
                    </div>
                    <div className="welcome__content">
                        A productive finance dashboard for all your needs
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-4 p-5">
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <div className='logo__icon'>
                    <SvgWhiteLogo color={"#000"} />
                    </div>
                </div>
                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <div className='login__header'>Verify code</div>
                </div>
                <div className="col-12 md:col-12 lg:col-12 m-1"
                >
                    <div className='code__text'>code</div>
                </div>

                <div style={{display:'flex'}} className="col-12 md:col-12 lg:col-12 verify__view d-flex justify-content-center align-items-center">
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                    <div className="col-2 md:col-2 lg:col-2 input__container">
                        <InputField classNames='input__filed' />
                    </div>
                </div>



                <div className="col-12 md:col-12 lg:col-12  "
                >
                    <Button
                        className='login__button'
                        label='Verify'
                    />
                </div>

            </div>
        </div>
    );
}

export default VerfyCode;
