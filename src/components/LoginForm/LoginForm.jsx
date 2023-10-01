import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/AuthThunk';
import { Button } from 'components/ModalButton/ModalButton';

import * as Yup from 'yup';
import {
  Card,
  InputWrapper,
  LogoWrapper,
  IconWrapper,
  TitleLogin,
  FormLogin,
  InputLogin,
  ErrorLogin,
} from './LoginForm.styled';
import { ReactComponent as EmailIcon } from '../../images/svg/form-email.svg';
import { ReactComponent as LockIcon } from '../../images/svg/form-password.svg';
import { ReactComponent as LogoIcon } from '../../images/svg/logo.svg';
import { ReactComponent as Shield } from '../../images/svg/shield.svg';
import { ReactComponent as CloseShield } from '../../images/svg/close.shield.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Must be 12 characters or less')
        .required('Password is required'),
    }),
    onSubmit: async values => {
      const userCredentials = {
        email: values.email,
        password: values.password,
      };

      try {
        const response = await dispatch(logIn(userCredentials));

        if (response.payload === 'Request failed with status code 403') {
          toast.error('Access Forbidden: Provided password is incorrect.');
        } else if (response.payload === 'Request failed with status code 404') {
          toast.error('Access Forbidden: User with such email not found.');
        } else {
          toast.success('Successfully logged in!');
        }
      } catch (error) {
        toast.error(`An error occurred: ${error.message}`);
      }
    },
  });

  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }
  return (
    <Card>
      <FormLogin onSubmit={formik.handleSubmit}>
        <LogoWrapper>
          <LogoIcon className="logo-register" />
          <TitleLogin>Money Guard</TitleLogin>
        </LogoWrapper>
        <InputWrapper>
          <label htmlFor="email"></label>
          <EmailIcon className="icons-login" />

          <InputLogin
            placeholder="E-mail"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          {formik.touched.email && formik.errors.email ? (
            <ErrorLogin className="error">{formik.errors.email}</ErrorLogin>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password"></label>
          <LockIcon className="icons-login" />

          <InputLogin
            className="input-login"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <IconWrapper className="btn" onClick={togglePasswordVisibility}>
            {showPassword ? <CloseShield /> : <Shield />}
          </IconWrapper>

          {formik.touched.password && formik.errors.password ? (
            <ErrorLogin className="error">{formik.errors.password}</ErrorLogin>
          ) : null}
        </InputWrapper>
        <div className="button-wrapper">
          <Button type="submit" text="LogIn" isGradient={true} />
          <Link to="/register">Register</Link>
        </div>
      </FormLogin>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Card>
  );
};

export default LoginForm;
