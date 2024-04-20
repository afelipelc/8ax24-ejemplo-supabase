-- activar RLS sobre la tabla notes
alter table notes enable row level security;

-- política de lectura
create policy "Solo los usuarios autenticados puede leer notas"
on notes for SELECT
to authenticated
using ( true );

create policy "Solo los usuarios autenticados puede actualizar notas"
on notes for UPDATE
to authenticated
using ( true );

create policy "Solo los usuarios autenticados puede eliminar notas"
on notes for DELETE
to authenticated
using ( true );

create policy "Solo los usuarios autenticados puede crear notas"
on notes for INSERT
to authenticated
WITH CHECK ( true );
