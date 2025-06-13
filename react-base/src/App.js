import React from 'react';
import Routes from './routes';
import GlobalStyled from './styles/GlobalStyled';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import history from './service/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyled />
    </Router>
  );
}

export default App;
