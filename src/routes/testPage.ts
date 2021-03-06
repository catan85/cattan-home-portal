import * as express from "express";

let router = express.Router();
router.get('/', function (req: express.Request, res: express.Response, next) {
    //set message
    let options: Object = {
      "message": "Test page works",
      "title" : "Test | Cattan's automation"
    };
    res.render('index', options);
});

export { router as TestPageRoute };