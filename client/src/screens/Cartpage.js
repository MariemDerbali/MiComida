import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { deleteFromCart } from '../actions/cartAction'
import Checkout from '../components/Checkout'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Cartpage() {


    AOS.init()

    const cartstate = useSelector((state) => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.prix, 0)

    const dispatch = useDispatch()


    useEffect(() => {

        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/login'
        }

    }, [])

    return (
        <div>
            <div data-aos='fade-down' className="row justify-content-center p-2" data-aos='fade-down'>

                <div className="col-md-6">
                    <h2 style={{ fontSize: '40px' }}>Mon panier</h2>

                    {cartItems.map(item => {
                        return <div className="flex-container">

                            <div className='text-left m-1 w-100'>
                                <h1>{item.nom}</h1>
                                <h1>Prix : {item.quantite} * {item.Lesprix[0]} = {item.prix}</h1>
                                <h1 style={{ display: 'inline' }}>Quantité : </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantite + 1)) }}></i>
                                <b>{item.quantite}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantite - 1)) }}></i>
                                <hr />
                            </div>

                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '80px', height: '80px' }} />
                            </div>
                            <div className='m-1 w-100'>
                                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }} ></i>
                            </div>

                        </div>
                    })}

                </div>

                <div className="col-md-4 text-right">
                    <h2 style={{ fontSize: '45px' }}>Total: {subtotal} DT </h2>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>
    )
}