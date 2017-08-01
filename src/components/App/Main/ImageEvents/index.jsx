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

    constructor(props) {
        super(props);
        this.getNameForFindIMG = this.getNameForFindIMG.bind(this);
        this.getAmountForFindIMG = this.getAmountForFindIMG.bind(this);

    }

    getNameForFindIMG(e) {
        this.name = e.currentTarget.value;
    }

    getAmountForFindIMG(e) {
        this.amount = e.currentTarget.value;
    }

    render() {
        console.log(this.props.images);
        if (this.props.images) {
            return (
                <div>
                    <div>
                        <label>NAME<input type="text" onChange={this.getNameForFindIMG}/></label>
                        <label>AMOUNT<input type="text" onChange={this.getAmountForFindIMG}/></label>
                        <button onClick={() => {
                            this.props.getImages(this.name, this.amount);
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
    getImages: (name, amount) => {
        dispatch({
            type: 'PROMISE',
            actions: ['IMG_LOADING', 'IMG_LOADED', 'IMG_LOAD_FAILURE'],
            promise: apiGetIMG(name, amount)
        });
    }
}))(ImageEvents);
