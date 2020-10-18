import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class HeaderComponent extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render(){
        return (
            <header className={"header-bar container-row wrap-middle algn-cntr"}>
                    <div className={"col-3 wrap-start algn-cntr"}>
                        <p>logo</p>
                    </div>
                    <div className={"col-9 wrap-end algn-cntr"}>
                        <p>notifications</p>
                    </div>
            </header>
        );
    }
}

HeaderComponent.propTypes = {
    sessionData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    sessionData: state.user.sessionData,
});

export default connect(mapStateToProps , {})(HeaderComponent);
