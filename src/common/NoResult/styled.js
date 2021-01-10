import styled from "styled-components";
import {ReactComponent as paperPlane} from "../../assets/noResultImage.svg";

export const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;
export const StyledPaperPlane = styled(paperPlane)`
    text-align: center;
    max-height: 40vh;
  
    @media (max-width: ${({theme}) => theme.breakpoints.bigMobile}px) {
        padding: 50px;
  }
`;