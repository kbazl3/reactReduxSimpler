import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: ''};
        //^^^^Initiliaze state^^^^
    }


    render() {
        return (
            <div>
                <input
                    value={this.state.searchTerm + " nice"}
                    onChange={e => this.setState({searchTerm: e.target.value})}/>
            </div>

        )
    }
}
//CLASS BASED COMPONENT^^^^

export default SearchBar;
