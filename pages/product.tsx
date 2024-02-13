import React from 'react';
import ProdLanding from '../Components/Product/Prod-Landing/ProdLanding';
import ProdPrelaunch from '../Components/Product/Pre-launch/ProdPrelaunch';
import PostLaunch from '../Components/Product/Post-launch/PostLaunch';

const Product = () => {
    return (
        <>
            <ProdLanding />
            <ProdPrelaunch />
            <PostLaunch />
        </>
    );
};

export default Product;
