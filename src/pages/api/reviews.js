// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { reviews } from "../../data";
export default (req, res) => {
  res.statusCode = 200;
  res.json(reviews);
};
