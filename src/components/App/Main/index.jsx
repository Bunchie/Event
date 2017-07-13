import "./css/index.css";
import {connect} from "react-redux";
import React, {Component} from "react";
import {routes} from "../../../routes/index";
import{BrowserRouter as Router, Link} from "react-router-dom";
import {RouteWithSubRoutes} from "../../../routes/import_components/RouteWithSubRoutes";

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <h1>{this.props.name}</h1>
                    <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/images">IMG</Link></li>
                    </ul>
                    <input type="text" onChange={(e)=>{this.props.changeHeader(e.currentTarget.value)}}/>
                    <button onClick={()=>{this.props.changeHeader("Heeeeeeellllooo!!!!")}}>OK</button>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>
        );
    }
}

export default connect(
    state => ({
        main: state.main
    }),
    dispatch => ({
        changeHeader: (name) => {
            dispatch({type: "TEST", payload: [{header: name}]});
        }
    }))(Main);