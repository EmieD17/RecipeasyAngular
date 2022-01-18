import {custom, JSONObject, required} from 'ts-json-object'

export class UserCredentials extends JSONObject {
  @required
  @custom((user: UserCredentials, key:string, value: string) => {
    return value.toLowerCase();
  })
  email!: string;

  @required
  password!: string;
}
