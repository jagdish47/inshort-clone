import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    setNews(response.data);
    console.log("Response : ", response.data);
  };

  return (
    <>
      {news.map((item, idx) => (
        <Article item={item} />
      ))}
    </>
  );
};

export default Articles;
