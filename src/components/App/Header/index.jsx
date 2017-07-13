import "./css/index.css";
import {connect} from "react-redux";
import React, {Component} from "react";
import {bindActionCreators} from "redux";

// function addTodo() {
//     return {
//         type: 'TEST',
//         payload :"hello"
//     }
// }

class Header extends Component {
    render() {
        console.log(this.props.header.name);
        return (
            <header className="header">
                <div className="header-name">{this.props.header.name}</div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {header: state.header};
};

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(addTodo, dispatch)
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default connect(mapStateToProps)(Header);