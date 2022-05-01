import { render, screen } from '@testing-library/react';

import Map from '.';

describe('<Map />', () => {
  test('should render wihout any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });

  test('should render with the marker in correct place', () => {
    const place: PlaceType = {
      id: '1',
      name: 'Garanhuns',
      slug: 'garanhuns',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    const placeTwo: PlaceType = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 120,
        longitude: -50,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    expect(screen.getByTitle(/garanhuns/i)).toBeInTheDocument();
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument();
  });
});
