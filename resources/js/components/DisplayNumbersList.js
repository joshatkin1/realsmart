import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import NumberItem from '../items/NumberItem.js';

class DisplayNumbersList extends Component{
    constructor(props){
        super(props);

        this.state = {
            numberType : props.numberType,
        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    displayNumbers(){
        var {numberType} = this.state;
        var {numbers} = this.props;

        var type = (numberType === "unused")? 0:1;
        console.log(type);

        if(numbers.length > 0){
            var displayNumbers = numbers.map((num) =>{

                if(num.used !== type ){
                    return;
                }

                return(
                    <NumberItem key={v4()} number={num.number} numberType={numberType}/>
                );

            });

            return displayNumbers;
        }
    }

    render(){
        return (
            <div className={"container"}>
                {this.displayNumbers()}
            </div>
        );
    }
}

DisplayNumbersList.propTypes = {
    numbers: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    numbers: state.app.numbers,
});

export default connect(mapStateToProps , {})(DisplayNumbersList);
