import React from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import Indigo from './Indigo'


const Blue = () => {
    return (
        <div>
            <h2 className="blue">Blue</h2>
            <NavLink exact to="/blue">Blue only</NavLink>

            <NavLink exact to="/blue/indigo">Indigo</NavLink>

            <Switch>
                <Route exact path='/blue/indigo' component={Indigo}></Route>
            </Switch>

        </div>
    );
};

export default Blue;
