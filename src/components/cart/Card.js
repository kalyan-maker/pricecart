import React from "react";
import List from './list';
import NonList from "./list1"


function Card({ title, price, priceper, currency, features, nofeatures }) { //getting details from app.js
    function getuser(){
        console.log("Submit")
    }
    return (
    <>
        <section className="pricing py-5">
            <div className="container"> {/* create conatiner row  and Card  */}
                <div className="row">
                <div class="card-group">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className = "card-body"> {/*create header tags*/}
                            <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                            <h6 className="card-price text-center">{currency}{price}<span className="period">/{priceper}</span></h6>
                            <hr />
                            <ul class="fa-ul">
                            <List data = {features} /> {/*import list from list.js */}
                            <NonList data1 = {nofeatures} /> {/*import nonlist from nonlist.js */}
                            </ul>
                            <a href="#top" onClick={getuser} className="btn btn-block btn-primary text-uppercase">Button</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
export default Card;
