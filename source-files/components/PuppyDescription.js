const React = require('react');

module.exports = function (props) {

  return (
    <div>
      <h1>{props.puppy.name}</h1>
      <pre>{props.puppy.description}</pre>
      <h3>Favorite Show: {props.puppy.favoriteShow}</h3>
      <img src={props.puppy.photo} />
    </div>
  );

};