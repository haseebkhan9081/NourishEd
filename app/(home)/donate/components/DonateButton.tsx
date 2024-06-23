// @ts-nocheck

import { useEffect, useMemo, useRef } from "react";

let counter = 0;

const generateId = () => {
  return `ID-${++counter}`; // if it is necessary, use some better unique id generator
};

const DonateButton = ({setTransactionDetails}:{setTransactionDetails:(param:string)=>void}) => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${generateId()}`, []);
  
  useEffect(() => {
    if (!buttonRef.current) return;

    if (!window.paypalButtonInitialized) {
      window.paypalButtonInitialized = true;

      const button = window.PayPal.Donation.Button({
        
         
        
        env: 'sandbox',
        hosted_button_id: '6DYTB4K9BQJHA',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
        onComplete: function (params) {
          console.log('Transaction completed:', params);
          setTransactionDetails(params.amt)
        },
         
      });
      button.render(`#${buttonId}`);
    }

    // Cleanup function to reset the flag and remove the PayPal button element
    return () => {
      window.paypalButtonInitialized = false;
      if (buttonRef.current) {
        buttonRef.current.innerHTML = ""; // Remove the PayPal button element
      }
    };
  }, [buttonId]);

  return (
    <div ref={buttonRef} id={buttonId} />
  );
};

export default DonateButton;
