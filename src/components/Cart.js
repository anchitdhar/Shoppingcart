import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from './actions/cartAction';
import './card.css';

class Cart extends React.Component{

	handleRemove(id){
		this.props.removeItem(id);
	}

	render(){
		let addedItems = this.props.items.length ?
		(
			this.props.items.map(item => {
				return(
					<div className="card col-3" style={{width:'18rem',margin:'10px'}} key={item.id}>
						<img src={item.image} className="card-img-top" alt={item.title}/>
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">{item.description}</p>
							<p className="card-price"><b>Price: {item.price}</b></p>
							<p className="card-quantity"><b>Quantity: {item.quantity}</b></p>
							<button className="btn btn-danger btn-sm" onClick={()=>{this.handleRemove(item.id)}}>x</button>
						</div>
					</div>
					)
			})
		) : (<h4>Add elements to cart</h4>)
		return(
			<div className="container">
				<div className="row" style={{justifyContent:'space-evenly'}}>
					{addedItems}
				</div>
			</div>
			)
	}
}

const mapPropsToState = (state) => {
	return{
		items:state.addedItems
		}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		removeItem: (id)=>{dispatch(removeItem(id))}
	}
}

export default connect(mapPropsToState,mapDispatchToProps)(Cart)