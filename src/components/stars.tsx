import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styles from '../../styles/Home.module.scss';

export function OneStar() {
  return (
    <div className={styles.stars}>
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiFillStar />
    </div>
  );
}

export function TwoStar() {
  return (
    <div className={styles.stars}>
      <AiOutlineStar />
      <AiOutlineStar />
      <AiOutlineStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
}

export function ThreeStar() {
  return (
    <div className={styles.stars}>
      <AiOutlineStar />
      <AiOutlineStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
}
