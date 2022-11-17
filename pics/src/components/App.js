import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization:
                    'Client-ID tw4VYePIpJCddXgFQuCKW85emB8kMAJ9wAGX2bN2NW8',
            },
        });
        console.log(this);
        this.setState({images: response.data.results});
        console.log(this.state.images);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                    guesswhtIam="Im the propsobject"
                />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;