import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
`;
export const Star = styled.img`
    width: 24px;
    height: 22.87px;
`;
export const Rate = styled.span`
    margin: 0 12px;
    font-weight: 600;
    font-size: 16px;
`;
export const Votes = styled.span`
    font-size: 16px;
    color: ${({theme}) => theme.colors.waterloo};
`;