import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './RightLine.module.scss';

const RightLine = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.section_separator}></div>
        </Col>
      </Row>
    </div>
  );
};

export default RightLine;
