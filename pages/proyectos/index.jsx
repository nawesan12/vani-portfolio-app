import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'

export default function Proyectos() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Proyectos</title>
        </Head>
        <AppLayout>    
            Proyectos
            <Link href="/"><a>Volver</a></Link>
        </AppLayout>
        </>
    );
}