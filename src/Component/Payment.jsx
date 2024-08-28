import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51PrLayRsar5yiUpxydyg5dr18txwimnr3inCHL3JNRUyFP8JYVTGwtGNmK31gBQxOFX44EomijWv1WRfSbFzjDjR00zZLCT7Je');

const Payment = ({ pause, id }) => {
  // console.log(pause, id);
  
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm pause={pause} id={id} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckOutForm from "./CheckOutForm";


// // TODO: add publishable key
// const stripePromise = loadStripe('pk_test_51PrLayRsar5yiUpxydyg5dr18txwimnr3inCHL3JNRUyFP8JYVTGwtGNmK31gBQxOFX44EomijWv1WRfSbFzjDjR00zZLCT7Je');

// const Payment = (pause, {id} ) => {
//   console.log(pause, id);
//   return (
//     <div>
//       <div>
//         <Elements stripe={stripePromise}>
//           <CheckOutForm pause={pause} id={id}></CheckOutForm>
//         </Elements>
//       </div>
//     </div>
//   );
// };

// export default Payment;
