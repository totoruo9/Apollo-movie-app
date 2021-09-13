import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Container = styled.div`
    display:grid;
    position:absolute;
    top:500px;
    z-index: 1;
    width: 100%;
    background: #fff;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    padding: 40px 100px;
    box-sizing: border-box;
`;

const Loading = styled.div`
    position: absolute;
    top: 500px;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #1c1c1c;
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding-top: 100px;
    box-sizing: border-box;
`;

const Movies = ({data, loading}) => {
    return(
        loading
            ? <Loading>Loading...</Loading>
            : data && data.movies && (
                <Container>
                    <Movie data={data}/>
                </Container>
            )
    )
}

export default Movies;
