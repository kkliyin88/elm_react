import React, { Component } from 'react';
import {connect} from 'react-redux';
class ComA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleAdd(){
        this.props.sendAction();
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleAdd.bind(this)}>加 1</button>
            </div>
         );
    }
}
 
const mapDispatchToProp = (dispatch)=>{
    return {
       sendAction:()=>{ 
        dispatch({    //ation 
            type:'add_count'
        }) 
       } 
    }
}
 
export default connect(null,mapDispatchToProp)(ComA); 