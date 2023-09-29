import { ModalLogoutStyle } from '../ModalLogout/ModalLogoutStyle';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/AuthThunk';
import { ReactComponent as ReactLogo } from '../../images/svg/logo.svg';
export const ModalLogout = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const handelClickLogout = () => {
    dispatch(logOut());
  };
  return (
    <ModalLogoutStyle
      style={{ opacity: active ? '1' : '0', display: active ? 'flex' : 'none' }}
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-element">
          <ReactLogo className="logo-modal" />
          <p className="logo-text">Money Guard</p>

          <p className="text-logout">Are you sure you want to log out?</p>
          <button className="buttonlog logout" onClick={handelClickLogout}>
            Logout
          </button>
          <button className="buttonlog" onClick={() => setActive(false)}>
            Cancel
          </button>
        </div>
      </div>
    </ModalLogoutStyle>
  );
};
