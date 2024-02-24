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
                <div>
                    <img src="/images/koreanbbq.jpg" alt="picture of delicious korean bbq from unsplash.com" />
                <div>
                    Photo By <a href="https://www.istockphoto.com/portfolio/Thidarat_Suriyawong?mediatype=photography"> October22</a> on <a href="https://unsplash.com/">Unsplash</a>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                </div>
                </div>
            </main>
        </Def>
    );
}

export default Home;
