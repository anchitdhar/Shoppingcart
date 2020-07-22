import itemImage from '../image/item.jpeg';

const initState={
    items:[
        {id:1,title:'Oven1',description:'Bake1',price:200,image:itemImage},
        {id:2,title:'Oven2',description:'Bake2',price:210,image:itemImage},
        {id:3,title:'Oven3',description:'Bake3',price:220,image:itemImage},
        {id:4,title:'Oven4',description:'Bake4',price:230,image:itemImage},
        {id:5,title:'Oven5',description:'Bake5',price:240,image:itemImage},
        {id:6,title:'Oven6',description:'Bake6',price:250,image:itemImage},
    ],
    addedItems:[]
}

const cartReducer = (state=initState,action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            let addedItem = state.items.find(item=> item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if(existed_item)
            {
                addedItem.quantity += 1
                return{
                    ...state,
                }
            }else{
                addedItem.quantity = 1;
                return{
                    ...state,
                    addedItems:[...state.addedItems,addedItem],

                }
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                addedItems:state.addedItems.filter(item=> item.id !== action.id)
            }
        default:
            return state
    }
}

export default cartReducer;