import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            height: '46px', 
            border: 'none',
            borderRadius: 0,
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: 'white',
            },
            '&:focus': {
              backgroundColor: 'white',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover $notchedOutline': {
              borderColor: 'white', 
            },
            '&$focused $notchedOutline': {
              borderColor: 'white', 
            },
          },
          notchedOutline: {
            borderColor: 'transparent',
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            minHeight: '32px', 
          },
        },
      },
    },
  });

export default function SelectOptionComponent() {
  const outerTheme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Select value={"select"}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </ThemeProvider>
    </Box>
  );
}
