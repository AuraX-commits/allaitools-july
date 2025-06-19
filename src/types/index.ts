
export interface Author {
  id: number;
  name: string;
  avatar: string;
  title: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  slug: string;
}
