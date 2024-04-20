// componente slider
// debe recibir
// - altura
// - ancho de las tarjetas
// - arreglo de tarjetas

export default function Slider({
  items,
  height,
  cardWidth,
  className,
}) {

  // item representa la tarjeta a incluir en el slider
  const itemCard = (item, index) => (
    <div 
      key={index} 
      className={`absolute`}
      style={{
        width: `${cardWidth}px`, 
        height: `${height}px`,  
        left: `${ index * (cardWidth + 10) }px`,
      }}
    >
      {item}
    </div>
  )

  return (
    <div 
      className={`overflow-x-auto relative w-full ${className}`}
      style={{ height: `${height}px` }}
    >
      {items?.map((item, index) => itemCard(
        item, index
      ))}
    </div>
  );
}