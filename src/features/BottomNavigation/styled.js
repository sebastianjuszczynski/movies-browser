import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    margin: 40px auto 100px;
`;
export const Button = styled.button`
    margin: 0 12px;
    padding: 8px 16px 8px 16px;
    background: ${({theme}) => theme.colors.pattensBlue};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.mineShaft};
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: ${({theme}) => theme.colors.cornsilk};
    }
`;
export const PageCounter = styled.div`
    margin: 0 24px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => theme.colors.waterloo};
`;
export const Number = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({theme}) => theme.colors.woodsmoke};
`;