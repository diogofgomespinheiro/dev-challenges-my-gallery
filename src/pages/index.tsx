import * as React from 'react';

import { Layout } from '../layouts/Layout';
import { Avatar } from '../components/Avatar';
import { Card } from '../components/Card';

const Home = () => {
  return (
    <Layout>
      <Avatar
        name="Rodney Cotton"
        location="Helsinki, Finland"
        picture={{ src: '/assets/profile-photo.png', alt: 'Profile Picture' }}
      />
      <div className="flex-row">
        <Card quantity={100} title="Posts" />
        <Card quantity={2242} title="Followers" />
        <Card quantity={1432} title="Following" />
      </div>
    </Layout>
  );
};

export default Home;
