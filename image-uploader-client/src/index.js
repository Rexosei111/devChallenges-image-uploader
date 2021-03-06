import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import { responsiveFontSizes } from '@material-ui/core';

const Theme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
  },
}))

ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

