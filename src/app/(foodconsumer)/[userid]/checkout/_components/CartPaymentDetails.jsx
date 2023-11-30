import React from 'react'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react';

import CartItems from './CartItems'
import BillDetails from './BillDetails'



const CartPaymentDetails = ({cartItems}) => {
    const [itemsTotal,setItemsTotal]=useState(0)
    const [totalAmount,setTotalAmount]=useState(0)
    
  return (
    <>
              <div className='w-3/5 bg-amber-50  flex-col justify-center align-center gap-12 p-5 '>
                <div className=' h-4/5 overflow-y-auto'>
                  <div className='flex-col align-center justify-center pr-4 '>
                    {
                      cartItems?.map((cartItem)=>(
                          <CartItems key={cartItem.id} cartItem={cartItem} setItemsTotal={setItemsTotal} itemsTotal={itemsTotal}/>
                        ))
                    }
                  
                    </div>
                    <BillDetails setTotalAmount={setTotalAmount} totalAmount={totalAmount} itemsTotal={itemsTotal} />
                  </div>
                <div className='flex bg-amber-200 text-center px-3 py-6 my-3 h-20 justify-between'>
                  <h1>TO PAY</h1>
                  <h4>{itemsTotal?totalAmount:"0"}</h4>
                </div>
              </div>
          </>
  )
}

export default CartPaymentDetails