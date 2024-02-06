import React, { useState } from 'react'
import './Project.css'
import { projectData } from '../../utils/projectData'
import ProjectMenu from './ProjectMenu/ProjectMenu'
import ProjectCard from './ProjectCard/ProjectCard'
import Pagination from './Pagination/pagination'
import { Fade } from 'react-awesome-reveal'

const Project = () => {
  const TypeName = Array.from(new Set(projectData.map((item) => item.type)))

  const newTypeArray = ["All", ...TypeName]
  const [selectedProject, setSelectedProject] = useState(newTypeArray[0]);

  const onclickHandler = (type) => {
    setSelectedProject(type)
  }

  // handling pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  

  const TotalProject = projectData.length
  const totalPages = Math.ceil(TotalProject/itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProject = projectData.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  // Filtering Project data 
  const filteredProjectData = selectedProject === 'All' ? currentProject : projectData.filter(project => project.type === selectedProject)



  return <>
    <section className='project-container' id="project">
    <Fade duration={2000} direction='down' triggerOnce={true}>
      <h2>Latest Work</h2>
      </Fade>
      <div className='project-content'>
        <div className='project-menu'>
          <ProjectMenu type={newTypeArray} selectedType={selectedProject} onclickHandler={onclickHandler} />
        </div>
        <div className="project-info">
          <ProjectCard key={filteredProjectData.name} projectData={filteredProjectData} projects={projectData} />
        </div>
      </div>
      <Pagination totalItems={TotalProject} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </section>

  </>
}

export default Project
