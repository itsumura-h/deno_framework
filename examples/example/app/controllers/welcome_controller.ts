import { ServerRequest } from "https://deno.land/std/http/server.ts";
import {FWResponse} from '../../../../src/framework/core/route.ts'

export class WelcomeController {
  static index(r:ServerRequest):FWResponse{
    return new FWResponse("Welcome")
  }
}
