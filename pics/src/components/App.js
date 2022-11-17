import React from 'react';
import unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
        });

        // console.log(this);
        this.setState({images: response.data.results});
        // console.log(this.state.images);
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
                <ImageList images={this.state.images}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;