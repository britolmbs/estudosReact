import React from 'react';
import Routes from './routes';
import GlobalStyled from './styles/GlobalStyled';
import Header from './components/Header';
import { Router } from 'react-router-dom';
import history from './service/history';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyled />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
