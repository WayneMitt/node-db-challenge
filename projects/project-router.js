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
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});


//RESOURCES REQUESTS










router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Projects.getShoppingList(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Projects.getInstructions(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});



module.exports = router;