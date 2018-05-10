import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAuZ5z6-XyS3ct-Cucodz78mWq97V21IQE';

//create a new components.  This compenet should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [], //list of videos after search
            selectedVideo: null
        };

        this.videoSearch('JRE');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/> {/* Component that shows the embedded video */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                /> {/* Component that shows the list of videos, also has nested component VideoListItem */}
            </div>
        )
    }

}

//take components generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
