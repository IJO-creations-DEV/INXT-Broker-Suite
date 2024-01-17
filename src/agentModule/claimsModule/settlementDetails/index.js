import React, { useRef, useState } from 'react'
import NavBar from '../../../components/NavBar'
import SvgLeftArrow from '../../../assets/agentIcon/SvgLeftArrow'
import { Card } from 'primereact/card'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'primereact/button'
import DropdownField from '../../component/DropdwonField'
import InputTextField from '../../component/inputText'
import { Checkbox } from 'primereact/checkbox'
import DatepickerField from '../../component/datePicker'
import { FileUpload } from "primereact/fileupload";
import SvgImageUpload from '../../../assets/icons/SvgImageUpload'
import SvgImageShow from "../../../assets/agentIcon/SvgHelp";


const SettlementDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const handleEdit = () => {
    navigate('/agent/claimrequest/claimdetails')
  }
  const handleSubmit = () => {
    navigate('/agent/claimdetailedview/12344')

  }
  const handleNext = () => {

  }
  const fileUploadRef = useRef(null);
  const [uploadImage, setuploadImage] = useState(null);
  const handleUppendImg = (name, src) => {
    console.log(name, src, "find handleUppendImg");
    setuploadImage(src?.objectURL);
  };
  const handleCancelUplaoded = () => {
    setuploadImage(null);
    fileUploadRef.current.clear();
  };
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <NavBar />
      <div className='claim__details__container'>
        <div className="claim__details__container__titles">Clients</div>
        <div className="claim__details__container__back__btn mt-3">
          <SvgLeftArrow />
          <div className="claim__details__container__back__btn__title">Client Id: {id}</div>
        </div>
        <Card>

          <div className="claim__details__card__container__title">
            Claim Request
          </div>
          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DropdownField label="Country" />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <InputTextField
                label="Policy Number"
              />
            </div>
          </div>

          <div className="grid mt-2">
            <div className="col-12 md:col-6 lg:col-6">
              <DatepickerField
                label="Issue Date"
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <DatepickerField
                label="Settle date"
              />

            </div>
          </div>
          <div>
            Document
          </div>
          <div className="col-12">
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
            {uploadImage && (
              <div class="col-12 mt-2 ">
                <span onClick={handleCancelUplaoded}>
                  <SvgImageShow />
                </span>
              </div>
            )}
            <div className="col-12">
              <div className="back__next__btn__container">
                <div className="back__btn__container">
                  <Button className="back__btn" link>Back</Button>
                </div>
                <div className="next__btn__container">
                  <Button className="next__btn" onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <div>
              
            </div>
          <DropdownField label="Country" />

          </div> */}
        </Card>
        {/* <ClaimDetailsCard /> */}
      </div>
    </div >
  )
}

export default SettlementDetails
