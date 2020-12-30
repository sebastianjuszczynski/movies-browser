import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    height: 94px;
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
`;
export const WidthContainer = styled.div`
    max-width: 1368px;
    height: 100%;
    margin: 0 auto;
`;
export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
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
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`;
export const Title = styled.p`
    display: flex;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    font-size: 24px;
`;

