import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

export const stripePromise: Promise<Stripe | null> = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);


export const isValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;