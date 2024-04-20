// generar un slider de tarjetas

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
  const productCard = (product, index) => (
    <div 
      key={product.id} 
      className={`w-[150px] h-[200px] bg-slate-200 p-2 
        border border 1 rounded rounded-lg absolute`}
      style={{ left: `${ index * 160 }px` }}
    >
      <p>{product.name}</p>
    </div>
  )

  return(
    <div className="p-2 w-full">
      <h1 className="text-xl font-bold mb-8">Slider de tarjetas</h1>

      <div className="overflow-x-auto relative h-[200px] w-full">
        {products.map((product, index) => productCard(
          product, index
        ))}
      </div>

    </div>
  )
}