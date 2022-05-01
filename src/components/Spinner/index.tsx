import { Spinner3 as IconSpinner } from '@styled-icons/evil/Spinner3';

import * as S from './styles';

type SpinnerProps = {
  size?: number;
  color?: string;
};

export function Spinner({ size = 16, color = '#ffffff' }: SpinnerProps) {
  return (
    <S.Wrapper style={{ width: size, height: size }}>
      <IconSpinner size={size} color={color} />
    </S.Wrapper>
  );
}
