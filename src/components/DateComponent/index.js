import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiDateField: {
        styleOverrides: {
          root: {
            '& .MuiDateField-input': {
              borderColor: 'transparent',
              borderRadius: 30,
              height:45
            },
          },
        },
      },
    },
  });

export default function CalendarField() {
  const outerTheme = useTheme();

  const defaultDate = dayjs(); // Replace with your default date

  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
      }}
    >
      <ThemeProvider  theme={customTheme(outerTheme)}>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
          <DateField
           
            value={defaultDate}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
}
