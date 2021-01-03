import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../../common/Loading";
import BigPersonTile from "../../../common/tiles/BigPersonTile";
import MovieTile from "../../../common/tiles/MovieTile";
import Header from "./../../../common/Header/Header";
import { MoviesContainer } from "../../../common/tiles/TileContainer"
import {
    setActivePath,
    selectLoading,
    selectItemData,
    setItemId,
    selectExtraData,
    selectError,
} from "../../itemSlice";
import language from "./../../../common/language";
import apiKey from "./../../../common/apiKey";
import Error from "../../../common/Error";

const PersonPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const personData = useSelector(selectItemData);
    const castCrewData = useSelector(selectExtraData);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(setActivePath({
            path1: `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=${language}`,
            path2: `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=${language}`,
        }));
        dispatch(setItemId(id));
    }, [id])

    return (
        <>
            {isLoading 
            ? <Loading />
                : isError
                    ? <Error />
                    :
                <>
                    <BigPersonTile
                        profile_path={personData.profile_path}
                        name={personData.name}
                        birthday={personData.birthday}
                        place_of_birth={personData.place_of_birth}
                        biography={personData.biography}
                    />
                    <Header as="h2">Cast
                        ({castCrewData.cast
                            ? `${castCrewData.cast.length}`
                            : "0"
                        })
                    </Header>
                    <MoviesContainer>
                        {castCrewData.cast
                            .slice(0, 10)
                            .map(({
                                poster_path,
                                id,
                                title,
                                release_date,
                                vote_average,
                                vote_count,
                                character,
                                credit_id,
                                genre_ids,
                            }) => (
                                <MovieTile
                                    key={credit_id}
                                    poster_path={poster_path}
                                    id={id}
                                    title={title}
                                    release_date={release_date}
                                    vote_average={vote_average}
                                    vote_count={vote_count}
                                    role={character}
                                    genre_ids={genre_ids}
                                />
                            ))}
                    </MoviesContainer>

                    <Header as="h2">Cast
                        ({castCrewData.cast
                            ? `${castCrewData.cast.length}`
                            : "0"
                        })
                    </Header>
                    <MoviesContainer>
                        {castCrewData.crew
                            .slice(0, 10).map(({
                                poster_path,
                                id,
                                title,
                                release_date,
                                vote_average,
                                vote_count,
                                job,
                                credit_id,
                                genre_ids,
                            }) => (
                                <MovieTile
                                    key={credit_id}
                                    poster_path={poster_path}
                                    id={id}
                                    title={title}
                                    release_date={release_date}
                                    vote_average={vote_average}
                                    vote_count={vote_count}
                                    role={job}
                                    genre_ids={genre_ids}
                                />
                            ))}
                    </MoviesContainer>
                </>
            }
        </>
    )
};

export default PersonPage;