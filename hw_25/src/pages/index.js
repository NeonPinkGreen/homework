import React, { Fragment } from "react";
import Category from '../components/Category';

const Index = (props) => {
  const groupByCategory = props.products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    group[category].push(product);
    return group;
  }, {});


  return (
    <Fragment>
      <main>
        <div className="container" id="categoriesContainer">
          { Object.entries(groupByCategory).map((item) => {
             return (
                <Category title={item[0]} products={item[1]} />
             )
          }) }
        </div>
      </main>
    </Fragment>
  );
};

export { Index };
