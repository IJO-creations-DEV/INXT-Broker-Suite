import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Toast } from "primereact/toast";
import "./index.scss";

const CustomToast = forwardRef((ref,props) => {
  const toast = useRef(null);
  useImperativeHandle(ref, () => ({
    showToast() {
      toast.current.show({
        severity: "success",
        detail:  "Successful Saved",
        life: 3000,
        icon: "pi pi-check-circle custom-icon",
      });
    },
  }));

  return <Toast ref={toast} />;
});

export default CustomToast;
