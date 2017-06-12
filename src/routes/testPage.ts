import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route di test, esempio di una pagina statica
 *
 * @class User
 */
export class TestPageRoute extends BaseRoute {

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

    //add test route
    router.get("/test", (req: Request, res: Response, next: NextFunction) => {
      new TestPageRoute().testPage(req, res, next);
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

  /**
   * The home page route.
   *
   * @class TestRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public testPage(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Test page | Cattan's automation";

    //set message
    let options: Object = {
      "message": "This is just a test page"
    };

    //render template
    this.render(req, res, "test", options);
  }
}