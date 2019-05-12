import {User} from './user';
import {Post} from './post';

export class Comment {
  id: number;
  creator: User;
  parent: Post;
  content: string;
}
