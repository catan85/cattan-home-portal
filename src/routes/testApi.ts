import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

/**
 * / route di test, esempio di una pagina statica
 *
 * @class User
 */
export class TestApiRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class TestPageRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[TestRoute::create] Creating test route.");

    //add test get route
    router.get("/api", (req: Request, res: Response, next: NextFunction) => {
        console.log('api route - get request');
        res.status(201).json({
          message: 'Success',
          data: 'a,b,c,d,e'
        });
    });

    //add test post route
    // funziona basta codificare la stringa:
    /*
    {
      "firstName": "nome",
      "lastName" : "cognome"
    }
    */
    router.post("/api", (req: Request, res: Response, next: NextFunction) => {
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
  }

  /**
   * Constructor
   *
   * @class TestPageRoute
   * @constructor
   */
  constructor() {
    super();
  }
}