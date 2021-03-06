import styled from "styled-components";
import { Image } from "./../tilesStyles";

export const BigPersonImage = styled(Image)`
  float: left;
  object-fit: cover;
  height: 564px;
  margin-right: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.screenSmall}px) {
    height: 439px;
    margin-right: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 300px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 163px;
    margin-right: 16px;
  }
`;