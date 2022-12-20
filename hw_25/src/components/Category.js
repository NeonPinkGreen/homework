import React, { Fragment } from "react";

const Category = (props) => {
    console.log(props)
  return (
    <Fragment>
      <section className="category" data-name="Boat">
        <h2>{props.title}</h2>
        <div className="category__container">
          {props.products.map((item) => {
              return (
                <div data-id="1" className="product">
                  <img
                    src={`images/products/${item.img}.png`}
                    className="product__img"
                    alt={item.title}
                    height="80"
                  />
                  <p className="product__title">{item.title}</p>
                  {item.sale ? (
                    <div className="product__sale">
                      <span className="product__sale--old">{`${item.price}`}</span>
                      <span className="product__sale--percent">{`-${item.salePercent}%`}</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="product__info">
                    <span className="product__price">{`$${
                      item.price - item.price * (item.salePercent / 100)
                    }`}</span>
                    <button className="product__cart">
                      <img
                        src="images/shopping-cart.png"
                        alt="shopping cart"
                        height="20"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </Fragment>
  );
};

export default Category;
