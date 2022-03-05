import React, { useState } from "react"
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../actions/cartAction';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Repas({ repas }) {
    AOS.init()

    const [quantite, setquantity] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    function addtocart() {
        dispatch(addToCart(repas, quantite))
    }


    return (
        <div data-aos='zoom-in' className='shadow-lg p-3 mb-5 bg-white rounded'
            key={repas._id}>
            <div onClick={handleShow}>
                <h1>
                    {repas.nom}
                </h1>
                <img src={repas.image} className="img.fluid" style={{ height: '200px', width: '200px' }} />

            </div>
            <div>

                <p>Quantité</p>
                <select className='form-control'
                    value={quantite} onChange={(e) => { setquantity(e.target.value) }}>

                    {[...Array(10).keys()].map((x, i) => {
                        return <option value={i + 1}>{i + 1}</option>;


                    })}
                </select>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Prix: {repas.Lesprix * quantite} DT</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>Ajouter au panier</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{repas.nom}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={repas.image} className="img-fluid" style={{ height: '400px' }} />
                    <p>{repas.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Fermer</button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}