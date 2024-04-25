import React from "react";
import Movie from "./Movie";
import "./MovieContainer.css";
import {
  ImageList,
  ImageListItem,
  ListSubheader,
  Skeleton,
} from "@mui/material";

export default function MovieContainer({
  movieData,
  previosSearchValue,
  loading,
}) {
  const { Search } = movieData || {};

  return (
    <section className="movie-container">
      <ImageList sx={{}} cols={5}>
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Movie key={index} loading={loading} />
          ))
        ) : (
          <>
            <ImageListItem key="Subheader" cols={5}>
              <ListSubheader component="div" sx={{ padding: 0 }}>
                Search results for "{previosSearchValue}"
              </ListSubheader>
            </ImageListItem>
            {Search?.map((movie) => {
              return <Movie key={movie.imdbID} movie={movie} />;
            })}
          </>
        )}
      </ImageList>
    </section>
  );
}
