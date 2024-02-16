import React, { useRef, useState, useEffect } from 'react'
import { SkillsData } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard.jsx'
import './skill.css'
import Cardinfo from './CardInfo/Cardinfo.jsx'
import { Fade } from 'react-awesome-reveal'

const Skill = () => {

  const [SelectSkill, SetSelectSkill] = useState(SkillsData[0]);
  const SelectSkillHandler = (data) => {
    SetSelectSkill(data)
  }


  return <>
    <section className='section skill-container' id='skill'>
      <Fade direction='up'>
        <h2>Technical Proficiency</h2>
      </Fade>
      <div className='skill-content' >

        <div className='skill'>
          {SkillsData.map((item, index) =>
            <Fade direction='left' delay={index * 750} triggerOnce={true} duration={2000} damping={0.5} key={index}>
              <SkillCard
                key={index}
                title={item.title}
                iconUrl={item.icon}
                isActive={SelectSkill.title === item.title}
                onClickHandler={() => SelectSkillHandler(item)} />
            </Fade>
          )}
        </div>
        <div className='skill-info'>
          <Cardinfo heading={SelectSkill.title} SkillsInfo={SelectSkill.Skills} />
        </div>
      </div>
    </section>
  </>
}

export default Skill
