const initialState = {
    loading: false,
    listId:[],
    listBrand:[],
    listGoods:[],
    page:1
}

export const loadReducer = (state=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case "TOGGLE_LOADING":
            return {
            ...state,
            loading:payload
            }           
        case "LOAD_IDS":
            return {
            ...state,
            listId:payload
            }                 
        case "LOAD_BRANDS":
            return {
            ...state,
            listBrand:payload
            }           
        case "CHANGE_PAGE":
            return {
            ...state,
            page:payload
            }           
        case "LOAD_GOODS_OF_PAGE":
            if(payload.length!==0){
                 return {
            ...state,
            listGoods:payload
            } 
            }else{
                return{...state}
            }
        default:
            return state
    }
}