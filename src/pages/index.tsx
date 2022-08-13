import * as React from 'react';

import { Layout } from '../layouts/Layout';
import { Avatar } from '../components/Avatar';
import { Card } from '../components/Card';

import '../styles/home.scss';

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
      <div className="grid-container">
        <img src="/assets/photo1.png" alt="" className="grid-item" />
        <img src="/assets/photo2.png" alt="" className="grid-item" />
        <img src="/assets/photo3.png" alt="" className="grid-item" />
        <img src="/assets/photo4.png" alt="" className="grid-item" />
        <img src="/assets/photo5.png" alt="" className="grid-item" />
        <img src="/assets/photo6.png" alt="" className="grid-item" />
      </div>
    </Layout>
  );
};

export default Home;
