import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from "../actions/userActions";
import Error from "../components/Error"
import Loading from "../components/Loading"


export default function Loginpage() {
    const [email, setemail] = useState('')
    const [mdp, setmdp] = useState('')

    const loginstate = useSelector((state) => state.loginUserReducer)
    const { loading, error } = loginstate

    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])
    function login() {

        const user = { email, mdp }
        dispatch(loginUser(user))
    }

    return (
        <div className='login'>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded ">
                    <h2 style={{ fontSize: '35px' }}>Connexion</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error="Informations invalides" />)}
                    <div>
                        <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="password" placeholder="Mot de passe" className="form-control" value={mdp} onChange={(e) => { setmdp(e.target.value) }} />

                        <button onClick={login} className="btn mt-3 mb-3">Connexion</button>
                        <br />
                        <a style={{ color: 'black' }} href="/register" className="mt-2">Créer mon compte</a>
                    </div>
                </div>
            </div>
        </div>



    )
}