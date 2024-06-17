import Script from 'next/script';
import { useEffect, useState } from 'react';

const Donate = ({ handleTransaction }) => {
  const [doPaypal, setDoPaypal] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    setDoPaypal(true);
  }, []);

  // Effect to handle transaction details
  useEffect(() => {
    if (transactionDetails) {
      console.log('Transaction details:', transactionDetails);
      // Call function to handle transaction details
      handleTransaction(transactionDetails);
    }
  }, [transactionDetails, handleTransaction]);

  return (
    <>
      {doPaypal && (
        <>
          <div id="paypal-donate-button-container" className="flex justify-center items-center my-4"></div>
          <Script id="donate-button-script">
            {`
              PayPal.Donation.Button({
                env: 'sandbox',
                hosted_button_id: '6DYTB4K9BQJHA',
                image: {
                  src: '',
                  title: 'PayPal - The safer, easier way to pay online!',
                  alt: 'Donate with PayPal button'
                },
                onComplete: function (params) {
                  setTransactionDetails(params); // Update transaction details state
                  console.log('Transaction completed:', params);
                },
              }).render('#paypal-donate-button-container');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default Donate;
