const React = require('react')
const Def = require('./default')


module.exports = home

import React from 'react';
import Def from './default';

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
}

export default Home;
