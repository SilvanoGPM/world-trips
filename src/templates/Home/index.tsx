import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import { LinkWrapper } from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), {
  ssr: false,
});

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="World Trips"
        description="Projeto para mostrar viagens pelo mundo."
        canonical="https://world-trips.vercel.app/"
        openGraph={{
          url: 'https://world-trips.vercel.app/',
          title: 'World Trips',
          description: 'Projeto para mostrar viagens pelo mundo.',
          site_name: 'World Trips',
          images: [
            {
              url: 'https://world-trips.vercel.app/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'World Trips',
            },
          ],
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  );
}
