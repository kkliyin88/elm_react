import { object } from "prop-types"

const initState ={
    value:'默认值',
    count:1
}
const reducer = (state=initState,action)=>{
    console.log('触发了reducer')
    switch(action.type){ 
        case 'send_type':
            return Object.assign({},state,action);
            break;
        case 'add_count':
            return {
                count:state.count+1
            };
            break;    
        default:
            return state
    }
}
module.exports={reducer};
