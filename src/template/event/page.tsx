import { EventModel } from '@/models/event';
import '../../app/globals.css'
import HeroSection from './components/heroSection';
import PackageSelector from './components/packageSelector';
import Layout from './components/layout';
import Section from '@/components/section/section';
import ProductSelector from './components/productSelector';

export default function EventPage({event}: {event: EventModel}) {

    return ( 
        <>
            <HeroSection event={event} />
            <Layout>
                <Section title={event.title}>
                    <PackageSelector packagesIds={event.packagesID} />
                </Section>
                <Section title="Vælg produkt">
                    <ProductSelector />
                </Section>
            </Layout>
        </>
    );
}