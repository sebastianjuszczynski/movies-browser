import styled from "styled-components";

export const MovieContainer = styled.div`
    display: grid;
    max-width: 1368px;
    margin: 24px auto 40px;
    grid-template-columns: repeat(auto-fill, 320px);
    grid-gap: 24px;
    justify-content: center;
`;
export const PeopleContainer = styled(MovieContainer)`
    grid-template-columns: repeat(6, 1fr);
`;