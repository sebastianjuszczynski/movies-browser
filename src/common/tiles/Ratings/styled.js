import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 24px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
      margin-bottom: 0;
  }
`;
export const Star = styled.img`
    width: 24px;
    height: 22.87px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
    height: 15.25px;
  }
`;
export const Rate = styled.span`
    margin: 0 12px;
    font-weight: 600;
    font-size: ${({ big }) => big ? "22px" : "16px"};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    margin: 0 7px;
  }
`;
export const Votes = styled.span`
    font-size: 16px;
    color: ${({ theme, big }) => big ? theme.unchangeableColors.black : theme.colors.subtitle};    font-weight: normal;
    margin-right: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
  }
`;