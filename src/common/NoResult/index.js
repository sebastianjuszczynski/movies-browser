import React from "react";
import Header from "../Header/Header";
import { StyledPaperPlane, ImageBox } from "./styled";

const noResult = ({ urlQuery }) => {
    return (
        <>
            <Header>Sorry, there are no results for
        {urlQuery ? ` "${urlQuery}".` : " your search."}
            </Header>
            <ImageBox>
                <StyledPaperPlane />
            </ImageBox>
        </>

    );
};

export default noResult;