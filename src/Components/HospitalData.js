import React, { useState } from 'react';
import Pune from './Pune';
import Baner from './Baner';
import Kothrud from './Kothrud';
import Hinjewadi from './Hinjewadi';
import Nigdi from './Nigdi';
import Pimpri from './Pimpri';
import ProductCard from './HospitalCard';
import Filter from './Filter';
import ProductMenu from './HospitalMenu';
import Chinchwad from './Chinchwad';

const ProductData = ({ location ,handleAddToCart}) => {
  let products;

  switch (location) {
    case 'Pune':
      products = Pune;
      break;
    case 'Chinchwad':
      products = Chinchwad;
      break;
    case 'Baner':
      products = Baner;
      break;
    case 'Kothrud':
      products = Kothrud;
      break;
    case 'Hinjewadi':
      products = Hinjewadi;
      break;
    case 'Nigdi':
      products = Nigdi;
      break;
    case 'Pimpri':
      products = Pimpri;
      break;
    default:
      products = [];
      break;
  }

  const uniqueList = [
    ...new Set(
      products.map((curElem)=>{
        return curElem.location
      })
    ),
    "All",
  ]

  const [productdata, setProductData] = useState(products);
  const [productList, setProductList] = useState(uniqueList);

  const filterItem = (location) => {
    if (location === 'All') {
      setProductData(products);
      return;
    }
    const updateList = products.filter((curElem) => {
      return curElem.location === location;
    });

    setProductData(updateList);
  };

  return (
    <>
      <ProductMenu filterItem={filterItem} productList={productList} />
      <ProductCard productdata={productdata} handleAddToCart={handleAddToCart}/>
    </>
  );
};

export default ProductData;
