import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/home/home.scss';
import '../../style/home/statistics.css';
import './statistics.js'
import Categories from './cards';
import OurStoryGrid from './grid';
import SliderHome from './slider';
import Products from './products';
import StatComp from './statisticsComp';
import WhyUs from './whyUs';




function Home(props) {

    return (
        <main>

            <SliderHome />
            <OurStoryGrid />
            <StatComp />
            <Categories />
            <Products />
            <WhyUs />

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </main>
    )

}

export default Home;