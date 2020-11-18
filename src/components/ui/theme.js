import { createMuiTheme } from '@material-ui/core';

/** currently unused colors
const gMango = "#F08A4B";
const gOrange="#F2A541";
const gMaize ="#F3CA40";
*/
const gRed = "#D78A76";
const gBlue = "#577590";


export default createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      red: `${gRed}`,
      blue: `${gBlue}`,
  
    },
    primary: {
      main: `${gBlue}`,
    },
    secondary: {
      main: `${gRed}`,
    }
  },
  typography: {

  }
});
