import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Error from "../components/Error"
import Loading from "../components/Loading"
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function OrdersPage() {

    AOS.init()
    const dispatch = useDispatch()

    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        if (!localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
        dispatch(getUserOrders())

    }, [])
    return (
        <div>
            <h2 style={{ fontSize: '35px' }}>Mes commandes</h2>
            <hr />
            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {orders && orders.map(order => {
                    return <div key={order._id} className="col-md-8 m-2 p-1" data-aos='fade-down' style={{ backgroundColor: 'red', color: 'white' }}>

                        <div className="flex-container">
                            <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px', color: 'black' }}>Les repas</h2>
                                <hr />
                                {order.commandeItems.map(item => {
                                    return <div key={item._id}>
                                        <p>{item.nom} * {item.quantite} = {item.prix} DT</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-left w-100 m-1'>

                                <h2 style={{ fontSize: '25px', color: 'black' }}>Adresse</h2>
                                <hr />
                                <p>Rue : {order.shippingAddress.street}</p>
                                <p>Ville : {order.shippingAddress.city}</p>
                                <p>Pays : {order.shippingAddress.country}</p>
                                <p>Code PIN : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{ fontSize: '25px', color: 'black' }}>Informations</h2>
                                <hr />
                                <p>Montant total : {order.montantCommande} DT</p>
                                <p>Date : {order.createdAt.substring(0, 10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Commande Id : {order._id}</p>

                            </div>
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}