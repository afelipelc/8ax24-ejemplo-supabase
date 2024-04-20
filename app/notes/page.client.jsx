'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Page() {
  const [notes, setNotes] = useState(null)
  const supabase = createClient();
  const router = useRouter();

  // estado para guardar el criterio de búsqueda
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      // verificar si tiene sesión iniciada
      const { data: { session }} = await supabase.auth.getSession();
      
      // si no hay sesión
      if(!session) {
        // redireccionarlo al login
        router.push('/login');
      }

      const { data, error } = await supabase.from('notes').select()
      setNotes(data);
    }
    getData()
  }, [])

  function handleSubmit(e) {
    // evitar enviar el formulario
    e.preventDefault();

    // ir a buscar
    const getData = async () => {
      const { data } = await supabase
        .from('notes')
        .select()
        .like('note', `%${search}%`); // %some%
      
      setNotes(data);
    }
    getData()
  }

  return (
    <div className='py-6'>
      <h1 className='font-bold text-center text-lg'>Notas</h1>

      <form 
        className='text-center mt-3'
        onSubmit={handleSubmit}
      >
        <input
          placeholder='Buscar...'
          className='border rounded px-2'
          defaultValue={search}
          onChange={(e) => {
            setSearch(
              e.target.value 
              // el valor del input lo enviamos al estado search
            );
          }}
        />
        <button 
          type='submit'
          className='rounded-md bg-sky-400 px-3 ml-3'
        >Buscar
        </button>
      </form>

      <ul className='mt-4 py-4'>
        {notes?.map((note) => (
          <li 
            key={note.id}
            className='border rounded-lg p-2 mb-3'
          >{note.note}</li>
        ))}
      </ul>
    </div>
  );
}