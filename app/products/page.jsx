"use client"

import { useEffect, useState } from "react"
import { productsList } from "./actions";

export default function Products() {
  const [products, setProducts] = useState([]);
  
  // al cargar la vista, lea la lista de productos
  // y los pase a un estado: products
  useEffect(() => {
    const getData = async () => {
      const dataResult = await productsList();

      // pasar al estado los productos
      // por default es un array vacío
      setProducts(dataResult.products || []); 

      if(dataResult.error) {
        alert(dataResult.error.message);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <p>Vista de productos</p>
      {
        products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))
      }
    </div>
  )
}