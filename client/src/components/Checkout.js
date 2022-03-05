
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from "../actions/orderAction";
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'


export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>
            {loading && (<Loading />)}
            {error && (<Error errors='Something went wrong' />)}
            {success && (<Success success='Commande passée avec succès' />)}
            <StripeCheckout
                amount={Math.round((subtotal * 100) / 3.25)}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51K3gAvF6sn1puc9itAYI9NgRJUM0MHsnPIMK7dj1InL9mLvUNNblXSUcXLkjKIRqJ2uL4qr5SMCmo1Snrbc8Tg5S001gc7lg8m'
                currency='EUR'>

                <button className='btn'>Payez maintenant</button>

            </StripeCheckout>

        </div>
    );
}