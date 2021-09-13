import React from "react";
import { useParams } from "react-router-dom";
import {gql, useMutation} from "@apollo/client";

const GET_MOVIES = gql`
    mutation getMovie($id: Int!){
        getMovie(id: $id){
            id
            medium_cover_image
            title
            summary
            rating
        }
    }
`;

const Detail = () => {
    const {id} = useParams()
    const [getMovie, { data, loading, error }] = useMutation(GET_MOVIES);
    getMovie({variables: {id: +id}});

    return(
        loading ? "loading..." : data?.getMovie[0].title
    );
};

export default Detail;