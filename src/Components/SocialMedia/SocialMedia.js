import React from 'react';
import { SocialSection, Social, SocialIcon, SocialContent, Span, SpanInfo } from './SocialMediaStyle.js';
import axios from "axios";

class SocialMedia extends React.Component {

  state = {
    social: []
  }

   componentDidMount() {
        axios.get("js/data.json").then( res => {
           this.setState({ social: res.data.social }) 
          });
    }

  render() { 

    const {social} = this.state;

    const socialList = social.map((socialItem)=> {
         return(
            <Social item={socialItem.id} key={socialItem.id}>
                <SocialIcon className={socialItem.icon} item={socialItem.id}/>
                <SocialContent>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialContent>
            </Social>
         );
    });

    return (
        <SocialSection>
            {socialList}
        </SocialSection>

    );
  }
}

export default SocialMedia;
