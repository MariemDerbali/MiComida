import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { getAllOrders, deliverOrder } from '../actions/orderAction'

export default function Orderslist() {

    const dispatch = useDispatch()
    const getorderstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getorderstate
    useEffect(() => {

        dispatch(getAllOrders())
    }, [])

    return (
        <div>
            <h1 style={{ color: 'red' }}>Liste des commandes</h1>

            {loading && (<Loading />)}
            {error && (<Error error="Something went wrong" />)}

            <table className='table table-bordered table-responsive-sm'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id commande</th>
                        <th>Email</th>
                        <th>Id utilisateur</th>
                        <th>Montant</th>
                        <th>Date</th>
                        <th>État</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.montantCommande}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.etatCommande ? (<h1>livré</h1>) : (<button className='btn' onClick={() => { dispatch(deliverOrder(order._id)) }}>livrer</button>)}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}