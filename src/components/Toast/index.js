import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { Toast } from "primereact/toast";
import "./index.scss";

const CustomToast = forwardRef((props, ref) => { 
  
  const { message } = props;

  const formatMessage = (Message) => {
    const parts = Message?.split(/\s+/);

    const formattedParts = parts.map((part, index) => {
      if (!isNaN(part)) {
        return (
          <span
            key={index}
            style={{
              color: "#29CE00",
              fontFamily: "Inter var",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {part}
          </span>
        );
      } else {
        return (
          <span
            key={index}
            style={{
              color: "black",
              fontFamily: "Inter var",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {part}
          </span>
        );
      }
    });

    return formattedParts.reduce((acc, curr) => [acc, " ", curr]);
  };

  const formattedMessage = formatMessage(message);
  console.log(formattedMessage, "leo");

  useImperativeHandle(ref, () => ({
    showToast() {
      toastRef.current.show({
        severity: "success",
        detail: formattedMessage,
        life: 3000,
        icon: "pi pi-check-circle custom-icon",
        className: "custom-toast",
      });
    },
  }));

  const toastRef = useRef(null);

  return <Toast ref={toastRef} />;
});

export default CustomToast;
