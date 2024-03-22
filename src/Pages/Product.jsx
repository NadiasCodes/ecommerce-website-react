import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Filter from "../Components/Filter/Filter";

export default function Product() {
  const{all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product= all_product.find((e)=> e.id === Number (productId) )
  return (
  
  <div>

<Filter product={product}/>
<ProductDisplay product={product}/>

  </div>
  );
}
