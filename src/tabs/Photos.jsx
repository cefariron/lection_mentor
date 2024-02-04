import { getPhotos } from 'apiService/photos';
// import { Text } from 'components';

import { Button, Form, Loader, PhotosGallery, Text } from 'components/index';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoader(true);

    getPhotos(query, page)
      .then(({ photos, total_results }) => {
        setImages(prev => [...prev, ...photos]);
        setTotal(total_results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoader(false));
  }, [query, page]);

  const handleSubmit = value => {
    setQuery(value);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };

  const onLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  console.log('finish', loader);

  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSubmit={handleSubmit} />
      {loader && <Loader color={'#ffffff'} loading={loader} />}
      {!images.length && query !== '' && !error && (
        <Text textAlign="center">
          Images with {query} request didnt find 🔎
        </Text>
      )}
      {error && (
        <Text textAlign="center">
          Oops! Something went wrong! Error {error} 🔎
        </Text>
      )}

      <PhotosGallery items={images} />
      {images.length > 0 && images.length !== total && (
        <Button onClick={onLoadMoreClick} disabled={loader}>
          Load more
        </Button>
      )}
    </>
  );
};
