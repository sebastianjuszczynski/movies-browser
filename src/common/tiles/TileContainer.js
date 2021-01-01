import styled from "styled-components";

export const MoviesContainer = styled.div`
    display: grid;
    max-width: 1368px;
    margin: 24px auto 40px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-gap: 24px;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    width: 100%;
    grid-gap: 16px;
  }
`;
export const PeopleContainer = styled(MoviesContainer)`
    grid-template-columns: repeat(auto-fill, 208px);
`;
