const React = require('react');
const PuppySelection = require('./PuppySelection');
const PuppyDescription = require('./PuppyDescription');
const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      puppies: [],
      selectedPuppy: null
    };
    this.selectPuppy = this.selectPuppy.bind(this);
  }

  componentDidMount() {

    axios.get('/puppies')
      .then(res => {
        const puppies = res.data;
        setTimeout(() => {
          this.setState({ puppies: puppies });
        }, 500);
      });

  }

  selectPuppy(id) {

    axios.get(`/puppies/${id}`)
      .then(res => {
          this.setState({
            selectedPuppy: res.data
          });
      });

  }

  generatePuppySelections(puppies) {
    if (this.state.puppies.length === 0) return <h1>No puppies available!</h1>;
    return puppies.map(puppy => {
      return <PuppySelection puppyId={puppy.id} onSelect={this.selectPuppy} key={puppy.id} name={puppy.name} />;
    });
  }

  render() {
    return (
      <div id="my-app">
        <h1>Welcome to Of Course Puppies</h1>
        {this.generatePuppySelections(this.state.puppies)}
        {
          this.state.selectedPuppy
            ? <PuppyDescription puppy={this.state.selectedPuppy} />
            : null
        }
      </div>
    );
  }

}

module.exports = App;