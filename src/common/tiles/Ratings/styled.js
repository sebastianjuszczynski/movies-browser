import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    margin-top: 24px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
      margin-top: 8px;
  }
`;
export const Star = styled.img`
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;
export const Rate = styled.span`
    margin: 0 12px;
    font-weight: 600;
    font-size: ${({ big }) => big ? "22px" : "16px"};

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    margin: 0 7px;
  }
`;
export const Votes = styled.span`
    white-space: nowrap;
    font-size: 16px;
    color: ${({ theme, big }) => big ? theme.unchangeableColors.black : theme.colors.subtitle};    font-weight: normal;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 12px;
  }
`;