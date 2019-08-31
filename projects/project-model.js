const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    getProjects,
    addProjects,
    getResources,
    addResources,
    getTasks,
    addTasks,
    update,
    remove
};
//PROJECTS
function getProjects() {
    return db('projects');
}

function addProjects(project) {
    return db('projects')
        .insert(project)
}

//RESOURCES
function getResources() {
    return db('resources');
}

function addResources(resource) {
    return db('resources')
        .insert(resource)
}

//TASKS
function getTasks() {
    return db('tasks');
}

function addTasks(task) {
    return db('tasks')
        .insert(task)
}


// function getShoppingList(recipe_id) {
//     return db('ingredients')
//         .where({ recipe_id })
//         .first()
// }

// function getInstructions(recipe_id) {
//     return db('instructions')
//         .where({ recipe_id })
//         .orderBy('step_number')
// }

// function add(recipe) {
//     return db('recipeBook')
//         .insert(recipe)
// }

function update(recipe, id) {
    return db('recipeBook')
        .where({ id })
        .update(recipe)
}

function remove(id) {
    return db('recipeBook')
        .where({ id })
        .del()
}