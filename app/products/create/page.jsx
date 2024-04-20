"use client"
// implementar vista con el fomulario para registrar producto
// name, price, description

import { useState } from "react"

import { createProduct } from "./actions";

export default function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // estados de errores
  const [errors, setErrors] = useState({});

  function saveProduct(form) {
    // evitar el submit
    form.preventDefault();

    // realizar la validación
    let errorList = {};
    if (!name) { // si nombre no tiene valor
      errorList.name = "Nombre es obligatorio.";
    }

    if(!price) {
      errorList.price = "Precio es obligatorio.";
    } else if (!price.match("^[0-9]+$")) {
      // si precio no hace match (no cumple el patrón), hay error
      errorList.price = "El precio debe ser un número.";
    }

    if(!description) {
      errorList.description = "La descripción es obligatoria.";
    }

    // contar las propiedades (keys) de errorList
    if (Object.keys(errorList).length > 0) {
      // hay errores, mostrarlos al usuario
      setErrors(errorList);
      // evitar que se envíe el formulario
      return;
    }

    console.log("Ir a guardar");

    createProduct({
      name,
      price,
      description,
    })
    .then((result) => {
      // procesar el resultado
      console.log(result);
      alert(result.message);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });

  } // fin saveProduct()

  return(
    <form 
      className="flex flex-col gap-3 mt-8"
      onSubmit={saveProduct}
    >
      <div className="flex flex-col gap-1">
        <label className="text-black">Nombre</label>
        <input
          name="name"
          placeholder="Nombre del producto"
          className="text-black border border-gray-800 rounded p-2"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors({
              ...errors,
              name: '', // limpiar mensaje de error en name
            });
          }}
        />
        <p className="text-red-500">{errors.name}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-black">Precio</label>
        <input
          name="price"
          placeholder="Precio del producto"
          className="text-black border border-gray-800 rounded p-2"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            setErrors({
              ...errors,
              price: '', // limpiar mensaje de error en price
            });
          }}
        />
        <p className="text-red-500">{errors.price}</p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-black">Descripción</label>
        <input
          name="description"
          placeholder="Descripción del producto"
          className="text-black border border-gray-800 rounded p-2"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setErrors({
              ...errors,
              description: '', // limpiar mensaje de error en description
            });
          }}
        />
        <p className="text-red-500">{errors.description}</p>
      </div>

      <button
        type="submit"
        className="border rounded-lg bg-sky-600 p-2 text-lg"
      >
        Registrar producto
      </button>
    </form>
  )
}