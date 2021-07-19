import React from "react"

function List ({data}){
	return (
		<div className="card-features">
				{ 
					data.map((item, index) => { //getting details from cart.js
						return (
							<li className="list" key={index}><span className="fa-li"><i className="fas fa-check"></i></span>{item}</li>
						)
					})
				}
		</div>
	);
}

export default List;