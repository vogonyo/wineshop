import React from 'react';

const ItemBoard = ({ 
    product: {
        no,
        name,
        image,
        cost,
        details
    }
}) => {
    const addDetails = (id) => {
       document.getElementById(`${id}`).style.display="block";
    };
    const removeDetails = (id) => {
        document.getElementById(`${id}`).style.display="none";
    };
    return (
        <div className="item">
            <div id={`${no}`} className="detailedDiv">
                <span className="detailedDiv__details">{details}</span>
                <button className="detailedDiv__back" onClick={() => removeDetails(no)}>Back</button>
            </div>
            <img className="item__image" src={image} alt={`${name}`} />
            <div className="content">
                    <span className="content__brandno">{no}</span>
                    <span className="content__brandname">{name}</span>
                <span className="content__pricing">
                  <div className="inputs bottle">
                        <span className="inputs__text">Bottle</span>
                        <span className="inputs__price">${cost.bottle}</span>
                        <span className="inputs__form">
                            <input className="form" type="text"/> QTY
                        </span>
                  </div>
                  <div className="inputs case">
                        <span className="inputs__text">Case</span>
                        <span className="inputs__price">${cost.case}</span>
                        <span className="inputs__form">
                            <input className="form" type="text"/><span> QTY</span>
                        </span>
                  </div>
                </span>
                <span className="content__btns">
                    <button className="btn-detail" onClick={()=> addDetails(no)}>Details</button>
                    <button className="btn-add">Add To Cart</button>
                </span>
            </div>
        </div>
    )
};

export default ItemBoard;
