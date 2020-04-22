import React from 'react';
import ReactDom from 'react-dom';
import ListingDetail from './components/ListingDetail.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listingData: {},
      features: []
    };
  }
  render() {
    return (
      <div>
        <div className="main">
          <h3>This is the main App component.</h3>
          It renders the ListingDetail component.
          <ListingDetail data={this.state.listingData} />
        </div>
      </div>
    );
  }

}

ReactDom.render(<App />, document.getElementById('property-service'));

export default App;