import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };
  //Callback function
  onSearchSubmit = async (term) => { 
    //By putting the async keyword allow us to use the await syntax inside of this function.
    //async means that a function always returns a promise.
    const response = await axios //The keyword await makes JavaScript wait until that promise settles and returns its result.
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID UmBUTENy_-knJN2pyTwE8PQF-zJNiK2oGFdz9rLfNPQ',
        }
      });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
