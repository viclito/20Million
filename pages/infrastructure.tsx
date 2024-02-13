import React from 'react';
import InfraLanding from '../Components/infrastructure/Infra-Landing/InfraLanding';
import Security from '../Components/infrastructure/Security/Security';
import Performance from '../Components/infrastructure/Performance/Performance';
import Scalability from '../Components/infrastructure/Scalability/Scalability';

const Infrastructure = () => {
    return (
        <>
            <InfraLanding />
            <Security />
            <Performance />
            <Scalability />
        </>
    );
};

export default Infrastructure;
