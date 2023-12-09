import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Initiate from "../Initiate";
import Request from "../Request";
import Disbursement from "../Disbursement";
import Receipts from "../Receipts";
import Replenish from "../Replenish";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const SwitchTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%"}}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Initiate" {...a11yProps(0)} />
          <Tab label="Request" {...a11yProps(1)} />
          <Tab label="Disbursement" {...a11yProps(2)} />
          <Tab label="Receipts" {...a11yProps(3)} />
          <Tab label="Replenish" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Initiate/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Request/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Disbursement/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Receipts/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Replenish/>
      </CustomTabPanel>
    </Box>
  );
};

export default SwitchTabs;
