import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./index.scss";
import SvgWhatsAppIcon from "../../../../assets/agentIcon/SvgWhatsAppIcon";
import SvgDownloadIcon from "../../../../assets/agentIcon/SvgDownloadIcon";
import SvgEmailIcon from "../../../../assets/agentIcon/SvgEmailIcon";

const ShareOption = ({ modalVisible, setModalVisible }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://www.figma.com/file/STJkBwHGeOlCFmrkBBL"
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () =>{
    const pdfUrl = "https://zealeyeai-my.sharepoint.com/personal/infra_zealeye_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs%2FQuotation%20Template%2Epdf&parent=%2Fpersonal%2Finfra%5Fzealeye%5Fcom%2FDocuments%2FBroker%20Docs&ga=1";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  }

  return (
    <Dialog
      visible={modalVisible}
      header="Share"
      style={{ width: "40vw" }}
      className="modal__dialog__container"
      onHide={() => setModalVisible(false)}
      dismissableMask={true}
    >
      <div className="grid m-0">
        <div onClick={()=>handleSubmit()} className="col-2 p-0">
          <div className="common__div mb-2 cursor-pointer ">
            <SvgDownloadIcon />
          </div>
          <div className="share__option_caption">Download</div>
        </div>
        <div className="col-2 p-0">
          <div className="common__div mb-2 cursor-pointer">
            <SvgEmailIcon />
          </div>
          <div className="share__option_caption">Email</div>
        </div>
        <div className="col-2 p-0">
          <div className="common__div mb-2 cursor-pointer">
            <SvgWhatsAppIcon />
          </div>
          <div className="share__option_caption">WhatsApp</div>
        </div>

        <div className="col-12 submit__container">
          <div>https://www.figma.com/file/STJkBwHGeOlCFmrkBBL</div>
          <Button onClick={handleCopyToClipboard}>Copy</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ShareOption;
