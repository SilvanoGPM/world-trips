import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from 'styles/themes/light';

export function renderComponentWithTheme(children: JSX.Element) {
  return render(<ThemeProvider theme={lightTheme}>{children}</ThemeProvider>);
}
