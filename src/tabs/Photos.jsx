import { getPhotos } from 'apiService/photos';
// import { Text } from 'components';

import { Form } from 'components/index';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    getPhotos(query, page)
      .then(({ photos, total_results }) => {
        setImages(photos);
        setTotal(total_results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoader(false));
  }, [query, page]);

  const handleSubmit = value => {
    setQuery(value);
  };

  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSubmit={handleSubmit} />
    </>
  );
};
