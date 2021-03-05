import React, { Component } from 'react'
import { searchAdvice } from '../api-utils.js';
export default class AdviceListPage extends Component {
    state = {
        advice: [],
        search: ''
    }

    //componentDidMount = async() => {
       // if (this.props.token) await this.doFavoritesFetch();
   // }

    // doFavoritesFetch = async () => {
    //     const favorites = await getFavorites(this.props.user.token);

    //     this.setState({ favorites })

    
    doSearch = async () => {
        const advice = await searchAdvice(this.state.advice);

        this.setState({ advice });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await this.doSearch();
    }


    handleSearchChange = e => this.setState({ search: e.target.value })

    

    render() {   
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <button>Search for advice</button>
                </form>
                <div>
                {
                    this.state.advice.map(advice => 
                    <div key={`${advice.advice_id}`}>
                        <h3>{advice.advice_id}</h3>
                        <p>{advice.advice}</p>                        
                    </div>)
                }
                </div>
                </div>
            )
   }
   
}