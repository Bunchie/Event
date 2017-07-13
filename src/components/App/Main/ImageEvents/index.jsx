import React, {Component} from "react";
import {connect} from "react-redux";
import "./css/index.css";
import {apiGetIMG} from "../../../../api/api_giphy";
import {bindActionCreators} from "redux";

// function addTodo() {
//     return {
//         type: 'PROMISE',
//         actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
//         promise: apiGetIMG()
//     }
// };
//
// function mapDispatchToProps(dispatch) {
//
//     return (bindActionCreators(addTodo, dispatch));
// };

class ImageEvents extends Component {

    render() {
        if (this.props.images) {
            return (
                <div>
                    <div>
                        <button onClick={() => {
                            this.props.getImages();
                        }}>GET IMG
                        </button>
                    </div>
                    <div className="images">

                        { this.props.images.map((img) => {
                            return (
                                <div className="imagesflex" key={img.id}><img src={img.images.fixed_height.url} alt=""/>
                                </div>);
                        })}
                    </div>
                </div>

            );
        } else {
            return (<div><h1>HELLO!</h1></div>);
        }
    }
}

export default connect(state => ({
    images: state.data_api_giphy
}), dispatch => ({
    getImages: (name) => {
        dispatch({
            type: 'PROMISE',
            actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
            promise: apiGetIMG()
        });
    }
}))(ImageEvents);
