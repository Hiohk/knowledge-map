import JavaScript01 from "../assets/img/books/JavaScript01.png";
import JavaScript02 from "../assets/img/books/JavaScript02.png";
import JavaScript03 from "../assets/img/books/JavaScript03.png";
import Node from "../assets/img/books/Node.png";


const frontendBooks = [
  {
    id: 1,
    title: "你不知道的 JavaScript 上卷",
    author: "Kyle Simpson",
    imageName: JavaScript01,
    category: "前端",
    description: "简介...",
    publishDate: "2015年",
    rate: 5
  },
  {
    id: 2,
    title: "你不知道的 JavaScript 中卷",
    author: "Kyle Simpson",
    imageName: JavaScript02,
    category: "前端",
    description: "简介...",
    publishDate: "2015年",
    rate: 3
  },
  {
    id: 3,
    title: "你不知道的 JavaScript 下卷",
    author: "Kyle Simpson",
    imageName: JavaScript03,
    category: "前端",
    description: `What is this book about?Beginning Web Programming with HTML, XHTML, and CSS teaches you how to write Web pages using HTML, XHTML, and CSS.`,
    publishDate: "2015年",
    rate: 4.5
  },
  {
    id: 4,
    title: "深入浅出 Node.js",
    author: "朴灵",
    imageName: Node,
    category: "前端",
    description: "暂无简介",
    publishDate: "2013年",
    rate: 2
  },
];

const backendBooks = [
  {
    id: 1,
    title: "Head first Java",
    author: "Kathy Sierra",
    imageName: JavaScript01,
    category: "后端",
    description: "暂无简介",
    publishDate: "2003年",
    rate: 4
  },
];

export { frontendBooks, backendBooks };