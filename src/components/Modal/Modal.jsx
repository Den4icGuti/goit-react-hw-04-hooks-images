import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay,ModalImg } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose,large}) => { 

  //===Метод componentDidMount монтирует комопонет в DOM===//
  useEffect(() => { 
    window.addEventListener('keydown', onHandleKeyDouwn);
    return (() => { 
       window.removeEventListener('keydown',onHandleKeyDouwn)
    })
  })
  
  //===Метод заклрывает модальное окно по клику в любом месте, кроме самого модального окна===//
 const onHandleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onHandleKeyDouwn = e => {
  if (e.code === 'Escape') {
      //===Пропс на метод закрития открытия модального окна===//
       onClose();
    }
  };

  //=== Рендерим модальное окно поверх всех документов, благодаля методу createPortal===//
    return createPortal(
      <Overlay onClick={onHandleBackdropClick}>
        <ModalImg>
          <img src={large} alt="" />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  
}

export default Modal;
