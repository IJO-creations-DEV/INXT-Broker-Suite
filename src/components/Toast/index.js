import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Toast } from "primereact/toast";
import "./index.scss";

const CustomToast = forwardRef((props, ref) => {
  const toast = useRef(null);

  useImperativeHandle(ref, () => ({
    showToast() {
      toast.current.show({
        severity: "success",
        detail: "Message Content",
        life: 3000,
        icon: "pi pi-check-circle custom-icon",
      });
    },
  }));

  return <Toast ref={toast} />;
});

export default CustomToast;
