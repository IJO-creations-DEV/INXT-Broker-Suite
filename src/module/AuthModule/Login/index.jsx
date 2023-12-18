import React from 'react';
// Import SvgWhiteLogo from your SVG component
import '../Login/index.scss'; // Import your custom styles
// import SvgWhiteLogo from '../../../assets/icons/SvgWhiteLogo';
import InputField from '../../../components/InputField';
import { Button } from 'primereact/button';
import SvgWhiteLogo from '../../../assets/icons/SvgWhiteLogo';
import SvgLogo from '../../../assets/icons/SvgLogo';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('register')
  }
  return (
    <div className="grid m-0 container__login">
      <div className="col-12 md:col-8 left__side__login">
        <div>
          <div className="p-mt-5 side__logo">
            <div className="p-mt-1 welcome__text">
              Welcome to
            </div>
            <SvgWhiteLogo  color={"#fff"}/>
            <div className="logo__cover___white">
              Cover
            </div>
          </div>

          <div className="welcome__content mt-2">
            A productive finance dashboard for all your needs
          </div>
        </div>
      </div>
      <div className="col-12 md:col-4 login__side__screen p-5" >
        <div className="col-12 md:col-12 lg:col-12  "
        >
          <div className='logo__icon'>
          <SvgWhiteLogo  color={"#000"}/>
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-12  "
        >
          <div className='login__header'>Log in</div>
        </div>
        <div className="col-12 md:col-12 lg:col-12   ">
          <div className='dont__have__text' onClick={() => handleNavigate()}>Don’t have an account?<span className='register'>Register</span></div>

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
          <Button
            className='login__button'
            label='Login'
          />
        </div>
        <div className="col-12 md:col-12 lg:col-12  ">
          <div className='forget__text'>Forgot password?</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
