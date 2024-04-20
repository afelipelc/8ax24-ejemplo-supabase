// generar un slider de tarjetas

import Slider from "../../components/Slider";

export default function SliderPage() {

  const products = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
    { id: 4, name: "Producto 4" },
    { id: 5, name: "Producto 5" },
    { id: 6, name: "Producto 6" },
  ];

  // función que genera una tarjeta de producto
  const productCard = (product) => (
    <div 
      key={product.id} 
      className={`w-[150px] h-[200px] bg-slate-200 p-2 
        border border-1 rounded rounded-lg`}
    >
      <p>{product.name}</p>
    </div>
  );

  const productCard2 = (product) => (
    <div 
      key={product.id} 
      className={`w-[200px] h-[250px] bg-slate-400 p-2 
        border border-1 rounded rounded-lg`}
    >
      <p className="text-xl font-bold">{product.name}</p>
    </div>
  )

  return(
    <div className="p-2 w-full">
      <h1 className="text-xl font-bold mb-8">Slider de tarjetas</h1>

      <Slider
        height={200}
        cardWidth={150}
        items={products.map((product) => productCard(product))}
      />

      <Slider
        height={200}
        cardWidth={150}
        items={products.map((product) => productCard(product))}
        className="my-6 mx-4"
      />

      <Slider
        height={250}
        cardWidth={200}
        items={products.map((product) => productCard2(product))}
      />

      <Slider
        height={200}
        cardWidth={150}
        items={products.map((product) => productCard(product))}
        className="my-6 mx-4"
      />

    </div>
  )
}