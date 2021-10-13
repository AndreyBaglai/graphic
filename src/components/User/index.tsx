import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  name: string;
  imgUrl: string;
}

const User: React.FC<IProps> = ({ name, imgUrl }) => {
  return (
    <div className={styles.user}>
      <p className={styles.text}>{name}</p>
      <img className={styles.img} src={imgUrl} alt="profle" />
    </div>
  );
};

export default User;
