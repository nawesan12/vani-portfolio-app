import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'

export default function Presentacion() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Presentacion</title>
        </Head>
        <AppLayout>
            Presentacion
            <Link href="/"><a>Volver</a></Link>
        </AppLayout>
        </>
    );
}