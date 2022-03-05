import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Addrepas from "./Addrepas";
import Editrepas from "./Editrepas";
import Orderslist from "./Orderslist";
import Repaslist from "./Repaslist";
import Userslist from "./Userslist";


export default function Adminpage() {

    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(() => {

        if (!currentUser) {
            window.location.href = '/';

        } else {
            if (!currentUser.RoleAdmin) {
                window.location.href = '/';
            }
        }

    }, [])



    return (
        <div>
            <div className="row justify-content-center p-3">
                <div className="col-md-10">

                    <h2 style={{ fontSize: '35px' }}>
                        Tableau de bord
                    </h2>

                    <ul className="adminfunctions">

                        <li>
                            <Link to={'/admin/userslist'} style={{ color: 'white' }}>Liste des utilisateurs</Link>
                        </li>

                        <li>
                            <Link to={'/admin/repaslist'} style={{ color: 'white' }}>Liste des repas</Link>
                        </li>
                        <li>
                            <Link to={'/admin/addrepas'} style={{ color: 'white' }}>Ajouter un nouveau repas</Link>
                        </li>
                        <li>
                            <Link to={'/admin/orderslist'} style={{ color: 'white' }}>Liste des commandes</Link>
                        </li>

                    </ul>

                    <Switch>
                        <Route path="/admin" component={Userslist} exact />
                        <Route path="/admin/userslist" component={Userslist} exact />
                        <Route path="/admin/orderslist" component={Orderslist} exact />
                        <Route path="/admin/repaslist" component={Repaslist} exact />
                        <Route path="/admin/addrepas" component={Addrepas} exact />
                        <Route path="/admin/editrepas/:repasid" component={Editrepas} exact />

                    </Switch>
                </div>
            </div>


        </div >
    )
}