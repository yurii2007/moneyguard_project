import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ReactLogo } from '../../../images/svg/logo.svg';
import { logOut } from 'redux/auth/AuthThunk';
import { useModal } from 'components/ModalContext/ModalContext';
import { LogoutStyles } from './ModalLogoutStyle';

export const ModalLogout = () => {
  const { modalClose } = useModal();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClickLogout = () => {
    dispatch(logOut());
  };
  return (
    <LogoutStyles>
      <ReactLogo className="logo-modal" />
      <p className="logo-text">Money Guard</p>

      <p className="text-logout">{t('Are you sure you want to log out?')}</p>
      <button className="buttonlog logout" onClick={handleClickLogout}>
        {t('logout')}
      </button>
      <button className="buttonlog" onClick={modalClose}>
        {t('cancel')}
      </button>
    </LogoutStyles>
  );
};
