// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProfileSkills, ProfileSection, ProfileTitle, ProfileTitleSpan,
     ProfileList, ProfileItem,ItemSpan, Spanweb, SkillsSection, SkillsTitle,
    SkillsSpan, SkillsDesc, SkillsBar, BarTitle, BarPerc, 
  BarParent, ParentSpan 
} from './ProfileStyle';

const Profile = () => {
  const [skills, setSkills] = useState([]);
    useEffect(()=>{
        axios.get("js/data.json").then(res => {
            // console.log(res);
            setSkills(res.data.skills);
    });
    }, []);

 
  const PorfileContent = skills.map((skill) => {
        return(
          <SkillsBar key={skill.id}>
              <BarTitle>{skill.title}</BarTitle>
              <BarPerc>{skill.perc}</BarPerc>
              <BarParent>
                  <ParentSpan width={skill.perc} ></ParentSpan>
              </BarParent>
          </SkillsBar>
        );
    });

    return (

        <ProfileSkills>
            <div className="container">

                <ProfileSection>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name :</ItemSpan>
                            Mohammed quneifdi
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday :</ItemSpan>
                            01/01/1995
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address :</ItemSpan>
                             Syria Latakia
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone :</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email :</ItemSpan>
                            md-quneifdi@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website :</ItemSpan>
                            <Spanweb>www.mdquneifdi.com</Spanweb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>

                <SkillsSection>
                    <SkillsTitle><SkillsSpan>Some</SkillsSpan> Skills </SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis cupiditate, omnis similique.
                    </SkillsDesc>
                    {PorfileContent}          
                </SkillsSection>                
            </div>
        </ProfileSkills>
     
    );
}

export default Profile;
