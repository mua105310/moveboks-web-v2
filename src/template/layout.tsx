import { MetaModel } from "@/models/event";
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
    data: MetaModel;
    children: ReactNode;
}

export default function Layout({ data, children }: LayoutProps) {
    return (
        <html lang="en">
            <div>
                <Head>
                    <title>{data.title}</title>
                    <meta name="description" content={data.description} />
                    <meta name="keywords" content={data.keywords} />
                </Head>
                <main>{children}</main>
            </div>
        </html>
    );
}
