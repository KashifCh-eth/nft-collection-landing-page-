import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Heading from '../Heading/Heading';
import Works from '../Works/Works';
import Line from '../../Components/Line/Line';
import Team from '../Team/Team';
import RightLine from '../../Components/RightLine/RightLine';
import RoadMap from '../RoadMap/RoadMap';
import Faqs from '../Faqs/Faqs';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const MainHome = () => {
  return (
    <Home>
      <div>
        <Heading />
        <AboutUs />
        <Works />
        <Line />
        <Team />
        <RightLine />
        <RoadMap />
        <Line />
        <Faqs />
        <RightLine />
        <Partners />
        <Footer />
      </div>
    </Home>
  );
};

export default MainHome;
