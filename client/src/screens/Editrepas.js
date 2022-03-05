import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editRepas, getRepasById } from '../actions/repasActions'

import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'




export default function Editrepas({ match }) {
    const dispatch = useDispatch()

    const [nom, setnom] = useState("");
    const [image, setimage] = useState("");
    const [Lesprix, setLesprix] = useState("");
    const [description, setdescription] = useState("");
    const [categorie, setcategorie] = useState("");


    const getrepasbyidstate = useSelector(state => state.getRepasByIdReducer)

    const { repas, error, loading } = getrepasbyidstate;

    const editrepasstate = useSelector((state) => state.editRepasReducer)
    const { editloading, editerror, editsuccess } = editrepasstate;

    useEffect(() => {

        if (repas) {
            if (repas._id == match.params.repasid) {
                setnom(repas.nom);
                setdescription(repas.description)
                setcategorie(repas.categorie)
                setLesprix(repas.Lesprix)
                setimage(repas.image)
            }
            else {
                dispatch(getRepasById(match.params.repasid))

            }
        } else {
            dispatch(getRepasById(match.params.repasid))
        }

    }, [repas, dispatch]);


    function formHandler(e) {

        e.preventDefault();

        const editedrepas = {
            _id: match.params.repasid,
            nom,
            image,
            description,
            categorie,
            Lesprix,
        }


        dispatch(editRepas(editedrepas))
    }

    return (
        <div>

            <div className='text-left shadow-lg p-3 mb-5 bg-white rounded'>
                <h1>Modifier le repas</h1>

                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {editsuccess && (<Success success="repas est mis à jour avec succès" />)}
                {editloading && (<Loading />)}


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
                    <button className='btn mt-3' type='submit'>Modifier</button>
                </form>
            </div>
        </div>
    )

}