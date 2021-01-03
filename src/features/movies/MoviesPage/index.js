import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../../common/tiles/MovieTile";
import Loading from "../../../common/Loading";
import { MoviesContainer } from "./../../../common/tiles/TileContainer";
import {
    setActivePage,
    selectList,
    selectLoading,
    setActivePath,
    resetState,
} from "../../listSlice";
import Header from "../../../common/Header/Header";
import { usePageParameter } from "../../pageParameters";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularMovies = useSelector(selectList);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePath(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`));
        return () => {
            dispatch(resetState());
        };
    }, []);

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber))
    }, [urlPageNumber, urlQuery]);

    return (
        <>
            <Header>Popular movies</Header>

            {isLoading ? <Loading /> : (
                <>
                    <MoviesContainer>
                        {popularMovies.map(({ id, poster_path, title, release_date, vote_average, vote_count, genre_ids }) => <MovieTile 
                            key={id}
                            id={id}
                            poster_path={poster_path}
                            title={title}
                            release_date={release_date}
                            vote_average={vote_average}
                            vote_count={vote_count}
                            genre_ids={genre_ids}>
                        </MovieTile>
                        )}

                    </MoviesContainer>
                    <BottomNavigation />
                </>
            )
            }
        </>
    );
};

export default MoviesPage;