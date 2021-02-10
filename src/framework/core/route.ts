import { serve, ServerRequest } from "https://deno.land/std/http/server.ts";

export class FWResponse {
  status?: number;
  headers?: Headers;
  body?: string;

  constructor(body:string){
    this.body = body
  }
}

class Route {
  method!: string;
  path!: string;
  action!: (r:ServerRequest)=>FWResponse;

  constructor(method:string, path:string, action:(r:ServerRequest)=>FWResponse){
    this.method = method
    this.path = path
    this.action = action
  }
}

export class Routes {
  list: Array<Route>

  constructor(){
    this.list = []
  }

  get(path:string, controller:any){
    let route = new Route("GET", path, controller)
    this.list.push(route)
  }

  runServer= async ()=>{
    const s = serve({ port: 8000 });
    for await (const req of s) {
      let isMatch = false
      for(const controller of this.list){
        if(req.method == controller.method && req.url == controller.path){
          isMatch = true
          const res = controller.action(req)
          req.respond({ body: res.body });
        }
      }
      if(!isMatch){
        req.respond({ status:404, body: "" });
      }
    }
  }
}
