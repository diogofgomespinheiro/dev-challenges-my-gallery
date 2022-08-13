import * as React from 'react';

import './styles.scss';

interface Props {
  quantity: number;
  title: string;
}

const Card = ({ quantity, title }: Props) => {
  return (
    <div className="card-container">
      <div className="card-quantity">
        {new Intl.NumberFormat('en-US').format(quantity)}
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export { Card };
