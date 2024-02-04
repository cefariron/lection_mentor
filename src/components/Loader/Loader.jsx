import ClipLoader from 'react-spinners/ClipLoader';
import style from './Loader.module.css';

export const Loader = ({ color, loading }) => {
  return (
    <div className={style.backdrop}>
      <ClipLoader color={color} loading={loading} />
    </div>
  );
};
