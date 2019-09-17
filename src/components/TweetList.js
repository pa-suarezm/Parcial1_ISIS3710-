import React, { Component } from "react";

class TweetList extends Component{

    constructor(props){
        super(props);

        this.state = {
            tweets: props.data,
        };
    }

    render(){
        return(
            <div>
                                
            </div>
        );
    }

}

export default TweetList;