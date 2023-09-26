import { Button } from 'components/ModalButton/ModalButton';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthThunk';
import * as Yup from 'yup';

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
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="error">{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      <div>
        <Button type="submit" text="Register" isGradient={true} />
        <Button type="button" text="LogIn" isGradient={false} />
      </div>
    </form>
  );
};

export default RegisterForm;
