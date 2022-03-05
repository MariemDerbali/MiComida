import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Repas from '../components/Repas'
import { getAllRepas } from '../actions/repasActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'


export default function Homepage() {

    const dispatch = useDispatch()

    const repasstate = useSelector((state) => state.getAllRepasReducer)
    const { repasarr, error, loading } = repasstate

    useEffect(() => {
        dispatch(getAllRepas())
    }, [])


    return (
        <div>
            <Filter />
            <div className="row justify-content-center">

                {loading ? (
                    <Loading />) : error ? (
                        <Error error='Sorry, something went wrong.' />
                    ) : (
                    repasarr.map((repas) => {
                        return (
                            <div className="col-md-3 m-3" key={repas._id}>
                                <div >
                                    <Repas repas={repas}></Repas>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>

    )
}