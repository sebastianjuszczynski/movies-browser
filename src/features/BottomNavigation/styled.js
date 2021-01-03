import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

export const DesktopContainer = styled.div`
    width: fit-content;
    margin: 40px auto 100px;
    
    @media  (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px)  {
    display: none;
  }
`;
export const MobileContainer = styled(DesktopContainer)`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: unset;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const Button = styled.button`
    margin: 0 12px;
    padding: 8px 16px 8px 16px;
    background: ${({ theme }) => theme.colors.pattensBlue};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.mineShaft};
    border: none;
    cursor: pointer;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.cornsilk};
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    padding: 8px 12px;
    margin: 0 4px;
  }
`;
export const PageCounter = styled.span`
    margin: 0 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.waterloo};
`;

export const Number = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({theme}) => theme.colors.woodsmoke};

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    font-size: 10px;
  }
`;

export const StyledArrowLeft = styled(ArrowLeft)`
  margin-right: 8px;
  height: 11px;
  width: 7px;
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    margin: 0 2px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height: 8px;
    width: 5px;
  }
`;

export const StyledArrowRight = styled(ArrowRight)`
  height: 11px;
  width:7px;
  margin-left: 8px;
  @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    margin: 0 2px;
  }
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    height:8px;
    width: 5px;
  }
`;

export const DoubleArrow = styled.div`
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    display: flex;
  }
`; 