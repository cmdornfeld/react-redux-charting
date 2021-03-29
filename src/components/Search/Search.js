import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

class Search extends Component {

    state = {
        searchTicker: ''
    }

    // function to update local state with which ticker symbol to search
    handleChange = (e) => {
        this.setState({
            searchTicker: e.target.value.toUpperCase()
        })
    }

    // if false, dispatch action to update chart with new ticker symbol
    // if true, alert user to try again
    handleSearch = () => {
        if ( this.state.searchTicker.length > 5 || this.state.searchTicker.length < 2) {
            alert(`Please enter valid ticker symbol. Try typing BRK-B for a well known company in Nebraska.`)
        } else {
            this.props.dispatch({type: 'SEARCH_NEW_TICKER', payload: this.state.searchTicker});
            this.setState({
                searchTicker: ''
            });
        }
    }

    render(){
        return (
            <>
                <label for="ticker-symbol">
                    Enter Ticker Symbol
                </label>
                <br/>
                <input
                    className="ticker-input"
                    maxLength={5}
                    name="ticker-symbol"
                    onChange={this.handleChange}
                    placeholder="Try a company in Nebraska: BRK-B"
                    type="text"
                    value={this.state.searchTicker} />
                <button onClick={this.handleSearch}>Search</button>
            </>
        )
    }
}

export default connect()(Search);
