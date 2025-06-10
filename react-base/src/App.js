import React from 'react';
import Login from './pages/login';
import GlobalStyled from './styles/GlobalStyled';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <GlobalStyled />
      <Login />
    </>
  );
}

export default App;
