import React from 'react';
import { Col, Row } from 'reactstrap';
import styles from './Team.module.scss';
import { Animated } from 'react-animated-css';

const Team = () => {
  // subha uth ker isko sahy karna ha text wagera ko white bhi karna ha
  return (
    <div className={styles.main_team}id="teams">
      <Row>
        <Col sm={12} md={12}>
          <Animated
            animationIn='animate__fadeInUp'
            animationOut='animate__fadeInUp'
            isVisible={true}
          >
            <div className={styles.team_head}>
              <h2>TEAM</h2>
              <h1>TEAM</h1>
            </div>
          </Animated>
        </Col>
        <Col sm={12} md={12}>
          <Animated isVisible={true} animationIn="animate__fadeInUpBig" animationOut="animate__fadeInUpBig">
          <div className={styles.team}>
            <div className={styles.character1}>
              <div>
                <img src='Assets/teambear1.png' alt='teambear1' />
              </div>
              <div>
                <h3>FOUNDER HAN</h3>
              </div>
              <div>
                <p>
                  Art Director
                  <br />
                  Graphic designer
                  <br />
                  Member of a nonprofit health organization (Health Out Loud
                  Toronto)
                </p>
              </div>
            </div>
            <div className={styles.character2}>
              <div>
                <img src='Assets/teambear2.png' alt='teambear2' />
              </div>
              <div>
                <h3>MARKETING:@TEAMGOATNFT</h3>
              </div>
              <div>
                <p>
                  Marketing expert <br /> Marketed for multiple <br />
                  successful <br />
                  NFT projects
                </p>
              </div>
            </div>
            <div className={styles.character3}>
              <div>
                <img src='Assets/teambear3.png' alt='teambear3' />
              </div>
              <div>
                <h3>Developer: Tom</h3>
              </div>
              <div>
                <p>
                  Smart Contract <br /> NFT enthusiast <br /> Runner <br />
                  Golfer
                </p>
              </div>
            </div>
          </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
