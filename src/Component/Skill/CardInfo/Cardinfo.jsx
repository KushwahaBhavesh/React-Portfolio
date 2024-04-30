import React from 'react'
import './CardInfo.css'
import { Zoom } from 'react-awesome-reveal'

const Cardinfo = ({ heading, SkillsInfo }) => {
  return <>
  <Zoom style={{width:"100%"}} direction='center' duration={2000}  triggerOnce={true}>
    <div className='skill-card-info'>
      <h3>{heading}</h3>
    <div className='skill-card-content'>


      {SkillsInfo.map((item, index) => (
        <React.Fragment key={`skill_${index}`} >
          <div className='skill-info'>
            <p>{item.skill}</p>
            <p>{item.Percentage}</p>
          </div>
          <div className='progress-bar'>
            <div className='skill-progress' style={{ width: item.Percentage }} >
            
            </div>
         
          </div>
        </React.Fragment>
      ))}

    </div >
    </div>
    </Zoom>
  </>
}

export default Cardinfo
