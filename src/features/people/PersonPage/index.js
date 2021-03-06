import React, { useEffect, useState } from "react";
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
import Button from "../../../common/Button.js";
import { WidthContainer } from "../../../styled";

const PersonPage = () => {
    const displayedItemsNumber = 8;
    const { id } = useParams();
    const dispatch = useDispatch();
    const personData = useSelector(selectItemData);
    const castCrewData = useSelector(selectExtraData);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const [castDisplayed, setCastDisplayed] = useState(displayedItemsNumber);
    const [crewDisplayed, setCrewDisplayed] = useState(displayedItemsNumber);

    useEffect(() => {
        dispatch(setActivePath({
            path1: `https://api.themoviedb.org/3/person/${id}${apiKey}${language}`,
            path2: `https://api.themoviedb.org/3/person/${id}/movie_credits${apiKey}${language}`,
        }));
        dispatch(setItemId(id));
    }, [id, dispatch])

    return (
        <WidthContainer>
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
                        {castCrewData.cast && castCrewData.cast.length > 0 &&
                            <>
                                <Header as="h2">
                                    Cast {`(${castCrewData.cast.length})`}
                                </Header>
                                <MoviesContainer>
                                    {castCrewData.cast
                                        .slice(0, castDisplayed)
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
                                {castCrewData.cast.length > castDisplayed &&
                                    <Button as="button" onClick={() => { setCastDisplayed(castCrewData.cast.length) }}>Show All</Button>
                                }
                                {(castCrewData.cast.length > displayedItemsNumber && castCrewData.cast.length === castDisplayed) &&
                                    <Button as="button" onClick={() => { setCastDisplayed(displayedItemsNumber) }}>Hide</Button>
                                }
                            </>
                        }
                        {castCrewData.crew && castCrewData.crew.length > 0 &&
                            <>
                                <Header as="h2">
                                    Crew {`(${castCrewData.crew.length})`}
                                </Header>
                                <MoviesContainer>
                                    {castCrewData.crew
                                        .slice(0, crewDisplayed)
                                        .map(({
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
                                {castCrewData.crew.length > crewDisplayed &&
                                    <Button as="button" onClick={() => { setCrewDisplayed(castCrewData.crew.length) }}>Show All</Button>
                                }
                                {(castCrewData.crew.length > displayedItemsNumber && castCrewData.crew.length === crewDisplayed) &&
                                    <Button as="button" onClick={() => { setCrewDisplayed(displayedItemsNumber) }}>Hide</Button>
                                }
                            </>
                        }
                    </>
            }
        </WidthContainer>
    )
};

export default PersonPage;