import * as React from 'react';

import { Layout } from '../layouts/Layout';
import { Avatar } from '../components/Avatar';

const Home = () => {
  return (
    <Layout>
      <Avatar
        name="Rodney Cotton"
        location="Helsinki, Finland"
        picture={{ src: '', alt: 'Profile Picture' }}
      />
    </Layout>
  );
};

export default Home;
