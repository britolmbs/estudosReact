import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom'; // Adicionado useLocation
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const location = useLocation();
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Navigate
        to={{ pathname: '/login', state: { prevPath: location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} element={<Component />} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
