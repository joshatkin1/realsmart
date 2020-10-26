import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {getNumberList} from '../actions/appActions.js';
import DisplayNumbersList from '../components/DisplayNumbersList.js';

//MAJOR CONTROLLER COMPONENTS
import HeaderComponent from '../components/HeaderComponent.js';

class AppController extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log('AppController componentDidMount');

        this.props.getNumberList();

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return true;
    }

    render(){
        return (
                <div className={"content-wrap algn-cntr"}>
                    <div className={"header-bar content-wrap algn-cntr"}>
                        <div className={"container-xl"}>
                            <HeaderComponent key={v4()}/>
                        </div>
                    </div>
                    <div className={"content-wrap algn-cntr"}>
                        <div className={"container-xl wrap-middle"}>
                            <div className={"num-list-sec"}>
                                <p>Unused Numbers</p>
                                <div className={"display-num-sec"}>
                                    <DisplayNumbersList key={v4()} numberType={"unused"} />
                                </div>
                            </div>
                            <div className={"num-list-sec"}>
                                <p>Used Numbers</p>
                                <div className={"display-num-sec"}>
                                    <DisplayNumbersList key={v4()} numberType={"used"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

AppController.propTypes = {
    getNumberList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps , {getNumberList})(AppController);
