import {User} from './user';

export class Post {
  id: number;
  title: string;
  content: string;
  creatorId: number;
  creator: User;
}
