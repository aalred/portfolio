import { Project } from '../../Interfaces';

import React from 'react';
import CardProjects from './CardProjects';

const Projects = () => {

    return (
        <div>
            {Project.map((e) => <CardProjects key={e.id} id={e.id} title={e.title} url={e.url} technologies={e.technologies} summary={e.summary} image={e.image} />)}
        </div>
    )
}

export default Projects;