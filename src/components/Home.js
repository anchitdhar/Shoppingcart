import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartAction';
import './card.css';

class Home extends React.Component{

	handleChange(id){
		this.props.addToCart(id);
	}

	render(){
		let itemList = this.props.items.map(item => {
			return(
				<div className="card col-3" style={{width:'18rem',margin:'10px'}} key={item.id}>
					<img src={item.image} className="card-img-top" alt={item.title}/>
					<div className="card-body">
						<h5 className="card-title">{item.title}</h5>
						<p className="card-text">{item.description}</p>
						<p className="card-price"><b>Price: {item.price}</b></p>
						<button className="btn btn-primary" onClick={() => {this.handleChange(item.id)}}>+</button>
					</div>
				</div>
				)
		})
		return(

			<div className="container">
				<div className="row" style={{justifyContent:'space-evenly'}}>
					{itemList}
				</div>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	return{
		items:state.items
		}
}

const mapDispatchToProps= (dispatch) => {
	return{
		addToCart: (id)=>{dispatch(addToCart(id))}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)