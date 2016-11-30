const React = require('react');

const PuppySelection = function (props) {

  const callSelect = function () {
      props.onSelect(props.puppyId);
  };

  return (
    <div onClick={callSelect} className="puppy-selection">
      <h1>Name: {props.name}</h1>
    </div>
  );

};

module.exports = PuppySelection;