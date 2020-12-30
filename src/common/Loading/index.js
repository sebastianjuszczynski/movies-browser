import React from "react";
import loadingCircle from "./../../assets/loadingCircle.svg";
import { Image, LoadingContainer } from "./styled";

const Loading = () => {
    return (
        <LoadingContainer>
            <Image src={loadingCircle} />
        </LoadingContainer>
    );
};
export default Loading;