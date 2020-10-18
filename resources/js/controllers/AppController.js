import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {navigateAppPage} from '../actions/appActions.js';
import {fetchSessionData} from '../actions/userActions.js';

//MAJOR CONTROLLER COMPONENTS
import NavComponent from '../components/NavComponent.js';
import HeaderComponent from '../components/HeaderComponent.js';

class AppController extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log('AppController componentDidMount');
        this.props.fetchSessionData();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        var {appRequestStatusCode} = this.props;

        return false;
    }

    render(){
        return (
                <div className={"content-wrap algn-cntr"}>
                    <div className={"content-wrap nav-bar algn-cntr"}>
                        <div className={"container-xl"}>
                            <NavComponent key={v4()} />
                        </div>
                    </div>
                    <div className={"header-bar content-wrap algn-cntr"}>
                        <div className={"container-xl"}>
                            <HeaderComponent key={v4()}/>
                        </div>
                    </div>

                </div>
        );
    }
}

AppController.propTypes = {
    navigateAppPage: PropTypes.func.isRequired,
    fetchSessionData: PropTypes.func.isRequired,
    sessionData: PropTypes.object.isRequired,
    appPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    sessionData: state.user.sessionData,
    appPage: state.app.appPage,
});

export default connect(mapStateToProps , {navigateAppPage, fetchSessionData})(AppController);
