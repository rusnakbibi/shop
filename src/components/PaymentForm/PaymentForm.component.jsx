import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../Button';

import { PaymentFormContainer, FormContainer } from './PaymentForm.module';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Cart Payment: </h2>
        <CardElement />
        <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay now
        </ButtonComponent>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
