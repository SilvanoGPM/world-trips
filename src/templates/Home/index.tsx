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
        openGraph={{
          title: 'World Trips',
          description: 'Projeto para mostrar viagens pelo mundo.',
          site_name: 'World Trips',
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  );
}
