import React, {Component} from "react";
import {connect} from "react-redux";
import "./css/index.css";

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div>
                    {this.props.footer.name}
                </div>

            </footer>
        );
    }
}

export default connect(state => ({footer: state.footer}), dispatch => ({}))(Footer);