import React from "react";
import Header from "../Header/Header";
import { StyledPaperPlane, ImageBox } from "./styled";

const noResult = ({ urlQuery }) => {
    return (
        <>
            <Header>Sorry, there are no results for {urlQuery}</Header>
            <ImageBox>
                <StyledPaperPlane />
            </ImageBox>
        </>

    );
};

export default noResult;