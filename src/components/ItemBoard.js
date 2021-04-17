import React from 'react';

const ItemBoard = ({ 
    product: {
        brandno,
        brandname,
        image,
        bottle,
        casePrice
    }
}) => {
    return (
        <div className="item">
            <img className="item__image" src={image} alt={`${brandname}`} />
            <div className="content">
                    <span className="content__brandno">{brandno}</span>
                    <span className="content__brandname">{brandname}</span>
                <span className="content__pricing">
                  <div className="inputs bottle">
                        <span className="inputs__text">Bottle</span>
                        <span className="inputs__price">${bottle}</span>
                        <span className="inputs__form">
                            <input className="form" type="text"/> QTY
                        </span>
                  </div>
                  <div className="inputs case">
                        <span className="inputs__text">Case</span>
                        <span className="inputs__price">${casePrice}</span>
                        <span className="inputs__form">
                            <input className="form" type="text"/><span> QTY</span>
                        </span>
                  </div>
                </span>
                <span className="content__btns">
                    <button className="btn-detail">Details</button>
                    <button className="btn-add">Add To Cart</button>
                </span>
            </div>
        </div>
    )
};

export default ItemBoard;
