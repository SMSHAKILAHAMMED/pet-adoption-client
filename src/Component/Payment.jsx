import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51H6O8eGa3P4tPX7Dw6vqI1eRcOa49IVdfm5RpG6pXaBJ7RcZ9qFLX5GQKNVd92UesLzxvG1jL9BTI6O4RfrC7jaP00JfrPx8dP');

const Payment = ({pause, id}) => {
  // console.log(pause);
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm pause={pause} id={id}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
