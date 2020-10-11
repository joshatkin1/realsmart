import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {fetchSessionData} from '../actions/appActions.js';

class AppController extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchSessionData();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render(){
        return (
            <p>inside app</p>
        );
    }
}

AppController.propTypes = {
    fetchSessionData: PropTypes.func.isRequired,
    sessionData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    sessionData: state.app.sessionData,
});

export default connect(mapStateToProps , {fetchSessionData})(AppController);
