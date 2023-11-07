import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function PictureList(props) {
  const itemData = props.data.map((item) => ({
    img: item.url,
    title: item.date,
    subtitle: item.explanation,
  }));

  return (
    <ImageList sx={{width: 500, height: 450}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.subtitle} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
