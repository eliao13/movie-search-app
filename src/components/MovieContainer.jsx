import React from "react";
import Movie from "./Movie";
import { ImageList, ImageListItem, ListSubheader } from "@mui/material";

export default function MovieContainer({
  movieData,
  previosSearchValue,
  loading,
}) {
  const { Search } = movieData || {};
  let cols = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 5;

  return (
    <section className="movie-container">
      <ImageList sx={{}} cols={cols}>
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <Movie key={index} loading={loading} />
          ))
        ) : (
          <>
            <ImageListItem key="Subheader" cols={cols}>
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
