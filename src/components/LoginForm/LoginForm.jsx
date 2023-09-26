import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from 'redux/auth/AuthThunk';
import { Button } from 'components/ModalButton/ModalButton';
import * as Yup from 'yup';

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
    <form onSubmit={formik.handleSubmit}>
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
        <Button type="submit" text="LogIn" isGradient={true} />
        <Button type="button" text="Register" isGradient={false} />
      </div>
    </form>
  );
};

export default LoginForm;
