import {User} from './user';

export class Subreddit {
  id: number;
  name: string;
  rules: string;
  creator: User;
}
