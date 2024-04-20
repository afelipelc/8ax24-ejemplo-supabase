"use client"

import { useEffect, useState } from "react";
import { getProductById } from "../../actions";

export default function EditProduct({ params }) {
  // estado para el producto
  const [product, setProduct] = useState(null);

  // al cargar la vista, mandar a leer los datos
  // del producto por ID, desde una acción de servidor
  useEffect(() => {
    const getData = async () => {
      // llamar a la acción
      const productResult = await getProductById(params.id);

      setProduct(productResult.product);
      
      if(productResult.error) {
        alert(productResult.error.message);
      }
    };
    getData();
  }, []);

  return(
    <div>
      <p>aquí va el formulario para editar</p>
      <p>ID: {params.id}</p>
      <input 
        // mostrar el nombre del producto, 
        // o vacío si no hay valor
        value={product?.name || ''}
        className="text-black border border-blue"
      />
    </div>
  );
}