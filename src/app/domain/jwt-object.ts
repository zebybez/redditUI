import {Payload} from './payload';

export class JwtObject {
  payload: Payload;
  exp: number;
  iat: number;
}
