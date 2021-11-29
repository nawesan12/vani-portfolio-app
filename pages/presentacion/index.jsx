import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'
import PresentationHero from '../../components/PresentationHero/PresentationHero'

export default function Presentacion() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Presentacion</title>
        </Head>
        <AppLayout>
            <PresentationHero/>
        </AppLayout>
        </>
    );
}