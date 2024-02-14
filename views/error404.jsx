const React = require('react')
const Def = require('./default')


import React from 'react';
import Def from './default';

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/happymoose.jpg" alt="a very happy moose from unspalsh.com"/>
                    <div>
                        A photo By <a href="https://www.istockphoto.com/portfolio/wildpixel?mediatype=photography">WildPixel</a>On <a href="https://unsplash.com/s/photos/happy-moose"></a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

export default Error404;
