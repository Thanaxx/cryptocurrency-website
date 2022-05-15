import React from 'react';
import Blogpage from '../components/Blogs';
import Contacts from '../components/Contacts';
import Cover from '../components/Hero';
import Services from '../components/Services';
import Testimony from '../components/Testimonies';
import Users from '../components/Users';

function Home() {
  return (
    <>
        <Cover />
        <Services />
        <Blogpage />
        <Testimony />
        <Users/>
        <Contacts />
    </>
  )
}

export default Home
