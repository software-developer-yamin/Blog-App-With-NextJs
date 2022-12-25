interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface Post {
  id: string;
  image: string;
  likes: number;
  owner: Owner;
  publishDate: string;
  tags: array[];
  text: string;
  link?: string;
}
