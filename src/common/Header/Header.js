import styled from "styled-components";

const Header = styled.h1`
    margin: 56px 0 24px 0;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({theme}) => theme.colors.woodsmoke};    
`;

export default Header;