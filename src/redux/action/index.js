const sendAction = ()=>{
    return {
        type:'send_type',
        value:'发送了一个action'
    }
}
const addAtion= ()=>{
    return {
        type:'send_add',
        value:'发送了一个action'
    }
}
module.exports = {sendAction}