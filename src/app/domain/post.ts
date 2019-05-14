import {User} from './user';
import {Subreddit} from './subreddit';

export class Post {
  id: number;
  title: string;
  content: string;
  creatorId: number;
  creator: User;
  subreddit: Subreddit;
}
