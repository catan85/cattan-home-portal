import * as express from "express";

let router = express.Router();

router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('api route - get request');
    res.status(201).json({
      message: 'Success',
      data: 'a,b,c,d,e'
    });
});

router.post("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('api route - post request');
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    console.log(firstname);
    console.log(lastname);
    res.status(201).json({
      message: 'Success',
      data: 'You posted>> ' + 'first name: ' + firstname + ', last name: ' + lastname
    });
});

export { router as TestApiRoute};