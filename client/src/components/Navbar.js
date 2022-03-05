import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'




export default function Navbar() {

    const cartstate = useSelector((state) => state.cartReducer)
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src='/favicon.ico' width='50x' height='50px' />
                        <br />
                        <i className='fa fa-utensils m-1'></i>Mi Comida<i className='fa fa-utensils m-1'> </i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {currentUser ?
                                (
                                    <div className="dropdown mt-2">
                                        {currentUser.RoleAdmin ?
                                            (<a style={{ color: 'black', marginRight: "90px", textDecoration: 'none' }} className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {currentUser.nom}
                                            </a>) : (<a style={{ color: 'black', textDecoration: 'none' }} className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {currentUser.nom}
                                            </a>)}

                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            {currentUser.RoleAdmin ?
                                                (
                                                    <a href="/admin" className="dropdown-item" >Tableau de bord</a>

                                                ) :
                                                (
                                                    <a className="dropdown-item" href="/orders">Commandes</a>

                                                )}
                                            <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li>Se déconnecter</li></a>
                                        </div>
                                    </div>



                                )
                                :
                                (<li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Connexion
                                    </a>

                                </li>)}

                            <li className="nav-item">
                                {currentUser && !currentUser.RoleAdmin ?
                                    (
                                        <a className="nav-link" href="/cart">
                                            Panier {cartstate.cartItems.length}
                                        </a>
                                    )
                                    :
                                    (<a className="nav-link" style={{ display: 'none' }}>WELCOME ADMIN</a>)}


                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}