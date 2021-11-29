import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'

export default function Contacto() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Contacto</title>
        </Head>
        <AppLayout>
            Contacto
            <Link href="/"><a>Volver</a></Link>
        </AppLayout>
        </>
    );
}