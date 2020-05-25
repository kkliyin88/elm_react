import React, { Component } from 'react';
import {connect} from 'react-redux';
class ComB extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(ComB)  