"use server"

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

// implementar acción para leer la lista de productos
// debe retornar { products: [], error: objeto }

export async function productsList() {
  // crear la instancia de supabase
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
  .from('products')
  .select();

  return {
    products: data,
    error,
  }
}

export async function searchProducts(search) {
  // crear la instancia de supabase
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
        .from('notes')
        .select()
        .like('title', `%${search}%`); // %some%

  return {
    products: data,
    error,
  }
}

export async function getProductById(id) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
  .from('products')
  .select()
  .eq("id", id)
  .single();

  return {
    product: data,
    error,
  };
}

export async function updateProduct(product) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // guardar los cambios en los datos del producto
  const { data, error } = await supabase
  .from('products')
  .update({
    ...product
  })
  .single();

  return {
    product: data,
    error
  }
}
