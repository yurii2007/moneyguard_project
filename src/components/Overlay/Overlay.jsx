import { useEffect } from 'react';
import { OverlayStyle } from './Overlay.styled';
import { useModal } from 'components/ModalContext/ModalContext';
import { AddModal } from './AddModal/AddModal';
import { UpdateModal } from './EditModal/UpdateModal';
import { ModalLogout } from './LogoutModal/ModalLogout';
import { FormFeedback } from './FormFeedback/FormFeedback';

export const Overlay = () => {
  const { modalName, isShowModal, modalClose } = useModal();
  const openedModal = modalName => {
    switch (modalName) {
      case 'add':
        return <AddModal />;
      case 'edit':
        return <UpdateModal />;
      case 'logout':
        return <ModalLogout />;
      case 'feedback':
        return <FormFeedback />;
      default:
        return null;
    }
  };

  useEffect(() => {
    document.body.style.overflow = isShowModal ? 'hidden' : 'auto';
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShowModal, modalClose]);

  const backdropClickClose = e => {
    if (e.target === e.currentTarget) modalClose();
  };

  if (!isShowModal) return null;

  return (
    <OverlayStyle onClick={backdropClickClose}>
      {openedModal(modalName)}
    </OverlayStyle>
  );
};
