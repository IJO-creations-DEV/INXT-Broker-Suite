import React, { useRef, useState } from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import InputTextField from '../../component/inputText'
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from '../../../assets/icons/SvgImageUpload';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { InputTextarea } from 'primereact/inputtextarea';
import './index.scss'

const SendMail = () => {
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const navigate = useNavigate()
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };
  const handleSubmit = () => {
    navigate("/agent/claimrequest/requestapproval/122344")
  }
  return (
    <div className='claimrequest__details__container'>
      <div className="claim__details__container__titles">Clients</div>
      <div className="claim__details__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__details__container__back__btn__title">Client Id: 12345678</div>
      </div>
      <Card>
        <div className="claim__details__container__titles">Claim Request</div>
        <div className='mt-4'>
          <InputTextField
            label="Mail Subject"
          />
        </div>
        <div className='mt-4' >
          {/* <InputTextField 
          style={{height:"200px"}}
            label="Write"
          /> */}
            <InputTextarea label="Write" rows={5} cols={30} 
            placeholder="Write"
            className='claim__write__field'/>
        </div>
        
       
<div class="col-12 mt-4 p-0">
<div className="claim__request__upload__subtitle  mb-2">
          Documents
        </div>
            {/* {!imageURL ? ( */}
              <div className="upload__card__container mt-2">
                <div className="file_icon_selector">
                  <FileUpload
                    url="./upload"
                    auto
                    customUpload
                    mode="basic"
                    name="demo"
                    accept=".png,.jpg,.jpeg"
                    // maxFileSize={2000000}
                    uploadHandler={(e) => {
                      handleUppendImg(
                        e.options.props.name,
                        e.files[0],
                        "the data"
                      );
                    }}
                  />
                  <div className="icon_click_option">
                    <SvgImageUpload />
                  </div>
                  <div className="upload__caption text-center">Upload</div>
                  <div className="upload__caption text-center">
                    Maximum 2 MB (PNG or JPEG Files Only)
                  </div>
                </div>
              </div>
            {/* ) : ( */}
              {/* <div className="upload__image__area mt-2">
                <img src={imageURL} alt="Image" className="image__view" />
              </div>
            ) */}
            {/* } */}
          </div>

        <div className='claimrequest__back__but'>
          <Button link className='claim__back__but'>
            Back
          </Button>
          <Button onClick={handleSubmit} className='claim__snd__but'>
            Send
          </Button>

        </div>

      </Card>
      {/* <ClaimDetailsCard /> */}
    </div>
  )
}

export default SendMail
