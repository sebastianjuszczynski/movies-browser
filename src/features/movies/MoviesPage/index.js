import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../BottomNavigation";
import MovieTile from "../../../common/tiles/MovieTile";
import Loading from "../../../common/Loading";
import { MoviesContainer } from "./../../../common/tiles/TileContainer";
import {
    selectList,
    selectLoading,
    setActivePath,
    selectError,
    selectTotalResults,
} from "../../listSlice";
import Header from "../../../common/Header/Header";
import { usePageParameter } from "../../pageParameters";
import apiKey from "../../../common/apiKey";
import language from "../../../common/language";
import NoResult from "./../../../common/NoResult";
import Error from "../../../common/Error";
import { WidthContainer } from "../../../styled";
import { selectGenres } from "../../../common/commonSlice";
import Types from "../../../common/tiles/Types";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const urlQuery = usePageParameter("search");
    const popularMovies = useSelector(selectList);
    const totalResults = useSelector(selectTotalResults);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const genresList = useSelector(selectGenres);
    const dispatch = useDispatch();


    useEffect(() => {
        const enabledGenres = genresList
            .filter(genre => genre.enabled && genre.id)
            .map(genre => genre.id);

        dispatch(setActivePath(urlQuery
            ? `https://api.themoviedb.org/3/search/movie${apiKey}${language}&query=${urlQuery}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`
            : genresList.map(genre => genre.enabled && genre)
                ? `https://api.themoviedb.org/3/discover/movie${apiKey}${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}&with_genres=${enabledGenres.join(",")}`
                : `https://api.themoviedb.org/3/movie/popular${apiKey}${language}&page=${urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber}`)
        );
    }, [urlPageNumber, urlQuery, dispatch, genresList]);

    return (
        <WidthContainer>
            {!urlQuery && (
                <Types
                    genre_ids={genresList.map(genre => genre.id)}
                    clickable={true}
                    big={true}
                />)}
            {isLoading ?
                <Loading /> :
                isError ?
                    <Error /> :
                    (!popularMovies.length
                        ? <NoResult
                            urlQuery={urlQuery}
                        />
                        : (
                            <>
                                <Header>
                                    {urlQuery
                                        ? `Search results for "${urlQuery}" (${totalResults})`
                                        : "Popular Movies"
                                    }
                                </Header>
                                <MoviesContainer>
                                    {popularMovies.map(({
                                        id,
                                        poster_path,
                                        title,
                                        release_date,
                                        vote_average,
                                        vote_count,
                                        genre_ids,
                                    }) =>
                                        <MovieTile
                                            key={id}
                                            id={id}
                                            poster_path={poster_path}
                                            title={title}
                                            release_date={release_date}
                                            vote_average={vote_average}
                                            vote_count={vote_count}
                                            genre_ids={genre_ids}
                                        />
                                    )}
                                </MoviesContainer>
                                <BottomNavigation />
                            </>
                        )
                    )
            }
        </WidthContainer>
    );
};

export default MoviesPage;