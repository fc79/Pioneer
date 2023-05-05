import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { useNavigate } from 'react-router-dom';
const Login = function (props) {
  const loginUrl = 'https://api.pestelecom.ir/v1/login';
  const [isSubmited, setIsSubmited] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      setData({
        username: values.username,
        password: values.password,
      });
      setIsSubmited(true);
    },
  });

  useEffect(() => {
    if (isSubmited) {
      axios({
        method: 'POST',
        url: loginUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(
              authActions.login({
                accessToken: res.data.access,
                refreshToken: res.data.refresh,
              })
            );
            navigate('/home');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isSubmited, data, dispatch, navigate, loginUrl]);

  return (
    <main className={`${props.className} ${styles.auth}`}>
      <section>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.control}>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};
export default Login;
