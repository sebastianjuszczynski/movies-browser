import styled from "styled-components";
import { Image } from "./../tilesStyles";

export const BigMovieImage = styled(Image)`
  float: left;
  object-fit: cover;
  width: 312px;
  height: 464px;
  margin: 0 40px 16px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.screenSmall}px) {
    margin: 0 25px 6px 0;
    float: unset;
    height: 316px;
    width: unset;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 169px;
    margin: 0 16px 0 0;
  }
`;