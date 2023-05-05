import React, { useState } from 'react';
import styles from './App.module.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store';
import Login from './pages/Login';
import Home from './pages/Home';
import ServingCell from './pages/ServingCell';
import Map from './pages/Map';
import SideMenu from './components/side-menu/SideMenu';
import CurrentNodeInfo from './components/HomePage/CurrentNodeInfo';

const App = () => {
  const [hideCurrentNode, setHideCurrentNode] = useState(false);
  const dispatch = useDispatch();
  dispatch(authActions.setToken());
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentNodeButtonClickHandler = (event) =>
    setHideCurrentNode(!hideCurrentNode);

  return (
    <div className={styles.container}>
      {isAuthenticated && (
        <React.Fragment>
          <SideMenu className={styles.menu} />
          <button
            className={styles.button}
            onClick={currentNodeButtonClickHandler}
          >
            {hideCurrentNode ? (
              <span>Show Current Node</span>
            ) : (
              <span>Hide Current Node</span>
            )}
          </button>
          <CurrentNodeInfo
            className={
              hideCurrentNode ? styles['current-hide'] : styles.current
            }
          />
        </React.Fragment>
      )}
      <Routes>
        {isAuthenticated ? (
          <React.Fragment>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/home"
              element={
                <Home
                  className={
                    hideCurrentNode ? styles['content-grow'] : styles.content
                  }
                  dashBoardButtons={styles['dashboard-buttons']}
                />
              }
            />

            <Route
              path="/serving-cell"
              element={
                <ServingCell
                  className={
                    hideCurrentNode ? styles['content-grow'] : styles.content
                  }
                />
              }
            />

            <Route
              path="/map"
              element={
                <Map
                  className={
                    hideCurrentNode ? styles['content-grow'] : styles.content
                  }
                />
              }
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login className={styles.login} />} />
          </React.Fragment>
        )}
      </Routes>
    </div>
  );
};

export default App;
