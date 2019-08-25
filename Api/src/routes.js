const express = require('express');
const router = express.Router();

module.exports = () => {
    //index
    const indexRouter = express.Router();
    indexRouter.get('/', (req, res) => {
        res.status(200).json({ response: 'Mongo API is working properly.' });
    });

    const requestsRouter = express.Router();
    const usersController = require('./controllers/users');
    const tasksController = require('./controllers/tasks');
    const subUsersController = require('./controllers/subUsers');



    //users
    requestsRouter.get('/users/:key/:value', usersController.findUsers);
    requestsRouter.get('/users/', usersController.searchUsers);
    requestsRouter.post('/users/insert', usersController.insert);
    requestsRouter.post('/users/remove', usersController.remove);
    requestsRouter.post('/users/update', usersController.update);


    //tasks
    requestsRouter.get('/tasks/:key/:value', tasksController.findTasks);
    requestsRouter.get('/tasks/', tasksController.searchTasks);
    requestsRouter.post('/tasks/insert', tasksController.insert);
    requestsRouter.post('/tasks/remove', tasksController.remove);
    requestsRouter.post('/tasks/update', tasksController.update);


    //subUsers
    requestsRouter.get('/subUsers/:key/:value', subUsersController.findSubUsers);
    requestsRouter.get('/subUsers/', subUsersController.searchSubUsers);
    requestsRouter.post('/subUsers/insert', subUsersController.insert);
    requestsRouter.post('/subUsers/remove', subUsersController.remove);
    requestsRouter.post('/subUsers/update', subUsersController.update);


    //request
    router.use('/', indexRouter);
    router.use('/', requestsRouter);

    return router;
};