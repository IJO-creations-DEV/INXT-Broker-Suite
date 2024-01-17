import React, { useRef, useState } from 'react'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import InputTextField from '../../component/inputText'
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from '../../../assets/icons/SvgImageUpload';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

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
    <div className='claim__details__container'>
      <div className="claim__details__container__titles">Clients</div>
      <div className="claim__details__container__back__btn mt-3">
        <SvgLeftArrow />
        <div className="claim__details__container__back__btn__title">Client Id: 12345678</div>
      </div>
      <Card>
        <div className="claim__details__container__titles">Claim Request</div>
        <div>
          <InputTextField
            label="Mail Subject"
          />
        </div>
        <div>
          <InputTextField style={{
            height: 200
          }}
            label="Write"
          />
        </div>
        <div className="col-12 claim__request__upload__subtitle mt-2 mb-2">
          Documents
        </div>
        <div className="col-12">
          <Card>
            <div className="file_icon_selector">
              <FileUpload
                ref={fileUploadRef}
                url="./upload"
                auto
                customUpload
                mode="basic"
                name="demo"
                accept=".png,.jpg,.jpeg,.pdf"
                maxFileSize={2000000}
                uploadHandler={(e) => {
                  handleUppendImg(e.options.props.name, e.files[0]);
                }}
              />
              <div className="icon_click_option">
                <SvgImageUpload />
              </div>
              <div className="upload__caption text-center">Upload</div>
              <div className="upload__caption text-center">
                Maximum 2 MB (PNG, JPEG and PDF Files Only)
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Button link>
            Back
          </Button>
          <Button onClick={handleSubmit}>
            Send
          </Button>

        </div>

      </Card>
      {/* <ClaimDetailsCard /> */}
    </div>
  )
}

export default SendMail
