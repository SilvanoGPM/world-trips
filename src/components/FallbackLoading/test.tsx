import { screen } from '@testing-library/react';

import { renderComponentWithTheme } from 'utils/renderComponentTheme';

import { FallbackLoading } from '.';

describe('<FallbackLoading />', () => {
  test('should render with a message', () => {
    renderComponentWithTheme(<FallbackLoading message="Some fetch" />);

    screen.logTestingPlaygroundURL();

    expect(screen.getByText(/some fetch/i)).toBeInTheDocument();
  });
});
