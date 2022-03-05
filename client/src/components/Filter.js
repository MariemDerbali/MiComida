import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterRepas } from '../actions/repasActions'

export default function Filter() {

    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [categorie, setcategorie] = useState('all')

    return (
        <div className="container">
            <div className="row shadow-lg p-3 mb-5 bg-body rounded justify-content-center">

                <div className="col-md-3 ">
                    <input onChange={(e) => { setsearchkey(e.target.value) }} value={searchkey} type="text" className="form-control w-100" placeholder="Filtrer par nom" />
                </div>
                <div className="col-md-3 ">
                    <select onChange={(e) => { setcategorie(e.target.value) }} value={categorie} className="form-control w-100 mt-2">

                        <option value="all">Toutes les catégories</option>
                        <option value="Menus">Menus</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Boissons">Boissons</option>
                        <option value="Salades">Salades</option>
                        <option value="Burgers">Burgers</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Pizza">Pizza</option>

                    </select>
                </div>
                <div className="col-md-2 ">
                    <button className="btn w-100 mt-2" onClick={() => { dispatch(filterRepas(searchkey, categorie)) }}>Filtrer</button>
                </div>

            </div>

        </div>
    )
}