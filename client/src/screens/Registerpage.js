import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'


export default function Registerpage() {
    const [nom, setnom] = useState('')
    const [email, setemail] = useState('')
    const [mdp, setmdp] = useState('')
    const [cmdp, setcmdp] = useState('')
    const registerstate = useSelector((state) => state.registerUserReducer)
    const { error, loading, success } = registerstate

    const dispatch = useDispatch()
    function register() {
        if (mdp != cmdp) {
            alert("les mots de passe ne correspondent pas")
        }
        else {
            const user = {
                nom,
                email,
                mdp
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div className='register'>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                    {loading && (<Loading />)}
                    {success && (<Success success="Vous êtes inscrit avec succès" />)}
                    {error && (<Error error="Cette adresse e-mail est déjà utilisée" />)}


                    <h2 style={{ fontSize: '35px' }}>S'inscrire</h2>
                    <div>
                        <input required type="text" placeholder="Nom" className="form-control" value={nom} onChange={(e) => { setnom(e.target.value) }} />
                        <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="password" placeholder="Mot de passe" className="form-control" value={mdp} onChange={(e) => { setmdp(e.target.value) }} />
                        <input required type="password" placeholder="Confirmez le mot de passe" className="form-control" value={cmdp} onChange={(e) => { setcmdp(e.target.value) }} />
                        <button onClick={register} className="btn mt-3 mb-3">S'inscrire</button>
                        <br />
                        <a style={{ color: 'black' }} href="/login" className="mt-2">Déjà inscrit?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}