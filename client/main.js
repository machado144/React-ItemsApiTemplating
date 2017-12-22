import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ItemList from './components/item_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  };

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ items: response.data.data }));
  };

  render() {
    return(
      <div>
        <ItemList items={this.state.items} />
      </div>
    );
  }
};


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'))
});
