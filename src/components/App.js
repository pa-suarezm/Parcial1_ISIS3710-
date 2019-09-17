import React, { Component } from "react";
import Menu from "./Menu";
import TweetList from "./TweetList";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: null,
        };
    }

    state = {
        data: null,
    };

    componentDidMount(){
        if(this.state.data === null){
            fetch('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json')
                .then((response) => {
                    return response.json();
                })
                .then((cosas) => {
                    this.setState({data: cosas});
                    this.render();
                });
        }
    }

    render(){
        console.log(`this.state.data: ${this.state.data}`);
        if(this.state.data == null){
            return null;
        }
        else{
            console.log(`en else this.state.data.menu: ${this.state.data.menu}`);
            //Debería volverse a renderizar una vez la promesa de fetch en componentDidMount() se resuelva PERO NO LO ESTÁ HACIENDO
            return(
                <div className="row">
                    <Menu data={this.state.data.menu} />
                    <TweetList data={this.state.data.tweets}/>
                </div>
            );
        }
    }
}

export default App;