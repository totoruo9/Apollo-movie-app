import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    
`;
const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8px;
    box-sizing: border-box;

    h2 {
        font-size: 16px;
        color: #333;
        margin-bottom: 4px;
    }
    
`;

const Movie = ({data}) => {
    return(
        data.movies.map(movie => (
                <Container key={movie.id}>
                    <Link to={`/${movie.id}`}>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                        <Info>
                            <h2>{movie.title}</h2>
                            <p>{movie.summary.substring(0,120)}...</p>
                            <p>⭐{movie.rating} / 10</p>
                        </Info>
                    </Link>
                </Container>
            )
        )
    )
}

export default Movie;