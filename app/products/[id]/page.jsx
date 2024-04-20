"use client"

import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import { getProductById } from "../actions"

import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  
  // campo gallery: tipo JSONB

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

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

  return (
    <div>
      <p>Información del producto</p>
      <b>{product?.name}</b>

      {product?.gallery ? (
        <ImageGallery items={product.gallery} />
      ) : null }
    </div>
  );
}