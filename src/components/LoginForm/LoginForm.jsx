import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/AuthThunk';
import { Button } from 'components/ModalButton/ModalButton';
import * as Yup from 'yup';
import {
  Card,
  ErrorRegister,
  InputRegister,
  InputWrapper,
  LogoWrapper,
  TitleRegisters,
  FormRegister,
  IconWrapper,
} from './LoginForm.styled';
import { ReactComponent as EmailIcon } from '../../images/svg/form-email.svg';
import { ReactComponent as LockIcon } from '../../images/svg/form-password.svg';
import { ReactComponent as LogoIcon } from '../../images/svg/logo.svg';

export const LoginForm = () => {
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
          alert('Access Forbidden: Provided password is incorrect.');
        } else if (response.payload === 'Request failed with status code 404') {
          alert('Access Forbidden: User with such email not found.');
        } else {
          alert('Successfully logged in!');
        }
      } catch (error) {
        alert('An error occurred:', error);
      }
    },
  });

  return (
    <Card>
      <FormRegister onSubmit={formik.handleSubmit}>
        <LogoWrapper>
          <LogoIcon className="logo-register" />
          <TitleRegisters>Money Guard</TitleRegisters>
        </LogoWrapper>
        <InputWrapper>
          <label htmlFor="email"></label>
          <InputRegister
            placeholder="E-mail"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <IconWrapper>
            <EmailIcon />
          </IconWrapper>

          {formik.touched.email && formik.errors.email ? (
            <ErrorRegister className="error">
              {formik.errors.email}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password"></label>
          <InputRegister
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <IconWrapper>
            <LockIcon />
          </IconWrapper>
          {formik.touched.password && formik.errors.password ? (
            <ErrorRegister className="error">
              {formik.errors.password}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
        <div className="button-wrapper">
          <Button type="submit" text="LogIn" isGradient={true} />
          <Button type="button" text="Register" isGradient={false} />
        </div>
      </FormRegister>
    </Card>
  );
};

export default LoginForm;
