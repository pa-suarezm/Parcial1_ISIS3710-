import React, { Component } from "react";

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            menu: props.data,
        };
    }

    render(){
        return(
            <div className="sidenav">
                <nav className="navbar bg-light">
                    <ul className="navbar-nav">
                    {this.state.menu.map((element) => {
                        console.log(element);
                        return(
                        <li className="nav-item" key={element.text}>
                                <a href="#" className="nav-link">
                                <img src={element.image}/>{element.text}</a>
                        </li>);
                    })}
                    </ul>
                </nav>
            </div>
        );
    }

}

export default Menu;