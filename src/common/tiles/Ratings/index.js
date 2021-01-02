import React from "react";
import { Container, Star, Rate, Votes } from "./styled";
import star from "../../../assets/star.svg";

const Ratings = ({ voteAverage, voteCount }) => {
    return (
        <>
        {voteCount ? (
            <Container>
            <Star src={star} />
            <Rate>{voteAverage}</Rate>
            <Votes>{voteCount}</Votes>
        </Container>
        ) : 
        <Votes>Not votes yes.</Votes>
        }
        </>
    );
};

export default Ratings;