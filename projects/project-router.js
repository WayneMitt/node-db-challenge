const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

//PROJECTS REQUESTS
router.get('/', (req, res) => {
  Projects.getProjects()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body;
  Projects.addProjects(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


//RESOURCES REQUESTS
router.get('/resources', (req, res) => {
  Projects.getResources()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/resources', (req, res) => {
  const resourceData = req.body;
  Projects.addResources(resourceData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});


//TASKS REQUESTS
router.get('/tasks', (req, res) => {
  Projects.getTasks()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;
  Projects.addTasks(taskData)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});


module.exports = router;