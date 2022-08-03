import * as React from 'react';

import './styles.scss';

const Footer = () => {
  return (
    <footer>
      created by {''}
      <a href="https://github.com/diogofgomespinheiro" target="__blank">
        diogofgomespinheiro
      </a>
      {''} - {''}
      <a href="https://devchallenges.io" target="__blank">
        devchallenges.io
      </a>
    </footer>
  );
};

export { Footer };
