import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Partners.module.scss';
import './OverRide.scss';

const Partners = ({ isJoinPage = false }) => {
  return (
    <div
      className={`${styles.main_partners} ${
        isJoinPage ? 'mainpartnersOverride' : ''
      }`}
    >
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            <img src='Assets/bottompage.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={`${styles.partners} ${isJoinPage ? "partnersOverride" : ""}`}>
            <div className={styles.head}>
              <h3>
                Lonely <br />
                Bear Society
              </h3>
            </div>
            <div className={styles.partners_icons}>
              <img src='Assets/discord.png' alt='' />
            </div>
            {isJoinPage ? null : (
              <div className={styles.social_icons}>
                <img src='Assets/insta.png' alt='' />
                <img src='Assets/twitter.png' alt='' />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
