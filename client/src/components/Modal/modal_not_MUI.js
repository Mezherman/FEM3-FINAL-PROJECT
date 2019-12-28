// import React, { useState, useEffect } from 'react';
//
// export default function AddToBasket(props) {
//   console.log('props = ', props);
//   const { label, article, price, src, modalTitle } = props;
//
//   const [modalType, setModalType] = useState(modalTitle);
//
//   const modals = {
//     modalConfirmPurchase: {
//       className: 'modal-confirm-purchase',
//       header: 'Do you want add this item to Basket?',
//       closeButton: true,
//       textContent: null,
//       actions: ['Yes', 'No'],
//     },
//     modalConfirmDeletion: {
//       className: 'modal-confirm-deletion',
//       header: 'Do you want to remove this item from Basket?',
//       closeButton: true,
//       textContent: null,
//       actions: ['Yes', 'No'],
//     }
//   };
//
//   const { className, header, closeButton, actions } = modals[modalTitle];
//   const classNames = `modal-window ${className}`;
//
//   const createButton = (text) => (
//     (
//       <Button
//         text={text}
//         onClick={(e) => {
//           onModalBtnClick(e);
//         }}
//       />
//     )
//   );
//
//   useEffect(() => {
//     document.onmousedown = (e) => handleClickOutsideModal(e);
//     document.onkeyup = (e) => handleClickOutsideModal(e);
//
//     if (modalType !== modalTitle) {
//       setModalType({
//         modalType: modalTitle
//       });
//     }
//   }, [modalType, modalTitle]);
//
//   const closeModal = () => {
//     setModalType({
//       modal: {
//         title: null,
//         isVisible: false,
//         card: null,
//       }
//     })
//   };
//
//   const handleClickOutsideModal = (e) => {
//     if (e.target.classList.contains('modal-wrapper') ||
//       e.key === 'Escape' ||
//       e.target.classList.contains('modal-close-btn')) {
//       closeModal()
//     }
//   };
//
//   const onModalBtnClick = (e) => {
//     // const { card } = props;
//     // if (e.target.textContent === 'Yes' && modalType === 'modalConfirmPurchase') {
//     //   card.saveToLocalStorage('purchaseList', card)
//     // } else if (e.target.textContent === 'Yes' && modalType === 'modalConfirmDeletion') {
//     //   card.removeFromLocalStorage('purchaseList', card);
//     //   onDelete();
//     // }
//     // closeModal()
//   };
//
//   return (
//     <div className="modal-wrapper">
//       <div className={classNames}>
//         <div className="modal-header">
//           <span>{header}</span>
//           {closeButton && <i className="fas fa-times modal-close-btn"></i>}
//         </div>
//         <div className="modal-content">
//           <img src={src} alt="" />
//           <div className="modal-content-info">
//             <p>{label}</p>
//             <p>Art №: {article}</p>
//             <p>Price: {price}</p>
//           </div>
//         </div>
//         <div className="modal-btns-wrapper">
//           {createButton(actions[0])}
//           {createButton(actions[1])}
//         </div>
//       </div>
//       {props.children}
//     </div>
//   );
// }
//
// const Button = (props) => {
//   const { btnColor, onClick, text } = props;
//   return (
//     <button
//       className="btn-modal"
//       type="button"
//       style={{ backgroundColor: btnColor }}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   )
// };