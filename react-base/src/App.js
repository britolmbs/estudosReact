import React from 'react';
import Routes from './routes';
import GlobalStyled from './styles/GlobalStyled';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
