import React, { useEffect, useState } from "react";
import {gql, useQuery} from "@apollo/client";
import styled from "styled-components";
import Movies from "../components/Movies";



const Container = styled.div`
    font-size: 14px;
    color: #767676;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    background: #ff4a5b;
    position: fixed;
    z-index:0;
    top:0;

    h1 {
        font-size: 48px;
        color: #fff;
    }
`;



const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
            title
            summary
            rating
        }
    }
`;





const Home = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    
    return (
        <Container>
            <Header>
                <h1>Apollo Movie App</h1>
            </Header>
            <Movies data={data} loading={loading} />
        </Container>
    )
};

export default Home;