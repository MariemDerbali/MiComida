import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addRepas } from "../actions/repasActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'

export default function Addrepas() {

    const [nom, setnom] = useState("");
    const [image, setimage] = useState("");
    const [Lesprix, setLesprix] = useState("");
    const [description, setdescription] = useState("");
    const [categorie, setcategorie] = useState("");

    const dispatch = useDispatch()

    const addrepasstate = useSelector((state) => state.addRepasReducer)

    const { success, error, loading } = addrepasstate

    function formHandler(e) {

        e.preventDefault();

        const repas = {
            nom,
            image,
            description,
            categorie,
            Lesprix,
        }

        console.log(repas);
        dispatch(addRepas(repas));

    }

    return (
        <div>
            <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Ajouter un nouveau repas</h1>

                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {success && (<Success success='Nouveau repas ajouté avec succès' />)}

                <form onSubmit={formHandler}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="nom"
                        value={nom}
                        onChange={(e) => {
                            setnom(e.target.value);
                        }}
                    />

                    <input
                        className="form-control"
                        type="text"
                        placeholder="Prix"
                        value={Lesprix}
                        onChange={(e) => {
                            setLesprix(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="catégorie"
                        value={categorie}
                        onChange={(e) => {
                            setcategorie(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="déscription"
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => {
                            setimage(e.target.value);
                        }}
                    />
                    <button className='btn mt-3' type='submit'>Ajouter</button>
                </form>
            </div>
        </div>
    );
}