import React from 'react';
import  { AboutSection, AboutInfo, InfoTitle, InfoSpan, DevInfo, InfoDesc, InfoLink} from './AboutStyle.js';

const About = () => {
    return (
      <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <DevInfo>Full Stack Developer</DevInfo>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoLink>explicabo </InfoLink>  
                        maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum.
                        Possimus nisi cupiditate ad veritatis,
                        Maiores vero debitis ipsa reprehenderit natus minus suscipit corrupti 
                        consectetur adipisicing elit nostrum quam quod.
                    </InfoDesc>                    
                </AboutInfo>
            </div>
        </AboutSection>
    );
}

export default About;
