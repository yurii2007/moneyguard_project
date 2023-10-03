import { HeaderStyled } from './HeaderStyled';
import { ReactComponent as ReactLogo } from '../../images/svg/logo.svg';
import { ReactComponent as ExitIconButton } from '../../images/svg/exit-icon.svg';
import { useState } from 'react';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { selectUserEmail } from 'redux/selectors';
import { useSelector } from 'react-redux';
import TranslationPanel from 'components/TranslationPanel/TranslationPanel';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [isModalShow, setModalShow] = useState(false);
  let userEmail = useSelector(selectUserEmail);
  userEmail = userEmail?.replace(/@.+/gi, '');
  const { t } = useTranslation();
  return (
    <>
      <HeaderStyled>
        <div className="logo-container">
          <ReactLogo className="logo-header" />
          <span className="logo-text">Money Guard</span>
        </div>
        <TranslationPanel />
        <div className="exit-container">
          <p className="user-name">{userEmail}</p>
          <div className="divider"></div>
          <button className="exit-button" onClick={() => setModalShow(true)}>
            <ExitIconButton className="exit-button-svg"></ExitIconButton>
            <span className="text-exit">{t('exit')}</span>
          </button>
        </div>
      </HeaderStyled>
      <ModalLogout active={isModalShow} setActive={() => setModalShow(false)} />
    </>
  );
};
