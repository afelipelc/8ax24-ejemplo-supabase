"use server"

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'


export async function createProduct( product ) {

  // validar los datos
  /*
   si hay errores, retornarlos
  return {
    success: false,
    message: `Ingresa los datos correctamente.`,
    errors: errorList,
  }
  */
  
  //mandar la bd
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
  .from('products')
  .insert([
    product
  ])
  .select();

  // retornar respuesta del resultado de la acción
  if(error) {
    return {
      success: false,
      message: `Ocurrió un error al guardar el producto. ${error.message}`,
      errors: null,
    }
  }

  return {
    success: true,
    message: `El producto ha sido guardado.`,
    errors: null,
  }
}
