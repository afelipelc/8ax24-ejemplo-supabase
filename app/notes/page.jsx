
import PageClient from './page.client';

export const metadata = {
  title: `Mis notas - ${process.env.APP_NAME}`,
  description: "Mis notas registradas.",
};

export default function Page() {

  return <PageClient />
}
