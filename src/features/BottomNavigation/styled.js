import styled from "styled-components";
import { ReactComponent as leftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as rightArrow } from "../../assets/rightArrow.svg";

export const DesktopContainer = styled.div`
    width: fit-content;
    margin: 40px auto 0;
    
    @media  (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px)  {
    display: none;
  }
`;
export const MobileContainer = styled(DesktopContainer)`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 32px auto 0;
  }
`;
export const Button = styled.button`
    margin: 0 6px;
    padding: 8px 16px 8px 16px;
    background: ${({ theme }) => theme.colors.activeNavButton};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    cursor: pointer;
    transition: filter 0.4s;

    &:disabled {
      background: ${({ theme }) => theme.colors.disabledNavButton};
      cursor: no-drop;
      transform: unset;
      transition: unset;
      filter: brightness(75%);
    }
    &:hover {
      filter: brightness(90%);
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    display: flex;
    padding: 8px 12px;
    margin: 0 4px;
  }
`;
export const PageCounter = styled.span`
    margin: 0 24px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.subtitle};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size:10px;	    
      margin: 0 8px;	    
    }	  
`;

export const Number = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
  }
`;

export const StyledArrowLeft = styled(leftArrow)`
  margin: 0 4px 0 0;
  height: 11px;
  width: 7px;
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin: 0 2px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 8px;
    width: 5px;
  }
`;

export const StyledArrowRight = styled(rightArrow)`
  height: 11px;
  width:7px;
  margin: 0 0 0 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin: 0;
  }
`;

export const DoubleArrow = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
  }
`;
export const SingleArrow = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    height: 8px;
  }
`;