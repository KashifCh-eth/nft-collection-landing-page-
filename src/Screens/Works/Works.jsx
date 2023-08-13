import React from 'react';
import { Col, Row } from 'reactstrap';
import SliderComponent from '../../Components/Slider/Slider';
import styles from './Works.module.scss';
import { Animated } from 'react-animated-css';

const Works = () => {
  let imgArr = [
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
  ];
  return (
    <div className={styles.main_works} id="works">
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.works_head}>
            <h2>
              WO<span>RKS</span>
            </h2>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <SliderComponent imgs={imgArr} />
        </Col>
        <Col sm={12} md={12}>
          <Animated
            isVisible={true}
            animationIn='animate__fadeInUpBig'
            animationOut='animate__fadeInUpBig'
          >
            <div className={styles.joining}>
              <div>
                <h1>
                  HOW CAN I <span>JOIN THEM?</span>
                </h1>
              </div>
              <div>
                <p>
                  Join our Discord server for a whitelist. We still have spots
                  left. But they will all be filled by early supporters of the
                  project who are ready to mint once we announce the launch. If
                  you, too, want to be among the few able to mint their piece of
                  digital art and contribute to the mental wellness society.
                </p>
              </div>
              <div>
                <p>
                  Join the Lonely Bear Society. By the end of April 2022,
                  everything will be set in stone. That's the date the Lonely
                  Bears sends out its first VIP invitations. And you can bring a
                  bear to your wallet and everyone you care about. Once 8888 are
                  minted, the early supporters of this project will be heavily
                  rewarded.
                </p>
              </div>
              <div>
                <p>
                  We are spreading mental awareness in a new and different way,
                  join us to make a difference in this world
                </p>
              </div>
              <div>
                <p>We are Lonely Bear but we are not lonely</p>
              </div>
              <div>
                <button>
                  <span>JOIN THE DISCORD</span>
                </button>
              </div>
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default Works;
