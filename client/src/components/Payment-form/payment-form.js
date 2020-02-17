// import React from 'react';
// // import { Form, Field } from 'react-final-form';
// import { Button } from '@material-ui/core';
// import Styles from './Styles';
// import Card from './Card/card';
//
// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate
// } from './Card/card-validation';
//
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//
// const onSubmit = async (values) => {
//   // APPROVING MODAL
//   await sleep(300);
//   window.alert(JSON.stringify(values, 0, 2))
// };
//
// const PaymentForm = () => (
//   <Styles>
//     <Form
//       onSubmit={onSubmit}
//       render={({
//         handleSubmit,
//         form,
//         submitting,
//         pristine,
//         values,
//         active
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <Card
//             number={values.number || ''}
//             name={values.name || ''}
//             expiry={values.expiry || ''}
//             cvc={values.cvc || ''}
//             focused={active}
//           />
//           <div>
//             <Field
//               name="number"
//               component="input"
//               type="text"
//               pattern="[\d| ]{16,22}"
//               placeholder="Card Number"
//               format={formatCreditCardNumber}
//             />
//           </div>
//           <div>
//             <Field
//               name="name"
//               component="input"
//               type="text"
//               placeholder="Name"
//             />
//           </div>
//           <div className="input-wrapper">
//             <Field
//               name="expiry"
//               component="input"
//               type="text"
//               pattern="\d\d/\d\d"
//               placeholder="Valid Thru"
//               format={formatExpirationDate}
//             />
//             <Field
//               name="cvc"
//               component="input"
//               type="text"
//               pattern="\d{3,4}"
//               placeholder="CVC"
//               format={formatCVC}
//             />
//           </div>
//           <div className="buttons">
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               disabled={submitting}
//             >
//                 Submit
//             </Button>
//             <Button
//               type="button"
//               variant="contained"
//               color="primary"
//               onClick={form.reset}
//               disabled={submitting || pristine}
//             >
//                 Reset
//             </Button>
//           </div>
//           {/*<h2>Values</h2>*/}
//           {/*<pre>{JSON.stringify(values, 0, 2)}</pre>*/}
//         </form>
//       )}
//     />
//   </Styles>
// );
//
// export default PaymentForm;
