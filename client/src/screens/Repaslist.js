import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { deleteRepas, getAllRepas } from '../actions/repasActions'
import { Link } from 'react-router-dom'


export default function Repaslist() {


    const dispatch = useDispatch()

    const repasstate = useSelector((state) => state.getAllRepasReducer)
    const { repasarr, error, loading } = repasstate
    useEffect(() => {
        dispatch(getAllRepas())
    }, [])

    return <div>
        <h1 style={{ color: 'red' }}>Liste des repas</h1>
        {loading && (<Loading />)}
        {error && (<Error error='Something went wrong' />)}

        <table className='table table-bordered table-responsive-sm'>

            <thead className='table-dark'>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Catégorie</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {repasarr && repasarr.map(repas => {

                    return <tr>
                        <td>{repas.nom}</td>
                        <td>

                            {repas.Lesprix} DT

                        </td>
                        <td>{repas.categorie}</td>
                        <td>
                            <i className='fa fa-trash m-1' onClick={() => { dispatch(deleteRepas(repas._id)) }}></i>
                            <Link to={`/admin/editrepas/${repas._id}`}><i className='fa fa-edit m-1'></i></Link>
                        </td>

                    </tr>

                })}
            </tbody>

        </table>


    </div>;
}