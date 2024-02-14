const React = require('react');
const Def = require('./default');

function index(data) {
    let placesFormatted = data.places.map((place, index) => (
        React.createElement('div', { key: index },
            React.createElement('h2', null, place.name),
            React.createElement('img', { src: place.pic, alt: place.name })
        )
    ));

    return React.createElement(Def, null,
        React.createElement('main', null,
            React.createElement('h1', null, 'PLACES INDEX PAGE'),
            placesFormatted
        )
    );
}

module.exports = index;
