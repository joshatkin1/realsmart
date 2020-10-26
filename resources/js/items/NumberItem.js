import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {swapIntegerUsage} from '../actions/appActions.js';

class NumberItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            numberType: props.numberType,
            number : props.number
        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    onClick(event){
        this.props.swapIntegerUsage(event.target.value);
        return true;
    }

    render(){
        var {numberType, number} = this.state;
        return (
            <div className={"container wrap-start number-item-dv"}>
                <div className={"col-6"}>
                    {number}
                </div>
                <div className={"col-6"}>
                    <button
                        value={number}
                        onClick={(event) => {this.onClick(event)}}
                    >
                        {numberType === "unused" ?
                            "+"
                        :
                            "-"
                        }
                    </button>
                </div>
            </div>
        );
    }
}

NumberItem.propTypes = {
    swapIntegerUsage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps , {swapIntegerUsage})(NumberItem);
