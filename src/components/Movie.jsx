import React from "react";
import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

export default function Movie({ movie, loading }) {
  const { Poster, Title, Year } = movie || {};
  return (
    <ImageListItem key={Poster}>
      {loading ? (
        <Skeleton variant="rectangle" animation="wave" height={400} />
      ) : (
        <img
          srcSet={`${Poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${Poster}?w=248&fit=crop&auto=format`}
          alt={Title}
        />
      )}
      <ImageListItemBar
        sx={
          loading
            ? { background: "rgba(0, 0, 0, 0.5)" }
            : { background: "rgba(0, 0, 0, 0.8)" }
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" />
          ) : (
            Title
          )
        }
        subtitle={
          loading ? <Skeleton animation="wave" height={10} width="40%" /> : Year
        }
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${Title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
