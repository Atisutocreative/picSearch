import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  //Callback function
  onSearchSubmit = async (term) => { 
    //By putting the async keyword allow us to use the await syntax inside of this function.
    //async means that a function always returns a promise.
    const response = await //The keyword await makes JavaScript wait until that promise settles and returns its result.
      unsplash.get('/search/photos', {
        params: { query: term },
      });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
