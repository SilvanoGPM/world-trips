import Image from 'next/image';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { NextSeo } from 'next-seo';

import { LinkWrapper } from 'components/LinkWrapper';
import * as S from './styles';

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    gallery: Array<{ url: string; width: number; height: number }>;
    description?: {
      html: string;
      text: string;
    };
  };
};

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${place.name} - World Trips`}
        description={place.description?.text}
        canonical="https://world-trips.vercel.app/"
        openGraph={{
          url: 'https://world-trips.vercel.app/',
          title: `${place.name} - World Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name,
            },
          ],
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Back to home" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map(({ url }) => (
              <Image
                key={url}
                src={url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
