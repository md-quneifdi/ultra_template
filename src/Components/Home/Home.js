import React from 'react';
import { HomeSection, HomeInformation, HomeTitle, HomeInfo, Homedesc, Span, HomeBTN } from './HomeStyle';

const Home = () => {
    return (
        <HomeSection>
             <div className="container">
                <HomeInformation>
                    <HomeTitle>mohammed quneifdi</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <Homedesc>
                        I am a professional <Span> Full Stack Developer </Span> 
                        creating modern and resposive designs to Web and Web Applications.
                        Let us work together. 
                    </Homedesc>
                    <HomeBTN>Let's Begin</HomeBTN>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}

export default Home;
