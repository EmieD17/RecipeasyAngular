import { custom, JSONObject, required } from "ts-json-object";

export class User extends JSONObject {
  @required
  @custom((user: User, key:string, value: string) => {
    return value.toLowerCase();
  })
  email!: string;
}
