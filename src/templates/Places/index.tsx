import Image from 'next/image';

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    gallery: Array<{ url: string; width: number; height: number }>;
    description: {
      html: string;
    };
  };
};

export function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map(({ url }) => (
        <Image key={url} src={url} alt={place.name} />
      ))}
    </>
  );
}
