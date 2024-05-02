// import React, { useState, useEffect } from 'react';
// import { AppProvider, Frame, Card, Form, FormLayout, Button } from '@shopify/polaris';

// const PaymentPage = () => {
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [sessionId, setSessionId] = useState('');

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);

//     if (query.get('success')) {
//       setSuccess(true);
//       setSessionId(query.get('session_id'));
//     }

//     if (query.get('canceled')) {
//       setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
//     }
//   }, []);
  
//   const handleSubscribe = (plan) => {
//     console.log(`Subscribing to ${plan} plan`);
//     let checkoutUrl;
//     if (plan === 'Trial Plan') {
//       checkoutUrl = 'https://checkout.stripe.com/c/pay/cs_test_a1afv5nPsIIsYcSviTHtktmG8at0u4T77Hzts02X4ISshbKAWSeT6QmAod#fidkdWxOYHwnPyd1blpxYHZxWjA0Snxcc29WTEBud2xORGhRQXxURzNPVmBCSG99NUI3NE88a0FNNG9cRG5jSmRHZHBjd1BhczQ1ZGlcdDZrb203aV1IdDF9aktfTFF0RkpVSj1qYU58a1xsNTU1dUQ0aElAaycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl';
//     } else if (plan === 'Monthly Plan') {
//       checkoutUrl = 'https://checkout.stripe.com/c/pay/cs_test_a1wcr7r25YgfFgbhDoc2MnL6gXtBn5sWhq1p4RR0EZ8bxIBEDtx7ROgLeJ#fidkdWxOYHwnPyd1blpxYHZxWjA0Snxcc29WTEBud2xORGhRQXxURzNPVmBCSG99NUI3NE88a0FNNG9cRG5jSmRHZHBjd1BhczQ1ZGlcdDZrb203aV1IdDF9aktfTFF0RkpVSj1qYU58a1xsNTU1dUQ0aElAaycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl';
//     }
//     if (checkoutUrl) {
//       window.location.href = checkoutUrl;
//     } else {
//       console.error('Invalid plan selected');
//     }
//   };

//   // const handleSubscribe = async (plan) => {
//   //   console.log(`Subscribing to ${plan} plan`);
//   //   try {
//   //     const response = await fetch('/create-checkout-session', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ plan, username: 'riddhi' }), // Replace 'your_username_here' with actual username
//   //     });
//   //     const data = await response.json();
//   //     window.location.href = data.url; // Redirect to the checkout page
//   //   } catch (error) {
//   //     console.error('Error subscribing:', error);
//   //   }
//   // };

//   const SuccessDisplay = ({ sessionId }) => (
//     <section>
//       <div className="product Box-root">
//         <Logo />
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input type="hidden" id="session-id" name="session_id" value={sessionId} />
//         <button id="checkout-and-portal-button" type="submit">
//           Manage your billing information
//         </button>
//       </form>
//     </section>
//   );

//   const Logo = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="14px"
//       height="16px"
//       viewBox="0 0 14 16"
//       version="1.1"
//     >
//       <g fill="#E184DF">
//         <path d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z" />
//       </g>
//     </svg>
//   );

//   return (
//     <AppProvider i18n={{}}>
//       <Frame>
//         <Card sectioned>
//           <h1>Shopify Store Subscription Plan</h1>
//           {!success && !message && (
//             <Form>
//               <FormLayout>
//                 <div className="subscription-grid" style={{ display: 'flex', justifyContent: 'space-around' }}>
//                   <div className="subscription-box" style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <img src="/$5.png" alt="Trial Plan" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
//                     <h3>14-Days Free Trial Plan</h3>
//                     <p>A limited-time trial to explore our features.</p>
//                     <h5>$5</h5>
//                     <Button onClick={() => handleSubscribe('Trial Plan')} primary style={{ backgroundColor: 'green', borderColor: 'green' }}>
//                       Subscribe
//                     </Button>
//                   </div>
//                   <div className="subscription-box" style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <img src="/$20.png" alt="Monthly Plan" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
//                     <h3>Monthly Plan</h3>
//                     <p>Get access to all features on a monthly basis.</p>
//                     <h5>$20</h5>
//                     <Button onClick={() => handleSubscribe('Monthly Plan')} primary style={{ backgroundColor: 'green', borderColor: 'green' }}>
//                       Subscribe
//                     </Button>
//                   </div>
//                 </div>
//               </FormLayout>
//             </Form>
//           )}
//           {success && sessionId && <SuccessDisplay sessionId={sessionId} />}
//           {message && <Message message={message} />}
//         </Card>
//       </Frame>
//     </AppProvider>
//   );
// };

// export default PaymentPage;












// // import React, { useState, useEffect } from 'react';
// // import { AppProvider, Frame, Card, Form, FormLayout, Button } from '@shopify/polaris';

// // const PaymentPage = () => {
// //   const [message, setMessage] = useState('');
// //   const [success, setSuccess] = useState(false);
// //   const [sessionId, setSessionId] = useState('');

// //   useEffect(() => {
// //     const query = new URLSearchParams(window.location.search);

// //     if (query.get('success')) {
// //       setSuccess(true);
// //       setSessionId(query.get('session_id'));
// //     }

// //     if (query.get('canceled')) {
// //       setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
// //     }
// //   }, []);

// //   const handleSubscribe = async (plan) => {
// //     console.log(`Subscribing to ${plan} plan`);
// //     try {
// //       const response = await fetch('http://localhost:3000/create-checkout-session', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ plan, username: 'tejasvinisindhiya' }), // Replace 'your_username_here' with actual username
// //       });
// //       const data = await response.json();
// //       window.location.href = data.url; // Redirect to the checkout page
// //     } catch (error) {
// //       console.error('Error subscribing:', error);
// //     }
// //   };

// //   const SuccessDisplay = ({ sessionId }) => (
// //     <section>
// //       <div className="product Box-root">
// //         <Logo />
// //         <div className="description Box-root">
// //           <h3>Subscription to starter plan successful!</h3>
// //         </div>
// //       </div>
// //       <form action="/create-portal-session" method="POST">
// //         <input type="hidden" id="session-id" name="session_id" value={sessionId} />
// //         <button id="checkout-and-portal-button" type="submit">
// //           Manage your billing information
// //         </button>
// //       </form>
// //     </section>
// //   );

// //   const Logo = () => (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="14px"
// //       height="16px"
// //       viewBox="0 0 14 16"
// //       version="1.1"
// //     >
// //       <g fill="#E184DF">
// //         <path d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z" />
// //       </g>
// //     </svg>
// //   );

// //   return (
// //     <AppProvider i18n={{}}>
// //       <Frame>
// //         <Card sectioned>
// //           <h1>Shopify Store Subscription Plan</h1>
// //           {!success && !message && (
// //             <Form>
// //               <FormLayout>
// //                 <div className="subscription-grid">
// //                   <div className="subscription-box">
// //                     <h3>14-Days Free Trial Plan</h3>
// //                     <p>A limited-time trial to explore our features.</p>
// //                     <h5>$15</h5>
// //                     <Button onClick={() => handleSubscribe('Trial Plan')} primary>
// //                       Subscribe
// //                     </Button>
// //                   </div>
// //                   <div className="subscription-box">
// //                     <h3>Monthly Plan</h3>
// //                     <p>Get access to all features on a monthly basis.</p>
// //                     <h5>$20</h5>
// //                     <Button onClick={() => handleSubscribe('Monthly Plan')} primary>
// //                       Subscribe
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </FormLayout>
// //             </Form>
// //           )}
// //           {success && sessionId && <SuccessDisplay sessionId={sessionId} />}
// //           {message && <Message message={message} />}
// //         </Card>
// //       </Frame>
// //     </AppProvider>
// //   );
// // };

// // export default PaymentPage;











// // import React from 'react';
// // import { AppProvider, Frame, Card, Form, FormLayout, Button } from '@shopify/polaris';

// // const PaymentPage = () => {
// //   const handleSubscribe = (plan) => {
// //     console.log(`Subscribing to ${plan} plan`);
// //     // You can add your subscription logic here
// //   };

// //   return (
// //     <AppProvider i18n={{}}>
// //       <Frame>
// //         <Card sectioned>
// //           <h1>Shopify Store Subscription Plan</h1>
// //           <Form>
// //             <FormLayout>
// //               <div className="subscription-grid">
// //                 <div className="subscription-box">
// //                   <h3>14-Days Free Trial Plan</h3>
// //                   <p>A limited-time trial to explore our features.</p>
// //                   <h5>$15</h5>
// //                   <Button onClick={() => handleSubscribe('14-days-free-trial')} primary>
// //                     Subscribe
// //                   </Button>
// //                 </div>
// //                 <div className="subscription-box">
// //                   <h3>Monthly Plan</h3>
// //                   <p>Get access to all features on a monthly basis.</p>
// //                   <h5>$20</h5>
// //                   <Button onClick={() => handleSubscribe('monthly')} primary>
// //                     Subscribe
// //                   </Button>
// //                 </div>
// //               </div>
// //             </FormLayout>
// //           </Form>
// //         </Card>
// //       </Frame>
// //     </AppProvider>
// //   );
// // };

// // export default PaymentPage;














// // import { AppProvider, Frame, Card, Form, FormLayout, TextField, Button, RadioButton, ChoiceList } from '@shopify/polaris';
// // import { Provider as AppBridgeProvider, useAppBridge } from '@shopify/app-bridge-react';
// // import { authenticatedFetch } from '@shopify/app-bridge-utils';
// // import React, { useState } from 'react';
// // import { json } from '@remix-run/node';

// // export const action = async ({ request }) => {
// //   const formData = await request.formData();
// //   const paymentDetails = Object.fromEntries(formData);

// //   // Process the paymentDetails here
// //   // For example, you might validate the data and process the payment

// //   // Return a response, such as a success message or redirect
// //   return json({ success: true, message: 'Payment processed successfully' });
// // };

// // const PaymentPage = () => {
// //   const app = useAppBridge();
// //   const fetch = authenticatedFetch(app);

// //   const [paymentDetails, setPaymentDetails] = useState({
// //     subscription_plan: 'monthly', // Default to monthly plan
// //     credit_card: {
// //       first_name: 'Bob',
// //       last_name: 'Norman',
// //       first_digits: '',
// //       last_digits: '',
// //       brand: 'visa',
// //       expiry_month: '',
// //       expiry_year: '',
// //     },
// //     payment_method: 'credit_card', // Default to credit card
// //     card_holder_name: '', // Cardholder name for debit card
// //   });


  
// // // const PaymentPage = () => {
// // //   const [paymentDetails, setPaymentDetails] = useState({
// // //     subscription_plan: 'monthly', // Default to monthly plan
// // //     credit_card: {
// // //       first_name: 'Bob',
// // //       last_name: 'Norman',
// // //       first_digits: '',
// // //       last_digits: '',
// // //       brand: 'visa',
// // //       expiry_month: '',
// // //       expiry_year: '',
// // //     },
// // //     payment_method: 'credit_card', // Default to credit card
// // //     card_holder_name: '', // Cardholder name for debit card
// // //   });
// //   const handleSubscriptionPlanChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       subscription_plan: event.target.value,
// //     });
// //   };
// //   const handlePaymentMethodChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       payment_method: event.target.value,
// //     });
// //   };
// //   const handleCardNumberChange = (event) => {
// //     const cardNumber = event.target.value.slice(0, 12); // Limit to 12 digits
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       credit_card: {
// //         ...paymentDetails.credit_card,
// //         first_digits: cardNumber,
// //       },
// //     });
// //   };
// //   const handleExpiryDateChange = (event) => {
// //     const expiryDate = event.target.value.slice(0, 7); // Limit to MM/YYYY format
// //     const [expiry_month, expiry_year] = expiryDate.split('/');
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       credit_card: {
// //         ...paymentDetails.credit_card,
// //         expiry_month,
// //         expiry_year,
// //       },
// //     });
// //   };
// //   const handleCardHolderNameChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       card_holder_name: event.target.value,
// //     });
// //   };
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await fetch('/submit-payment', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(paymentDetails),
// //       });
// //       const data = await response.json();
// //       console.log('Payment response:', data);
// //     } catch (error) {
// //       console.error('Error submitting payment:', error);
// //     }
// //   };

// //   return (
// //     <AppProvider i18n={{}}>
// //       <Frame>
// //         <Card sectioned>
// //           <Form action="/app/payment" method="post" onSubmit={handleSubmit}>
// //             <FormLayout>
// //               <ChoiceList
// //                 title="Subscription Plan"
// //                 choices={[
// //                   { label: 'Monthly Plan ($5)', value: 'monthly' },
// //                   { label: 'Annual Plan ($50)', value: 'annual' },
// //                   { label: 'One-Time Charge ($30)', value: 'one-time' },
// //                 ]}
// //                 selected={[paymentDetails.subscription_plan]}
// //                 onChange={(selected) => handleSubscriptionPlanChange({ target: { value: selected[0] } })}
// //               />
// //               <ChoiceList
// //                 title="Payment Method"
// //                 choices={[
// //                   { label: 'Credit Card', value: 'credit_card' },
// //                   { label: 'Debit Card', value: 'debit_card' },
// //                 ]}
// //                 selected={[paymentDetails.payment_method]}
// //                 onChange={(selected) => handlePaymentMethodChange({ target: { value: selected[0] } })}
// //               />
// //               <TextField
// //                 name = "card_holder_name"
// //                 label="Cardholder Name"
// //                 value={paymentDetails.card_holder_name}
// //                 onChange={handleCardHolderNameChange}
// //                 autoComplete="off"
// //               />
// //               <TextField
// //                 label="Card Number"
// //                 value={paymentDetails.credit_card.first_digits}
// //                 onChange={handleCardNumberChange}
// //                 autoComplete="off"
// //               />
// //               <TextField
// //                 label="Expiry Date (MM/YYYY)"
// //                 value={`${paymentDetails.credit_card.expiry_month}/${paymentDetails.credit_card.expiry_year}`}
// //                 onChange={handleExpiryDateChange}
// //                 autoComplete="off"
// //               />
// //               <TextField
// //                 label="CVV"
// //                 type="password"
// //                 autoComplete="off"
// //               />
// //               <Button primary submit>
// //                 Start Free Trial
// //               </Button>
// //             </FormLayout>
// //           </Form>
// //         </Card>
// //       </Frame>
// //     </AppProvider>
// //   );
// // };
// // export default PaymentPage;













// // import React, { useState } from 'react';
// // const PaymentPage = () => {
// //   const [paymentDetails, setPaymentDetails] = useState({
// //     subscription_plan: 'monthly', // Default to monthly plan
// //     credit_card: {
// //       first_name: 'Bob',
// //       last_name: 'Norman',
// //       first_digits: '',
// //       last_digits: '',
// //       brand: 'visa',
// //       expiry_month: '',
// //       expiry_year: '',
// //     },
// //     payment_method: 'credit_card', // Default to credit card
// //     card_holder_name: '', // Cardholder name for debit card
// //   });
// //   const handleSubscriptionPlanChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       subscription_plan: event.target.value,
// //     });
// //   };
// //   const handlePaymentMethodChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       payment_method: event.target.value,
// //     });
// //   };
// //   const handleCardNumberChange = (event) => {
// //     const cardNumber = event.target.value.slice(0, 12); // Limit to 12 digits
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       credit_card: {
// //         ...paymentDetails.credit_card,
// //         first_digits: cardNumber,
// //       },
// //     });
// //   };
// //   const handleExpiryDateChange = (event) => {
// //     const expiryDate = event.target.value.slice(0, 7); // Limit to MM/YYYY format
// //     const [expiry_month, expiry_year] = expiryDate.split('/');
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       credit_card: {
// //         ...paymentDetails.credit_card,
// //         expiry_month,
// //         expiry_year,
// //       },
// //     });
// //   };
// //   const handleCardHolderNameChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       card_holder_name: event.target.value,
// //     });
// //   };
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await fetch('http://localhost:8081/submit-payment', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(paymentDetails),
// //       });
// //       const data = await response.json();
// //       console.log('Payment response:', data);
// //     } catch (error) {
// //       console.error('Error submitting payment:', error);
// //     }
// //   };
// //   return (
// //     <div style={{
// //       maxWidth: '400px',
// //       margin: 'auto',
// //       padding: '20px',
// //       border: '1px solid #333',
// //       backgroundColor: '#000',
// //       color: '#fff',
// //     }}>
// //       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Details</h1>
// //       <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '18px', color: '#00FF00' }}>Start your 14-day free trial today!</p>
// //       <form onSubmit={handleSubmit}>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label style={{ display: 'block', marginBottom: '5px' }}>Subscription Plan</label>
// //           <div style={{ display: 'flex', flexDirection: 'column' }}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="subscription_plan"
// //                 value="monthly"
// //                 checked={paymentDetails.subscription_plan === 'monthly'}
// //                 onChange={handleSubscriptionPlanChange}
// //               />
// //               Monthly Plan ($5)
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="subscription_plan"
// //                 value="annual"
// //                 checked={paymentDetails.subscription_plan === 'annual'}
// //                 onChange={handleSubscriptionPlanChange}
// //               />
// //               Annual Plan ($50)
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="subscription_plan"
// //                 value="one-time"
// //                 checked={paymentDetails.subscription_plan === 'one-time'}
// //                 onChange={handleSubscriptionPlanChange}
// //               />
// //               One-Time Charge ($30)
// //             </label>
// //           </div>
// //         </div>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label style={{ display: 'block', marginBottom: '5px' }}>Payment Method</label>
// //           <div style={{ display: 'flex', flexDirection: 'column' }}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="credit_card"
// //                 checked={paymentDetails.payment_method === 'credit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Credit Card
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="debit_card"
// //                 checked={paymentDetails.payment_method === 'debit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Debit Card
// //             </label>
// //           </div>
// //         </div>
// //         {/* Add more input fields for payment details */}
// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="cardHolderName">Cardholder Name</label>
// //           <input
// //             type="text"
// //             id="cardHolderName"
// //             name="card_holder_name"
// //             placeholder="Cardholder Name"
// //             style={{
// //               width: '100%',
// //               padding: '8px',
// //               border: '1px solid #333',
// //               borderRadius: '4px',
// //               backgroundColor: '#222',
// //               color: '#fff',
// //             }}
// //             value={paymentDetails.card_holder_name}
// //             onChange={handleCardHolderNameChange}
// //           />
// //         </div>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="cardNumber">Card Number</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             name="cardNumber"
// //             placeholder="Card Number"
// //             value={paymentDetails.credit_card.first_digits}
// //             onChange={handleCardNumberChange}
// //             style={{
// //               width: '100%',
// //               padding: '8px',
// //               border: '1px solid #333',
// //               borderRadius: '4px',
// //               backgroundColor: '#222',
// //               color: '#fff',
// //             }}
// //             maxLength="12" // Limit to 12 digits
// //           />
// //         </div>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="expiryDate">Expiry Date (MM/YYYY)</label>
// //           <input
// //             type="text"
// //             id="expiryDate"
// //             name="expiryDate"
// //             placeholder="MM/YYYY"
// //             value={`${paymentDetails.credit_card.expiry_month}/${paymentDetails.credit_card.expiry_year}`}
// //             onChange={handleExpiryDateChange}
// //             style={{
// //               width: '100%',
// //               padding: '8px',
// //               border: '1px solid #333',
// //               borderRadius: '4px',
// //               backgroundColor: '#222',
// //               color: '#fff',
// //             }}
// //             maxLength="7" // Limit to MM/YYYY format
// //           />
// //         </div>
// //         <div style={{ marginBottom: '15px' }}>
// //           <label htmlFor="cvv">CVV</label>
// //           <input
// //             type="text"
// //             id="cvv"
// //             name="cvv"
// //             placeholder="CVV"
// //             required
// //             style={{
// //               width: '100%',
// //               padding: '8px',
// //               border: '1px solid #333',
// //               borderRadius: '4px',
// //               backgroundColor: '#222',
// //               color: '#fff',
// //             }}
// //           />
// //         </div>
// //         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#008060', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Start Free Trial</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default PaymentPage;












// // import React, { useState } from 'react';
// // import './PaymentPage.css';
// // import { useFetcher } from '@remix-run/react';


// // const PaymentPage = () => {
// //   const [paymentDetails, setPaymentDetails] = useState({
// //     credit_card: {
// //       first_name: 'Bob',
// //       last_name: 'Norman',
// //       first_digits: '',
// //       last_digits: '',
// //       brand: 'visa',
// //       expiry_month: '',
// //       expiry_year: '',
// //     },
// //     payment_method: 'credit_card', // Default to credit card
// //     card_holder_name: '', // Cardholder name for debit card
// //   });
// //   const fetcher = useFetcher();
// //   const [selectedPlan, setSelectedPlan] = useState('');
// //   const handlePaymentMethodChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       payment_method: event.target.value,
// //     });
// //   };
// //   // const handleSubmit = (event) => {
// //   //   event.preventDefault();
    
// //   //   // Here, you would handle the submission of payment details to your payment gateway
// //   //   console.log('Payment details submitted', paymentDetails);
// //   // };
// //   // const redirectToPayment = () => {
// //   //   window.location.href = '/payment';
// //   // };
// //   // const [selectedPlan, setSelectedPlan] = useState('');

// // // Update the handleSubmit function

// // const handleSubmit = async (event) => {
// //   event.preventDefault();
// //    fetcher.submit(
// //       { paymentDetails: JSON.stringify(paymentDetails) },
// //       { method: 'post', action: '/submit-payment' }
// //     );

// //   // Here, you would handle the submission of payment details to your payment gateway
// //   console.log('Payment details submitted', paymentDetails);

// //   const response = await fetch('/submit-payment', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify({
// //       paymentDetails,
// //       selectedPlan,
// //     }),
// //   });

// //   const result = await response.json();
// //   console.log('Server response:', result);
// // };
  
// //   return (
// //     <div className="payment-container">
// //       <h1>Payment Details</h1>
// //       <p className="trial-period">Start your 14-day free trial today!</p>
// //       <form onSubmit={handleSubmit}>
// //       <div className="form-group">
// //       <label>Subscription Plan</label>
// //       <div className="subscription-options">
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="monthly"
// //             checked={selectedPlan === 'monthly'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           Monthly Plan ($5)
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="annual"
// //             checked={selectedPlan === 'annual'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           Annual Plan ($50)
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="one_time"
// //             checked={selectedPlan === 'one_time'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           One-Time Charge ($30)
// //         </label>
// //       </div>
// //     </div>
// //         <div className="form-group">
// //           <label>Payment Method</label>
// //           <div className="payment-method-options">
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="credit_card"
// //                 checked={paymentDetails.payment_method === 'credit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Credit Card
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="debit_card"
// //                 checked={paymentDetails.payment_method === 'debit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Debit Card
// //             </label>
// //           </div>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="cardHolderName">Cardholder Name</label>
// //           <input
// //             type="text"
// //             id="cardHolderName"
// //             name="card_holder_name"
// //             placeholder="Cardholder Name"
// //             value={paymentDetails.card_holder_name}
// //             onChange={(e) => setPaymentDetails({ ...paymentDetails, card_holder_name: e.target.value })}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="cardNumber">Card Number</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             name="cardNumber"
// //             placeholder="Card Number"
// //             value={`${paymentDetails.credit_card.first_digits}${paymentDetails.credit_card.last_digits}`}
// //             onChange={(e) => {
// //               const { name, value } = e.target;
// //               setPaymentDetails({
// //                 ...paymentDetails,
// //                 credit_card: {
// //                   ...paymentDetails.credit_card,
// //                   [name]: value,
// //                 },
// //               });
// //             }}
            
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="expiryDate">Expiry Date</label>
// //           <input
// //             type="text"
// //             id="expiryDate"
// //             name="expiryDate"
// //             placeholder="MM/YYYY"
// //             value={`${paymentDetails.credit_card.expiry_month}${paymentDetails.credit_card.expiry_year}`}
// //             onChange={(e) => {
// //               const { value } = e.target;
// //               const [month, year] = value.split('/');
// //               setPaymentDetails({
// //                 ...paymentDetails,
// //                 credit_card: {
// //                   ...paymentDetails.credit_card,
// //                   expiry_month: month,
// //                   expiry_year: year,
// //                 },
// //               });
// //             }}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="cvv">CVV</label>
// //           <input
// //             type="text"
// //             id="cvv"
// //             name="cvv"
// //             placeholder="CVV"
// //             required
// //           />
// //         </div>
// //         <button type="submit">Start Free Trial</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default PaymentPage;

























// // import React, { useState } from 'react';
// // import styles from './PaymentPage.module.css';
// // const PaymentPage = () => {
// //   const [paymentDetails, setPaymentDetails] = useState({
// //     credit_card: {
// //       first_name: 'Bob',
// //       last_name: 'Norman',
// //       first_digits: '',
// //       last_digits: '',
// //       brand: 'visa',
// //       expiry_month: '',
// //       expiry_year: '',
// //     },
// //     payment_method: 'credit_card', // Default to credit card
// //     card_holder_name: '', // Cardholder name for debit card
// //   });
// //   const handlePaymentMethodChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       payment_method: event.target.value,
// //     });
// //   };
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Here, you would handle the submission of payment details to your payment gateway
// //     console.log('Payment details submitted', paymentDetails);
// //   };
// //   return (
// //     <div className={styles['payment-container']}>
// //       <h1>Payment Details</h1>
// //       <p className={styles['trial-period']}>Start your 14-day free trial today!</p>
// //       <form onSubmit={handleSubmit}>
// //         <div className={styles['form-group']}>
// //           <label>Payment Method</label>
// //           <div className={styles['payment-method-options']}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="credit_card"
// //                 checked={paymentDetails.payment_method === 'credit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Credit Card
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="debit_card"
// //                 checked={paymentDetails.payment_method === 'debit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Debit Card
// //             </label>
// //           </div>
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="cardHolderName">Cardholder Name</label>
// //           <input
// //             type="text"
// //             id="cardHolderName"
// //             name="card_holder_name"
// //             placeholder="Cardholder Name"
// //             value={paymentDetails.card_holder_name}
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="cardNumber">Card Number</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             name="cardNumber"
// //             placeholder="Card Number"
// //             value={`${paymentDetails.credit_card.first_digits}${paymentDetails.credit_card.last_digits}`}
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="expiryDate">Expiry Date</label>
// //           <input
// //             type="text"
// //             id="expiryDate"
// //             name="expiryDate"
// //             placeholder="MM/YYYY"
// //             value={`${paymentDetails.credit_card.expiry_month}${paymentDetails.credit_card.expiry_year}`}
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="cvv">CVV</label>
// //           <input
// //             type="text"
// //             id="cvv"
// //             name="cvv"
// //             placeholder="CVV"
// //             required
// //           />
// //         </div>
// //         <button type="submit">Start Free Trial</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default PaymentPage;





















// // import React, { useState } from 'react';
// // import styles from './PaymentPage.module.css';

// // import { useFetcher } from '@remix-run/react';


// // const PaymentPage = () => {
// //   const [paymentDetails, setPaymentDetails] = useState({
// //     credit_card: {
// //       first_name: 'Bob',
// //       last_name: 'Norman',
// //       first_digits: '',
// //       last_digits: '',
// //       brand: 'visa',
// //       expiry_month: '',
// //       expiry_year: '',
// //     },
// //     payment_method: 'credit_card', // Default to credit card
// //     card_holder_name: '', // Cardholder name for debit card
// //   });
// //   const fetcher = useFetcher();
// //   const [selectedPlan, setSelectedPlan] = useState('');
// //   const handlePaymentMethodChange = (event) => {
// //     setPaymentDetails({
// //       ...paymentDetails,
// //       payment_method: event.target.value,
// //     });
// //   };
// //   // const handleSubmit = (event) => {
// //   //   event.preventDefault();
    
// //   //   // Here, you would handle the submission of payment details to your payment gateway
// //   //   console.log('Payment details submitted', paymentDetails);
// //   // };
// //   // const redirectToPayment = () => {
// //   //   window.location.href = '/payment';
// //   // };
// //   // const [selectedPlan, setSelectedPlan] = useState('');

// // // Update the handleSubmit function

// // const handleSubmit = async (event) => {
// //   event.preventDefault();
// //    fetcher.submit(
// //       { paymentDetails: JSON.stringify(paymentDetails) },
// //       { method: 'post', action: '/submit-payment' }
// //     );

// //   // Here, you would handle the submission of payment details to your payment gateway
// //   console.log('Payment details submitted', paymentDetails);

// //   const response = await fetch('/submit-payment', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify({
// //       paymentDetails,
// //       selectedPlan,
// //     }),
// //   });

// //   const result = await response.json();
// //   console.log('Server response:', result);
// // };
  
// //   return (
// //     <div className={styles['payment-container']}>
// //       <h1>Payment Details</h1>
// //       <p className={styles['trial-period']}>Start your 14-day free trial today!</p>
// //       <form onSubmit={handleSubmit}>
// //       <div className={styles['form-group']}>
// //       <label>Subscription Plan</label>
// //       <div className={styles['subscription-options']}>
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="monthly"
// //             checked={selectedPlan === 'monthly'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           Monthly Plan ($5)
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="annual"
// //             checked={selectedPlan === 'annual'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           Annual Plan ($50)
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="subscription_plan"
// //             value="one_time"
// //             checked={selectedPlan === 'one_time'}
// //             onChange={(e) => setSelectedPlan(e.target.value)}
// //           />
// //           One-Time Charge ($30)
// //         </label>
// //       </div>
// //     </div>
// //         <div className={styles['form-group']}>
// //           <label>Payment Method</label>
// //           <div className={styles['payment-method-options']}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="credit_card"
// //                 checked={paymentDetails.payment_method === 'credit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Credit Card
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="payment_method"
// //                 value="debit_card"
// //                 checked={paymentDetails.payment_method === 'debit_card'}
// //                 onChange={handlePaymentMethodChange}
// //               />
// //               Debit Card
// //             </label>
// //           </div>
// //         </div>
// //         <div className={styles['form -group']}>
// //           <label htmlFor="cardHolderName">Cardholder Name</label>
// //           <input
// //             type="text"
// //             id="cardHolderName"
// //             name="card_holder_name"
// //             placeholder="Cardholder Name"
// //             value={paymentDetails.card_holder_name}
// //             onChange={(e) => setPaymentDetails({ ...paymentDetails, card_holder_name: e.target.value })}
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="cardNumber">Card Number</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             name="cardNumber"
// //             placeholder="Card Number"
// //             value={`${paymentDetails.credit_card.first_digits}${paymentDetails.credit_card.last_digits}`}
// //             onChange={(e) => {
// //               const { name, value } = e.target;
// //               setPaymentDetails({
// //                 ...paymentDetails,
// //                 credit_card: {
// //                   ...paymentDetails.credit_card,
// //                   [name]: value,
// //                 },
// //               });
// //             }}
            
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="expiryDate">Expiry Date</label>
// //           <input
// //             type="text"
// //             id="expiryDate"
// //             name="expiryDate"
// //             placeholder="MM/YYYY"
// //             value={`${paymentDetails.credit_card.expiry_month}${paymentDetails.credit_card.expiry_year}`}
// //             onChange={(e) => {
// //               const { value } = e.target;
// //               const [month, year] = value.split('/');
// //               setPaymentDetails({
// //                 ...paymentDetails,
// //                 credit_card: {
// //                   ...paymentDetails.credit_card,
// //                   expiry_month: month,
// //                   expiry_year: year,
// //                 },
// //               });
// //             }}
// //           />
// //         </div>
// //         <div className={styles['form-group']}>
// //           <label htmlFor="cvv">CVV</label>
// //           <input
// //             type="text"
// //             id="cvv"
// //             name="cvv"
// //             placeholder="CVV"
// //             required
// //           />
// //         </div>
// //         <button type="submit">Start Free Trial</button>
// //       </form>
// //     </div>
// //   );
// // };
// // export default PaymentPage;


// import React, { useState, useEffect } from 'react';
// import { AppProvider, Frame, Card, Form, FormLayout, Button } from '@shopify/polaris';
// import { Redirect } from '@shopify/app-bridge/actions';
// import { PayPalButton } from "react-paypal-button-v2";

// const PaymentPage = () => {
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [sessionId, setSessionId] = useState('');

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search);

//     if (query.get('success')) {
//       setSuccess(true);
//       setSessionId(query.get('session_id'));
//     }

//     if (query.get('canceled')) {
//       setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
//     }
//   }, []);
  
  
//   const handleSubscribe = async (plan) => {
//     console.log(`Subscribing to ${plan} plan`);
//     const paymentData = { plan: plan, username: "riddhi" };
//     try {
//       const response = await fetch('/create-checkout-session', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(paymentData), // Replace 'your_username_here' with actual username
//       });
//       console.log("hi response:  ", response);
//       // const jsonData = await response.json();
//       // console.log("hi json", jsonData);
//       window.location.href = "https://www.sandbox.paypal.com/checkoutnow?token=5NR934689C6833137";
//       // window.open("https://www.sandbox.paypal.com/checkoutnow?token=49V07480P1837190V", '_blank');  // Redirect to the checkout page
//     } catch (error) {
//       console.error('Error subscribing:', error);
//     }
//   };
//   const SuccessDisplay = ({ sessionId }) => (
//     <section>
//       <div className="product Box-root">
//         <Logo />
//         <div className="description Box-root">
//           <h3>Subscription to starter plan successful!</h3>
//         </div>
//       </div>
//       <form action="/create-portal-session" method="POST">
//         <input type="hidden" id="session-id" name="session_id" value={sessionId} />
//         <button id="checkout-and-portal-button" type="submit">
//           Manage your billing information
//         </button>
//       </form>
//     </section>
//   );

//   const Logo = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="14px"
//       height="16px"
//       viewBox="0 0 14 16"
//       version="1.1"
//     >
//       <g fill="#E184DF">
//         <path d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z" />
//       </g>
//     </svg>
//   );

//   return (
//     <AppProvider i18n={{}}>
//       <Frame>
//         <Card sectioned>
//           <h1>Shopify Store Subscription Plan</h1>
//           {!success && !message && (
//             <Form>
//               <FormLayout>
//                 <div className="subscription-grid" style={{ display: 'flex', justifyContent: 'space-around' }}>
//                   <div className="subscription-box" style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <img src="/$5.png" alt="Trial Plan" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
//                     <h3>14-Days Free Trial Plan</h3>
//                     <p>A limited-time trial to explore our features.</p>
//                     <h5>$5</h5>
//                     <Button onClick={() => handleSubscribe('Trial Plan')} primary style={{ backgroundColor: 'green', borderColor: 'green' }}>
//                       Subscribe
//                     </Button>
//                   </div>
//                   <div className="subscription-box" style={{ backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '10px' }}>
//                     <img src="/$20.png" alt="Monthly Plan" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
//                     <h3>Monthly Plan</h3>
//                     <p>Get access to all features on a monthly basis.</p>
//                     <h5>$20</h5>
//                     <Button onClick={() => handleSubscribe('Monthly Plan')} primary style={{ backgroundColor: 'green', borderColor: 'green' }}>
//                       Subscribe
//                     </Button>
//                   </div>
//                 </div>
//               </FormLayout>
//             </Form>
//           )}
//           {success && sessionId && <SuccessDisplay sessionId={sessionId} />}
//           {message && <Message message={message} />}
//         </Card>
//       </Frame>
//     </AppProvider>
//   );
// };

// export default PaymentPage;



// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Ensure you have uuid installed using npm or yarn

// const PayPalOrder = () => {
//   const [response, setResponse] = useState(null);

//   const createPayPalOrder = async () => {
//     const paypalRequestId = uuidv4();
//     const clientId = "ATVHLWmQv8mWzygMu64MEftQ9fG9XdE1zEJVmuN4H1fjKhSdPpbwAtrnMAMSvyPSEGT6hNB6mJpzZFo6";
//     const clientSecret = "EAoHhr7HBlq3wj-CD4Y70nobRLVMJ9SJggzkMf0si4HRxYqVlViIrhAKPFoeNTdzgESXDpEIF253nBeb";
//     const headers = {
//       'Content-Type': 'application/json',
//       'PayPal-Request-Id': paypalRequestId,
//     };

//     const data = JSON.stringify({
//       intent: "CAPTURE",
//       purchase_units: [{
//         reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
//         amount: {
//           currency_code: "USD",
//           value: "5.00",
//           breakdown: {
//             item_total: {
//               currency_code: "USD",
//               value: "5.00"
//             }
//           }
//         },
//         items: [{
//           name: "Trial plan",
//           unit_amount: {
//             currency_code: "USD",
//             value: "5.00"
//           },
//           quantity: "1",
//           category: "DIGITAL_GOODS"
//         }],
//         shipping: {
//           address: {
//             address_line_1: "123 Street Name",
//             address_line_2: "Building 1, Unit 5",
//             admin_area_2: "City Name",
//             admin_area_1: "State Name",
//             postal_code: "12345",
//             country_code: "US"
//           }
//         }
//       }],
//       payment_source: {
//         paypal: {
//           experience_context: {
//             payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
//             brand_name: "EXAMPLE INC",
//             locale: "en-US",
//             landing_page: "LOGIN",
//             shipping_preference: "SET_PROVIDED_ADDRESS",
//             user_action: "PAY_NOW",
//             return_url: "https://example.com/returnUrl",
//             cancel_url: "https://example.com/cancelUrl"
//           }
//         }
//       }
//     });

//     const response = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
//       method: 'POST',
//       headers: headers,
//       body: data,
//       auth: `${clientId}:${clientSecret}` // Basic Auth may need to be encoded differently depending on API requirements
//     });
//     const jsonResponse = await response.json();
//     setResponse(jsonResponse);
//     console.log(response.url);
//   };

//   return (
//     <div>
//       <h1>Create PayPal Order</h1>
//       <button onClick={createPayPalOrder}>Create Order</button>
//     </div>
//   );
// };

// export default PayPalOrder;


// import React, { useState } from 'react';
// // import axios from 'axios';

// const PayPalOrderCreator = () => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);


  
//   // const fapi = async () => {
//   //   try{
//   //     const res = await axios.post('https://192.168.1.3:3000/create-paypal-order', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         intent: "CAPTURE",
//   //         purchase_units: [{
//   //           reference_id: "PUHF",
//   //           amount: {
//   //             currency_code: "USD",
//   //             value: "10.00"
//   //           },
//   //           description: "Trial plan"
//   //         }]
//   //       })
//   //     });
//   //     const data = await response.json();
//   //     setResponse(data);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     setError('Failed to create order. Please try again.');
//   //     console.log(error);
//   //     setLoading(false);
//   //   }
//   // }


//   const handleCreateOrder = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post('http://localhost:8000/create-paypal-order', {
//         body: JSON.stringify({
//           intent: "CAPTURE",
//           purchase_units: [{
//             reference_id: "PUHF",
//             amount: {
//               currency_code: "USD",
//               value: "5.00"
//             },
//             description: "Trial plan"
//           }]
//         })
//       },
//       {headers: {
//         'Content-Type': 'application/json',
//       }}
//     );

//       const data = await response.json();
//       setResponse(data);
//       console.log(data);
//       setLoading(false);
//     } catch (error) {
//       setError('Failed to create order. Please try again.');
//       console.log(error);
//       console.log(error.axios);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Create PayPal Order</h1>
//       <button onClick={handleCreateOrder} disabled={loading}>
//         {loading ? 'Creating...' : 'Create Order'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {response && <div>
//         <h3>Order Response:</h3>
//         <pre>{JSON.stringify(response, null, 2)}</pre>
//       </div>}
//     </div>
//   );
// };

// export default PayPalOrderCreator;


// import React from 'react';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// const PayPalOrderCreator = () => {
//   const [error, setError] = React.useState(null);

//   const handleApprove = (data, actions) => {
//     alert('You have successfully subscribed to ' + data.subscriptionID);
//     return actions.order.capture().then(details => {
//       console.log(details);
//       // Handle post-order capture logic here
//     });
//   };

//   const createSubscription = (data, actions) => {
//     return actions.subscription.create({
//       plan_id: 'P-7G509662GB5072804MYTXGWA', // Replace 'YOUR_PLAN_ID' with your actual plan ID
//     });
//   };

//   return (
//     <div>
//       <PayPalScriptProvider options={{
//         "client-id": "ATVHLWmQv8mWzygMu64MEftQ9fG9XdE1zEJVmuN4H1fjKhSdPpbwAtrnMAMSvyPSEGT6hNB6mJpzZFo6", // Replace 'YOUR_CLIENT_ID' with your actual client ID
//         vault: true,
//         intent: "subscription"
//       }}>
//         <PayPalButtons
//           createSubscription={createSubscription}
//           onApprove={handleApprove}
//           onError={(err) => {
//             setError('Failed to create subscription. Please try again.');
//             console.log(err);
//           }}
//         />
//       </PayPalScriptProvider>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default PayPalOrderCreator;


import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalOrderCreator = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApprove = (data, actions) => {
    setLoading(true);
    alert('You have successfully subscribed to ' + data.subscriptionID);
    return actions.order.capture().then(details => {
      console.log(details);
      console.log(data);
      setLoading(false);
      // Handle post-order capture logic here
    }).catch(err => {
      console.error(err);
      setError('Error during order capture. Please try again.');
      setLoading(false);
    });
  };

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: 'P-7G509662GB5072804MYTXGWA', // Replace 'YOUR_PLAN_ID' with your actual plan ID
    });
  };

  return (
    <div>
      <PayPalScriptProvider options={{
        "client-id": "ATVHLWmQv8mWzygMu64MEftQ9fG9XdE1zEJVmuN4H1fjKhSdPpbwAtrnMAMSvyPSEGT6hNB6mJpzZFo6", // Replace 'YOUR_CLIENT_ID' with your actual client ID
        vault: true,
        intent: "subscription"
      }}>
        <PayPalButtons
          createSubscription={createSubscription}
          onApprove={handleApprove}
          onError={(err) => {
            setError('Failed to create subscription. Please try again.');
            console.log(err);
          }}
        />
        {loading && <p>Loading...</p>}
      </PayPalScriptProvider>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PayPalOrderCreator;