import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.main_footer}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.footer}>
                        <p>©Copyright-2021 Lonely Bear Society. All rights reserved.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
