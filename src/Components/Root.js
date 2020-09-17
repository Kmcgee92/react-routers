import React from 'react';
import Rainbow from './Rainbow'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Rainbow />
    </BrowserRouter>
);

export default Root;
