// import {ADD_TO_CART,REMOVE_ITEM} from './actionTypes';

export const addToCart = (id) => {
	return{
		type:'ADD_TO_CART',
		id
	}
}

export const removeItem = (id) => {
	return{
		type:'REMOVE_ITEM',
		id
	}
}