import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
        //^^^^Initiliaze state^^^^
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}/>
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        console.log(this.props.onSearchTermChange)
        this.props.onSearchTermChange(term)
    }
}
//CLASS BASED COMPONENT^^^^

export default SearchBar;
