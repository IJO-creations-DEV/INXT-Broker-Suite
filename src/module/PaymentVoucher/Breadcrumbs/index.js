import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

const Breadcrumb = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#000"
      href="/"
      fontSize={16}
      fontWeight={500}
      // onClick={handleClick}
    >
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#000"
      href="/material-ui/getting-started/installation/"
      fontSize={16}
      fontWeight={500}
      // onClick={handleClick}
    >
      Accounts
    </Link>,
    <Typography key="3" color="#000" fontSize={16} fontWeight={400}>
      Payment Voucher
    </Typography>,
  ];

  return (
    <div>
      <Breadcrumbs
        separator="•"
        aria-label="breadcrumb"
        sx={{ marginBottom: 4 ,'& .MuiBreadcrumbs-separator': { color: 'black' }}}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
