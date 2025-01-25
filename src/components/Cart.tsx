import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

const cartItems = [
  { id: 1, name: "Product 1", price: "$10.00", quantity: 1 },
  { id: 2, name: "Product 2", price: "$20.00", quantity: 2 },
  { id: 3, name: "Product 3", price: "$30.00", quantity: 1 },
];

export function Cart() {
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='bg-transparent border-none'>
          <ShoppingCart />
          <div className='absolute bottom-4 left-5 w-5 h-5 bg-violet-50 text-black font-bold text-xs rounded-full flex items-center justify-center'>
            2
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll z-50">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout.
          </SheetDescription>
        </SheetHeader>
        <div className='container mx-auto px-4 py-8 bg-transparent  text-gray-200'>    
          {/* Cart Items Section */}
          <div className='mb-16'>
            <div className='bg-white text-gray-800 p-6 rounded-lg shadow-md'>
              <table className='w-full table-auto'>
                <thead>
                  <tr>
                    <th className='px-4 py-2'>Product</th>
                    <th className='px-4 py-2'>Price</th>
                    <th className='px-4 py-2'>Quantity</th>
                    <th className='px-4 py-2'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className='border px-4 py-2'>{item.name}</td>
                      <td className='border px-4 py-2'>{item.price}</td>
                      <td className='border px-4 py-2'>{item.quantity}</td>
                      <td className='border px-4 py-2'>
                        ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className='bg-white p-6 text-gray-800 rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold mb-6'>Summary</h2>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-lg'>Total Price:</span>
              <span className='text-2xl font-bold'>${totalPrice.toFixed(2)}</span>
            </div>
            <button className='w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors'>
              Proceed to Checkout
            </button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Close Cart</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
