import News from "../model/news-schema.js";

export const getNews = async (request, response) => {
  try {
    const allNews = await News.find({});

    response.status(200).json(allNews);
  } catch (error) {
    response.status(500).json({ message: data.message });
    console.log("Getting Error while Fetching data from Database");
  }
};
