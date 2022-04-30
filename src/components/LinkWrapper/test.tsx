import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { lightTheme } from 'styles/themes/light';

import { LinkWrapper } from '.';

function renderComponent(children: JSX.Element) {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
}

describe('<Test />', () => {
  test('should render link and children', () => {
    renderComponent(<LinkWrapper href="/my-link">Anything</LinkWrapper>);

    const children = screen.getByRole('link', { name: /anything/i });

    expect(children).toBeInTheDocument();
    expect(children).toHaveAttribute('href', '/my-link');
  });
});
