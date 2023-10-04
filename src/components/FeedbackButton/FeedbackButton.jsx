import { useModal } from 'components/ModalContext/ModalContext';
import { useTranslation } from 'react-i18next';
import { FeedbackButtonStyled } from './FeedbackButton.styled';

export const FeedbackButton = () => {
  const { modalOpen } = useModal();
  const { t } = useTranslation();
  return (
    <FeedbackButtonStyled
      onClick={() => {
        modalOpen('feedback');
      }}
      type="button"
    >
      <span>{t('leave feedback')}</span>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </FeedbackButtonStyled>
  );
};
