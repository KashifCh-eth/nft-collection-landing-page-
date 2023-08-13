import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';
import { Animated } from 'react-animated-css';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Faqs = () => {
  let [keyCheckerState, setKeyCheckerState] = useState();

  const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const genExtra2 = () => (
    <MinusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  function callback(key) {
    if (key[1]) {
      key.shift();
      setKeyCheckerState(key[0]);
    } else {
      setKeyCheckerState(key[0]);
    }
  }
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={styles.main_faqs} id='faqss'>
      <Animated
        isVisible={true}
        animationIn='animate__fadeInUp'
        animationOut='animate__fadeInUp'
      >
        <Row>
          <Col sm={12} md={12}>
            <div className={styles.faqs_head}>
              <h1>FAQ</h1>
            </div>
          </Col>
          <Col sm={12} md={12} id='faqs'>
            <Collapse
              defaultActiveKey={[]}
              onChange={callback}
              expandIconPosition='right'
            >
              <Panel
                header='What is Lonely Bear Society?'
                key='1'
                extra={keyCheckerState === '1' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='When will The Lonely Bear Society launch?'
                key='2'
                extra={keyCheckerState === '2' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='How can I join'
                key='3'
                extra={keyCheckerState === '3' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='IS LONELY BEAR SOCIETY A PROMISING PROJECT?'
                key='4'
                extra={keyCheckerState === '4' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='Why mental health?'
                key='5'
                extra={keyCheckerState === '5' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='Why does the body of the bear not match the head?'
                key='6'
                extra={keyCheckerState === '6' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header='WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?'
                key='7'
                extra={keyCheckerState === '7' ? genExtra2() : genExtra()}
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Animated>
    </div>
  );
};

export default Faqs;
