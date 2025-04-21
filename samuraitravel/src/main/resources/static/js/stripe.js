const stripe = Stripe('pk_test_51QyyTbQh8lgVIuOFfzoTmeaKJSxReBc71nrP94r7GhuoezVPHU3PIlqcxAAm1M2tJ1PAzB6L2lm1iykGaNo4S08000skxBSCoG');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});