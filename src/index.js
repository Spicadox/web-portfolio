import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode="light" /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

