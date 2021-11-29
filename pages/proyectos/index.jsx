import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../../components/AppLayout/AppLayout'
import Projects from '../../components/Projects/Projects'

export default function Proyectos() {
    return (
        <>
        <Head>
            <title>Vanina Gonzalez - Proyectos</title>
        </Head>
        <AppLayout>    
            <Projects/>
        </AppLayout>
        </>
    );
}