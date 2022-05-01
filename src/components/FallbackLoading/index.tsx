import { Spinner } from 'components/Spinner';
import * as S from './styles';

type FallbackLoadingProps = {
  message?: string;
};

export function FallbackLoading({
  message = 'Loading...',
}: FallbackLoadingProps) {
  return (
    <S.Container>
      <Spinner size={32} color="#e20e8d" />
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
