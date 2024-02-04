import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ items }) => {
  return (
    <Grid>
      {items.map(({ id, avg_color, alt, src: { large } }) => (
        <PhotosGalleryItem
          key={id}
          avg_color={avg_color}
          alt={alt}
          src={large}
        />
      ))}
    </Grid>
  );
};
