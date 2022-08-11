import * as React from 'react';

import './styles.scss';

type Picture = {
  src: string;
  alt: string;
};

interface Props {
  name: string;
  location: string;
  picture: Picture;
}

const Avatar = ({ name, location, picture }: Props) => {
  return (
    <div className="profile-container">
      <img src={picture.src} alt={picture.alt} />
      <h1>{name}</h1>
      <h2>{location}</h2>
    </div>
  );
};

export { Avatar };
