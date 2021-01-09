import styled from "styled-components";

export const MoviesContainer = styled.div`
    display: grid;
    max-width: 1368px;
    margin: 24px auto 40px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-gap: 24px;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
      grid-template-columns: unset;
      grid-gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 16px;
    grid-template-columns: unset;
  }
`;
export const PeopleContainer = styled(MoviesContainer)`
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, 248px);
  
    @media (max-width: ${({theme}) => theme.breakpoints.screenSmall}px) {
      grid-gap: 24px;
      grid-template-columns: repeat(auto-fill, 208px);
    }
    @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, 173px);
    }
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, 136px);
    }
`;
