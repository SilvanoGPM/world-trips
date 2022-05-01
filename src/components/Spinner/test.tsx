import { render } from '@testing-library/react';

import { Spinner } from '.';

describe('<Spinner />', () => {
  test('should be render an icon', () => {
    const { container } = render(<Spinner />);

    const icon = container.querySelector('svg');

    expect(icon).toBeInTheDocument();
  });
});
