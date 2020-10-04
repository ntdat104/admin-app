import React, { Component } from 'react';
import "../css/SearchBox.css";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    
    handleChange(e) {
        this.setState({
            username: e.target.value.trim().toLowerCase()
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getUsernameSearch(this.state.username);
    }

    render() {
        return (
            <form className="search-box" onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="search">Tìm kiếm</label>
                <input type="text" id="search" placeholder="username" onChange={(e) => this.handleChange(e)}/>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBox;