import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Product.css";

const Product = () => {
  const url = "https://fakestoreapi.com/products";
  const [product, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const cards=product.map(product=>(
    <div className="col-md-3" style={{marginBottom:"10px"}}>

    <Card key={product.id} className="h-100">
      <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR:{product.price}
        </Card.Text>       
      </Card.Body>
      <Card.Footer>      
        <Button variant="primary">Add To Cart</Button>
      </Card.Footer>
    </Card>
    
    </div>
  ))
  return (
    <>
      <div className="parent">
        <h1 className="header" md="auto">
          Product DashBoard
        </h1>
        <div className="row">{cards}</div>
      </div>
    </>
  );
};

export default Product;
