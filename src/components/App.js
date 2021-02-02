import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [], errorMessage: '' };

  onSearchSubmit = async (term) => {
    const response = await
      unsplash.get('/search/photos', {
        params: { query: term },
      });
    this.setState({ images: response.data.results });
    if (this.state.images.length == 0) this.setState({ errorMessage: 'No results found! Try again' });
  }

  render() {
    if (this.state.images.length === 0) {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
          <div>{this.state.errorMessage}</div>
        </div>
      );
    }
    else {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      );
    }
  }
}

export default App;
