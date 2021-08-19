export const Host = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : `https:${process.env.API_URL_PROD}`;
export const SocketApiUrl = process.env.NODE_ENV === 'development' ? 'ws://localhost:3001' : `${process.env.API_URL_PROD}`;

type RequestMethods = "GET"|"POST"|"PUT"|"DELETE";
export const Request : (method: RequestMethods, uri:String, body: {}, headers: {} ) => Promise<Response>;

type Auth = {
  login(data: { mail:String, password:String }) : Promise<Response>;
  register(data: { mail:String, password:String, name:String, company:String}) : Promise<Response>;
  refresh() : Promise<Response>;
}

export const Auth : Auth;

type Product = {
  get() : Promise<Response>;
  add(data: { label:String }) : Promise<Response>;
  set(data: { uuid:String, label:String }) : Promise<Response>;
  del(data: { uuid:String}) : Promise<Response>;
  addValidation( uuid:String, data: { expiration: Date }) : Promise<Response>;
}

export const Product : Product

type Validation = {
  set(data: { uuid:String, expiration: Date }) : Promise<Response>;
  del(data: { uuid:String }) : Promise<Response>;
}

export const Validation: Validation