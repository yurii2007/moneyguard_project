import { Button } from 'components/ModalButton/ModalButton';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthThunk';
import PasswordStrengthBar from 'react-password-strength-bar';
import * as Yup from 'yup';
import {
  Card,
  InputWrapper,
  InputRegister,
  TitleRegisters,
  LogoWrapper,
  FormRegister,
  ErrorRegister,
  IconWrapper,
} from './RegisterForm.styled';
import { ReactComponent as UserIcon } from '../../images/svg/form-user.svg';
import { ReactComponent as EmailIcon } from '../../images/svg/form-email.svg';
import { ReactComponent as LockIcon } from '../../images/svg/form-password.svg';
import { ReactComponent as LogoIcon } from '../../images/svg/logo.svg';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(12, 'Must be 12 characters or less')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async values => {
      const userCredentials = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      try {
        const response = await dispatch(register(userCredentials));

        if (response.payload === 'Request failed with status code 409') {
          alert('Access Forbidden: User with such email already exists');
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
          <label htmlFor="username"></label>

          <InputRegister
            placeholder="Name"
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <IconWrapper>
            <UserIcon />
          </IconWrapper>
          {formik.touched.username && formik.errors.username ? (
            <ErrorRegister className="error">
              {formik.errors.username}
            </ErrorRegister>
          ) : null}
        </InputWrapper>
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
        <InputWrapper>
          <label htmlFor="confirmPassword"></label>
          <InputRegister
            placeholder="Confirm password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <IconWrapper>
            <LockIcon />
          </IconWrapper>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <ErrorRegister className="error">
              {formik.errors.confirmPassword}
            </ErrorRegister>
          ) : null}
          <PasswordStrengthBar
            scoreWords={[
              'too short',
              'weak',
              'insecure',
              'secure',
              'god password',
            ]}
            barColors={['#ff868d', '#ffc727', '#9e40ba', '#7000ff', 'green']}
            password={formik.values.password}
          />
        </InputWrapper>
        <div className="button-wrapper">
          <Button type="submit" text="Register" isGradient={true} />
          <Button type="button" text="LogIn" isGradient={false} />
        </div>
      </FormRegister>
    </Card>
  );
};

export default RegisterForm;
