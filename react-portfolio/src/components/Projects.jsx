function Projects() {
  return (
      <section id="projects">
          <h2>Projects</h2>

          <div className="project-container">
              <h4>Collaborative Project</h4>
              <img src="/findMeDinner.png" alt="Find Me Dinner" className="project-image" />
              <p>
                  I collaborated with three classmates to create a JavaScript app that assists users in finding dinner options close to their current location. <br />
                  <a href="https://github.com/Jessica-Lee1424/find-me-dinner" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/find-me-dinner</a>
              </p>
          </div>

          <div className="project-container">
              <h4>Employee Tracker Featuring PostgreSQL</h4>
              <p>
                  Here is an example of a challenge I successfully completed. This final code for this project can be reviewed here: 
                  <a href="https://github.com/Jessica-Lee1424/SQL-Employee-Tracker" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/SQL-Employee-Tracker</a>
              </p>
          </div>

          <div className="project-container">
              <h4>Weather Service API Using Databases and APIs</h4>
              <img src="/weatherAPI.png" alt="Weather API" className="project-image" />
              <p>
                  This is an example of a challenge that lived up to its name in that I was very challenged and have a lot of room for improvement here. The project in this repository needs to be reworked. My goal is to return to this code before the course program ends and correct the errors to get the API working as expected. <br />
                  <a href="https://github.com/Jessica-Lee1424/Weather-Service_API" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/Weather-Service_API</a>
              </p>
          </div>

          <div className="project-container">
              <h4>Build A Car</h4>
              <img src="/carDemo.png" alt="Car Demo" className="project-image" />
              <p>
                  Here we updated an existing TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks.
                  <a href="https://github.com/Jessica-Lee1424/Build-a-Car" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/Build-a-Car</a>
              </p>
          </div>

          <div className="project-container">
              <h4>My First Blog</h4>
              <img src="/readMe.png" alt="My First Blog" className="project-image" />
              <p>
                  This challenge required us to modify starter code to complete a personal blog. We were required to include a content form that dynamically rendered blog posts. Also required was a light/dark mode toggle.
                  <a href="https://github.com/Jessica-Lee1424/My-First-Blog" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/My-First-Blog</a>
              </p>
          </div>

          <div className="project-container">
              <h4>README Generator</h4>
              <img src="/readMe.png" alt="README Generator" className="project-image" />
              <p>
                  In this project, we modified starter code to create a command-line application that dynamically generates a professional README.md file based on user input using the Inquirer package.
                  <a href="https://github.com/Jessica-Lee1424/README_Generator" target="_blank" rel="noopener noreferrer">https://github.com/Jessica-Lee1424/README_Generator</a>
              </p>
          </div>
      </section>
  );
}

export default Projects;