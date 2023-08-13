import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './AboutUs.module.scss';
import { Animated } from 'react-animated-css';

const AboutUs = () => {
  return (
    <div className={styles.main_about} id="aboutus">
      <Row>
        <Col sm={12} md={8}>
          <Animated
            isVisible={true}
            animationIn='animate__fadeInUpBig'
            animationOut='animate__fadeInUpBig'
          >
            <div className={styles.about_content}>
              <div>
                <h1>
                  ABOUT <span>US</span>
                </h1>
                <p>
                  Lonely Bear Society is a community-driven NFT project. The
                  collection consists of over a hundred exciting traits of
                  faces, hair, hats, body, and backgrounds to ensure each bear
                  is a unique, non-fungible token on the Ethereum blockchain.ß
                </p>
              </div>
              <div>
                <h2>LONELY SOCIETY FOUNDATION</h2>
                <p>
                  A portion of the sales from the Lonely Bear Society
                  collections will be used to put up a non-profit,
                  non-governmental organization (NGO) called Lonely Society
                  Foundation. The main goal of the NGO is to set up physical
                  clinics for those struggling with mental health problems and
                  to create a community that has the resource to guide the
                  youth.
                </p>
              </div>
              <div>
                <h2>METAVERSE READY</h2>
                <p>
                  We will buy land in the metaverse to build the first mental
                  health organization; we will host events every month with
                  exciting prizes to win for our holders. Of course, each holder
                  will get their unique 3D avatar in the metaverse.
                </p>
              </div>
            </div>
          </Animated>
        </Col>
        <Col sm={12} md={4}>
          <Animated
            animationIn='animate__backInUp'
            animationOut='animate__backInUp'
            isVisible={true}
          >
            <div className={styles.sideBear}>
              <img src='Assets/sidebear.png' alt='sidebear' />
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
