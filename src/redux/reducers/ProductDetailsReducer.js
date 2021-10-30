const INITIAL_STATE = {
    apiData : [],
    updateDataObject:{}
}

const ProductDetailsReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'UPLOAD_DATA':
            return {...state, apiData: action.payload}
        case 'UPDATE_NAME':
            return {...state, name: action.payload}
        case 'UPLOAD_OBJECT':
            return {...state, updateDataObject: action.payload}
        case 'SAVE' : 
            const obj = state.apiData.map((item) => {
                if(item.id == state.updateDataObject.id){
                //    item = {...item, title:action.payload.title, body:action.payload.body }
                   item = {...item, title:state.updateDataObject.title, body:state.updateDataObject.body} //state :   
                }
                return item
            })
            return {...state, apiData : obj};
        default:
            return state;
    }
}

export default ProductDetailsReducer ; 

//title:action.payload.title, body:action.payload.body