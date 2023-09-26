import { ModalLogoutStyle } from '../ModalLogout/ModalLogoutStyle';

export const ModalLogout = ({ active, setActive }) => {
  return (
    <ModalLogoutStyle
      style={{ opacity: active ? '1' : '0', display: active ? 'flex' : 'none' }}
      className={active ? 'modal active' : 'modal'}
      onClick={() => console.log(setActive(false))}
    >
      <div
        className={active ? 'modal-content active' : 'modal-content'}
        onClick={e => e.stopPropagation()}
      ></div>
    </ModalLogoutStyle>
  );
};
