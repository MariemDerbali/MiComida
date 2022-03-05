import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { getAllUsers, deleteUser } from "../actions/userActions"

export default function Userslist() {

    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { error, loading, users } = usersstate

    useEffect(() => {

        dispatch(getAllUsers())

    }, [])
    return (
        <div>

            <h1 style={{ color: 'red' }}>Liste des utilisateurs</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <table className='table table-bordered table-responsive-sm'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id utilisateur</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.nom}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUser(user._id)) }}></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}