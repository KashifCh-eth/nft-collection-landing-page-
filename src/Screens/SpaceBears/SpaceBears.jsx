import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './SpaceBears.module.scss';

const SpaceBears = () => {
    return (
        <div className={styles.main_space_bears}>
            <Row>
                <Col sm={12} md={12}>
                    <div className={styles.space_bears}>
                        <div className={styles.first_bear}>
                            <img src="Assets/firstsidebear.png" alt="" />
                        </div>
                        <div className={styles.btn}>
                            <button className={styles.discordBtn}>
                                <span>JOIN OUR DISCORD</span>
                            </button>
                        </div>
                        <div className={styles.second_bear}>
                            <img src="Assets/secondsidebear.png" alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SpaceBears
