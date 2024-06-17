import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import Donate from './PaypalButton';
import { FaPaypal } from 'react-icons/fa';

const Paymentform = ({ form }: { form: UseFormReturn<{
  Firstname: string;
  amount: number;
  Lastname: string;
  email: string;
  address: string;
  phone?: string;
  country?: string;
  postalCode?: string;
  currency:string;
  status:string;
  transactionId:string;
  city?: string;
  agreeToPrivacyPolicy: boolean;
  stateProvince?: string;
}, any, undefined> }) => {
  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md flex flex-col items-center font-semibold text-center">
      <div className="flex items-center justify-center mb-4">
        <FaPaypal className="text-blue-600 md:text-3xl text-2xl" />
      </div>
      <h2 className="text-xl font-bold mb-2">Donate with PayPal</h2>
      <p className="mb-4">To donate, please press the button below. Thank you!</p>
      <p className="font-light text-sm text-gray-600 italic mb-4">
        You will be redirected to PayPal.com
      </p>
      
    </div>
  );
};

export default Paymentform;
