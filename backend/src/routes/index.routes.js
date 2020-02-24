const { Router } = require("express");
const router = Router();

const core = require('../controllers/core.controller')

const authCtrl = require('../controllers/auth.controller')
const taskCtrl = require('../controllers/task.controller')

//router.route('/').get(authCtrl.sayHello)

router.route('/tasks')
    .get(taskCtrl.getTask)
    .post(taskCtrl.createTask)

router.route('/private-tasks')
    .get(core.verifyToken,taskCtrl.getTask)
    .post(taskCtrl.createTask)

router.post('/singup', authCtrl.singUp)
router.post('/singin', authCtrl.singIn)

module.exports = router;