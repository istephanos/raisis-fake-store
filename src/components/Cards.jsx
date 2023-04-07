import React, {useState, useEffect} from "react";
import Button from "./Button";

const Cards = () => {
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakeStore();
  }, []);
  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  };
  return (
    <>
      <h2>Fake API store</h2>
      <div className="container">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h4>{values.title}</h4>
                  <p>{values.description}</p>
                </div>
                <img src={values.image} alt="product" />
                <div className="buttons">
                  <Button />
                  <Button />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
