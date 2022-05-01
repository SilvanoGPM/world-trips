import { screen } from '@testing-library/react';
import { renderComponentWithTheme } from 'utils/renderComponentTheme';

import { LinkWrapper } from '.';

describe('<Test />', () => {
  test('should render link and children', () => {
    renderComponentWithTheme(
      <LinkWrapper href="/my-link">Anything</LinkWrapper>,
    );

    const children = screen.getByRole('link', { name: /anything/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
