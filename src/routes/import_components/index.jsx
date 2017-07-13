import {Link} from "react-router-dom";
import React, {Component} from "react";
import {RouteWithSubRoutes} from "./RouteWithSubRoutes";

export const Events = () => <h2>Events</h2>;
export const News = ({routes}) => <div>

    <h2>News</h2>
    <li><Link to="/news/music">Music</Link></li>
    <li><Link to="/news/sport">Sport</Link></li>
    {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ))}
</div>;

export class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            showTitle:""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value:e.currentTarget.value});
    }

    handleClick() {
        this.setState({showTitle:this.state.value});
    }

    render() {
        return (<div><h1>{this.state.showTitle}</h1>
            <input onChange={this.handleChange} type="text"/>
            <button onClick={this.handleClick}>Ok</button>
        </div>);
    }
}
export const Sport = () => <h2>News - Sport</h2>;