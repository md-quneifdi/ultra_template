import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem,
     PortfolioBox, ImageWrapper, Image, Overlay, OverlaySpan } from './PortfolioStyle';

const Portfolio = () => {
    const [images, setImages] = useState([]);

    useEffect(()=>{
        axios.get("js/data.json").then( res => {
            // console.log(res.data.portfolio);
            setImages(res.data.portfolio);
        });
    }, []);

    const PortfolioImages = images.map((imageItem) => {
        return(
            
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>

        );
    });

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>   

            <PortfolioBox>                
              {PortfolioImages}
            </PortfolioBox>            
        </PortfolioSection>
    );
}

export default Portfolio;
