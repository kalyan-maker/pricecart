import React from "react"

function NonList ({data1}){
	return (
		<div className="card-features1">
				{ 
					data1.map((item, index) => {
						return (
							<li className="text-muted" key={index}><span className="fa-li"><i className="fas fa-times"></i></span>{item}</li>
						)
					})
				}
		</div>
	);
}

export default NonList;