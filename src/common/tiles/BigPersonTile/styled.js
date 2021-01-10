import styled from "styled-components";
import { Image } from "./../tilesStyles";

export const BigTileImage = styled(Image)`
    width: 399px;
    height: 564px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      max-height: 163px;
      max-width: 116px;
   }
`;