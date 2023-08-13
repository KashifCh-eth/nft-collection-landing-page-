import React from 'react';
import styles from './RoadMap.module.scss';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';

const RoadMap = ({ isJoinPage = false }) => {
  return (
    <div className={styles.main_road_map} id='roadmaps'>
      <Row>
        <Col sm={12} md={12}>
          <Animated
            animationIn='animate__fadeInUp'
            animationOut='animate__fadeInUp'
            isVisible={true}
          >
            <div className={styles.road_map_head}>
              <h2>ROADMAP</h2>
              <h1>ROADMAP</h1>
            </div>
          </Animated>
        </Col>
        {isJoinPage ? (
          <Col sm={12} md={12}>
            <div className={styles.btn}>
              <button className={styles.discordBtn}>
                <span>JOIN OUR DISCORD</span>
              </button>
            </div>
          </Col>
        ) : null}
        <Col xs={2} sm={2} md={2}>
          {/* <div className={styles.circle}></div> */}
          <div className={styles.line}>
            <div className={styles.dottedline}></div>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10}>
          <Animated
            animationIn='animate__fadeInUp'
            animationOut='animate__fadeInUp'
            isVisible={true}
          >
            <div className={styles.road_map_content}>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>01</h1>
              </div>
              <div>
                <h2>Community First</h2>
              </div>
              <div>
                <p>
                  Everything starts and ends with the community. The moment we
                  prioritize something other than the community will be the
                  beginning of the end. We won't let that happen. We let the
                  community decide on the direction for Lonely Bear society by
                  doing monthly holders' votes and discussions. Lonely Bear
                  Society is a movement, we understand how supportive the nft
                  space is, and we will be the first one to incorporate mental
                  wellness into the metaverse. We want our holders to be proud
                  of putting our title in their bio.
                </p>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>02</h1>
              </div>
              <div>
                <h2>Utility</h2>
              </div>
              <div>
                <p>
                  Everything starts and ends with the community. The moment we
                  prioritize something other than the community will be the
                  beginning of the end. We won't let that happen. We let the
                  community decide on the direction for Lonely Bear society by
                  doing monthly holders' votes and discussions. Lonely Bear
                  Society is a movement, we understand how supportive the nft
                  space is, and we will be the first one to incorporate mental
                  wellness into the metaverse. We want our holders to be proud
                  of putting our title in their bio.
                </p>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>03</h1>
              </div>
              <div>
                <h2>Lonely Society Foundation</h2>
              </div>
              <div>
                <p>
                  The founders grew up with no direction and support from their
                  families, damaging their upbringing. We don't want that to
                  happen to our community. A portion of the Lonely Bear Society
                  collections sales will be used to put up a non-profit,
                  non-governmental organization called The Lonely Society
                  Foundation. The main goal of the NGO is to set up
                  physical/online clinics for those struggling with health
                  issues and to create a community that has the resource to
                  guide the youth. A portion of the secondary sales will be put
                  into the foundation.
                </p>
              </div>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>04</h1>
              </div>
              <div>
                <h2>Metaverse</h2>
              </div>
              <div>
                <p>
                  We are searching for land to build the very Health clinic in
                  the metaverse. Sandbox VR, Decentraland, Cryptovoxels, and
                  Somnium Space are a few platforms we consider.
                </p>
                <p>
                  We are searching for land to build the very Health clinic in
                  the metaverse. Sandbox VR, Decentraland, Cryptovoxels, and
                  Somnium Space are a few platforms we consider.
                </p>
                <p>
                  We will host events that allow holders to network and build
                  new relationships and host monthly health workshops. And, of
                  course, each holder will get their unique 3D Lonely Bear in
                  the metaverse.
                </p>
              </div>
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
