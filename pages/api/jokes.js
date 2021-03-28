import { getRandomJoke } from "../../lib/jokes";

export default async (req, res) => {
  try {
    const joke = await getRandomJoke();

    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error });
  }
};
