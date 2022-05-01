import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from 'styles/themes/light';

import { FallbackLoading } from '.';

function renderComponent(children: JSX.Element) {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
}

describe('<FallbackLoading />', () => {
  test('should render with a message', () => {
    renderComponent(<FallbackLoading message="Some fetch" />);

    screen.logTestingPlaygroundURL();

    expect(screen.getByText(/some fetch/i)).toBeInTheDocument();
  });
});
