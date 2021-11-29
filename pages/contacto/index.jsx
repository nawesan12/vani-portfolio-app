import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'
import ContactHero from '../../components/ContactHero/ContactHero'

export default function Contacto() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Contacto</title>
        </Head>
        <AppLayout>
            <ContactHero />
        </AppLayout>
        </>
    );
}