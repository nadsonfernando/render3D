import * as S from './index.styles';

interface SectionProps {
  title: string;
  description: string;
}

export function Section({ title, description }: SectionProps) {
  return (
    <S.Wrapper>
      <S.Title color="textPrimary" variation="lg-b">
        {title}
      </S.Title>

      <S.Description color="textSecondary" variation="sm-r">
        {description}
      </S.Description>
    </S.Wrapper>
  );
}
