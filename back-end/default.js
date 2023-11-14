import { data } from "./constants/data.js";
import News from "./model/news-schema.js";

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Default Data Inserted Successfully in Database");
  } catch (error) {
    console.log("Error while Inserting Default Data : ", error.message);
  }
};

export default DefaultData;
