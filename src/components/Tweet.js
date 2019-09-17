import React, { Component } from "react";

class Tweet extends Component {

    constructor(props){
        super(props);

        this.state = {
            tweet = props.data,
        };
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.tweet.avatar}</li>
                    <li>{this.state.tweet.first_name}</li>
                    <li>{this.state.tweet.last_name}</li>
                    <li>{this.state.tweet.nick}</li>
                    <li>{this.state.tweet.date}</li>
                </ul>
            </div>
        );
    }

}

export default Tweet;