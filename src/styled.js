import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as InputIcon } from "./assets/input-logo.svg";


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
`;
export const NavContainerRight = styled(NavContainer)`
    justify-content: flex-end;
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
    color: ${({ theme }) => theme.colors.white};
    padding: 13px 24px;
    margin: 0 10px;

    &.${activeClassName} {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 33px;
    }
`;
export const Title = styled.p`
    display: flex;
    margin: 0;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
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
`;
export const InputBox = styled.div`
  position: relative;
`;
export const StyledInputIcon = styled(InputIcon)`
  position: absolute;
  left: 27px;
  top: 14px;
`;

