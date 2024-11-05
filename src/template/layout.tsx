import { MetaModel } from "@/models/event";
import Head from 'next/head';
import { ReactNode } from 'react';
import Html from 'next/document';

interface LayoutProps {
    data: MetaModel;
    children: ReactNode;
}

export default function Layout({ data, children }: LayoutProps) {
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords} />
            </Head>
            <main>{children}</main>
        </div>
    );
}