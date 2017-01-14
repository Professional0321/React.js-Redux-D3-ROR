import React from 'react';
import NavigationContainer from '../navigation/navigation_container';
import ProjectsProjectDetailContainer from './projects_project_detail_container';

class ProjectsProjectDetail extends React.Component {
  render() {
    return (
      <div className="projects-project">
        <ul>
          <li className="projects-project-title">{this.props.project.title}</li>
          <li className="projects-project-time">Total Time: {this.props.project.seconds}</li>
        </ul>

        <ul className="projects-project-tasks">
          {this.props.project.tasks.map((task, id) => (
              <li key={id}>{task.title} {task.seconds}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ProjectsProjectDetail;