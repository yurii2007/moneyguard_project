import emailjs from 'emailjs-com';
import {
  CancelButton,
  FormStyles,
  InputEditor,
  SaveButton,
  WrapperButton,
} from '../AddModal/AddModal.syled';
import {
  WrapperCategories,
  WrapperInputEditor,
} from '../EditModal/UpdateModal.styled';
import { useModal } from 'components/ModalContext/ModalContext';
import { useTranslation } from 'react-i18next';

export const FormFeedback = () => {
  const { modalClose } = useModal();
  const { t } = useTranslation();

  const onSubmit = async e => {
    e.preventDefault();
    const { email, name, feedback } = e.target;
    const clientFeedback = {
      from_name: name.value,
      message: feedback.value,
      from_email: email.value,
    };
    try {
      await emailjs.send(
        'service_7p9oult',
        'template_xp94twj',
        clientFeedback,
        'K8qxp8teKP_1Fn8-r'
      );
    } catch (error) {
      console.error(error);
    }
    modalClose();
  };

  return (
    <FormStyles onSubmit={onSubmit}>
      <WrapperInputEditor>
        <InputEditor
          placeholder={t('email')}
          type="email"
          name="email"
          required
        />
      </WrapperInputEditor>
      <WrapperInputEditor>
        <InputEditor placeholder={t('name')} type="text" name="name" />
      </WrapperInputEditor>
      <WrapperCategories>
        <textarea
          placeholder={t('feedback')}
          name="feedback"
          autoComplete="off"
          required
        ></textarea>
      </WrapperCategories>
      <WrapperButton>
        <SaveButton type="submit">{t('send')}</SaveButton>
        <CancelButton type="button" onClick={modalClose}>
          {t('cancel')}
        </CancelButton>
      </WrapperButton>
    </FormStyles>
  );
};
