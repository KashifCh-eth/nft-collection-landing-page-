import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Line.module.scss';

const Line = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.section_line}></div>
        </Col>
      </Row>
    </div>
  );
};

export default Line;
