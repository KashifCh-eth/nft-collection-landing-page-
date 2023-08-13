import React from 'react'
import styles from './Join.module.scss';
import JoinPageHome from '../JoinPageHome/JoinPageHome';
import Heading from '../Heading/Heading';
import RightLine from '../../Components/RightLine/RightLine';
import RoadMap from '../RoadMap/RoadMap';
import Line from '../../Components/Line/Line';
import SpaceBears from '../SpaceBears/SpaceBears';
import Footer from '../Footer/Footer';
import Partners from '../Partners/Partners';

const Join = () => {
    return (
        <JoinPageHome>
            <div>
                <Heading showNavbar={false} />
                <RightLine />
                <RoadMap isJoinPage={true} />
                <Line />
                <SpaceBears />
                <Partners isJoinPage={true} />
                <Footer />
            </div>
        </JoinPageHome>
        )
}

export default Join
