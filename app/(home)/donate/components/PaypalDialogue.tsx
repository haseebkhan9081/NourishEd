import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import Donate from './PaypalButton';
 // Ensure the correct import path

const PaypalDialogue = ({handleTransaction}:{handleTransaction:(params:any)=>void}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800 mb-2">
            Donate with PayPal/Credit/Debit Card
          </DialogTitle>
          <DialogDescription className="text-gray-600 mb-4">
            Your donation will help us continue our work. Please choose your preferred payment method by clicking on the button below.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Donate
          handleTransaction={handleTransaction}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaypalDialogue;
