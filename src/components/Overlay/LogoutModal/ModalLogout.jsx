import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthThunk';
import { ReactComponent as ReactLogo } from '../../../images/svg/logo.svg';
import { useModal } from 'components/ModalContext/ModalContext';
import { LogoutStyles } from './ModalLogoutStyle';

export const ModalLogout = () => {
  const { modalClose } = useModal();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logOut());
  };
  return (
    <LogoutStyles>
      <ReactLogo className="logo-modal" />
      <p className="logo-text">Money Guard</p>

      <p className="text-logout">Are you sure you want to log out?</p>
      <button className="buttonlog logout" onClick={handleClickLogout}>
        Logout
      </button>
      <button className="buttonlog" onClick={modalClose}>
        Cancel
      </button>
    </LogoutStyles>
  );
};
