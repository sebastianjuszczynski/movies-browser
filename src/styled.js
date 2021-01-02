import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as InputIcon } from "./assets/input-logo.svg";
import { ReactComponent as TitleLogo } from "./assets/camera-logo.svg";


const activeClassName = "link-active";

export const Nav = styled.nav`
    min-height: 94px;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
`;
export const WidthContainer = styled.div`
    max-width: 1368px;
    min-height: 100%;
    margin: 0 auto;
`;
export const NavContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    justify-content: space-between;
    align-items: center;
    min-height: inherit;
    padding: 0 10px;
    flex-wrap: wrap;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 71px;
  }
`;

export const NavContainerLeft = styled(NavContainer)`
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    flex-basis: 80vw;
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: space-around;
  }
`;

export const NavContainerRight = styled(NavContainer)`
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    justify-content: center;
  }
`;
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
`;
export const ListItem = styled.li`
    text-decoration: none;
`;
export const StyledNavLink = styled(NavLink).attrs(() =>
({
  activeClassName,
}))`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    padding: 13px 24px;
    margin: 0 10px;

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 33px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 13px;
    padding: 11px 18px;
    margin: 0 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 12px;
    padding: 8px 12px;
    margin: 0 3px;
  }
`;
export const Title = styled.p`
    display: flex;
    margin: 0;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    
    @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    padding: 10;
    margin-right: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 13px;
    padding: 0;
    margin-right: 19px;
  }
`;
export const Input = styled.input`
    width: 432px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.cornsilk};
    border-radius: 33px;
    padding-left: 64px;
    background-color: ${({ theme }) => theme.colors.white};
    &:focus {
        outline: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 288px;
    height: 44px;
    padding-left: 40px;
  }
`;
export const InputBox = styled.div`
  position: relative;
`;
export const StyledInputIcon = styled(InputIcon)`
  position: absolute;
  left: 27px;
  top: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 14px;
    left: 16px;
    top: 15px;
  }
`;

export const StyledTitleLogo = styled(TitleLogo)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 12px;
  }
`;

