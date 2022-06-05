import { Button } from "bootstrap";
import React, { useState } from "react";
import data from "./data";

const Home = () => {
  const [noOfElement, setOfElement] = useState(4);
  const loadMore = () => {
    setOfElement(noOfElement + noOfElement);
  };
  const slice = data.cardData.slice(0, noOfElement);

  return (
    <section className="py-4 py-lg-5 container">
      <div className="row justify-content-center align-item-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 " key={index}>
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title} </h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
        <button
          className="btn btn-dark d-block w-100"
          onClick={() => loadMore()}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default Home;
