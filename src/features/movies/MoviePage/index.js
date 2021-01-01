import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import { selectLoading, selectMovieData, setMovie } from ".movieSlice";

const MoviePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieData = useSelector();
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(setMovie(id));
    }, [id]);

    return (
        <>
        {loadinn ? <Loading /> : <>
            <div>{movieData.title}</div>
            <div>tile</div>    
            <div>cast</div>    
            <div>crew</div>    
            </>
        }
        </>
    );
};

export default MoviePage;