import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { LinkWrapper } from 'components/LinkWrapper';
import * as S from './styles';

export function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Back to home" />
      </LinkWrapper>

      <S.Heading>World Trips</S.Heading>

      <S.Body>
        <p>
          Viagens que pretendo realizar com família, amigos, colegas, durante
          minha vida. Alguns lugares por curiosidade, outros por diversão, as
          vezes ambos.
        </p>

        <a href="https://github.com/SkyG0D">Meu Github</a>
      </S.Body>
    </S.Content>
  );
}
