import data from '../../public/entries.json';

interface Blog {
  title: string;
  url: string;
  published: string;
  summary: string;
  category: string[];
}

// 最新5件のみ使用
const blogs = (data as Blog[]).slice(0, 5);
export default blogs;
