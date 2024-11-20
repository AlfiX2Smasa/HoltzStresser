import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { user } = req.body;
  if (!user) {
    return res.status(400).json({ error: "Missing user field." });
  }

  const token = uuidv4();
  // Save token to database with expiration
  // Example: Save { user, token, expires: Date.now() + 86400000 } to `database.json`

  return res.status(200).json({ token, expiresIn: "24 hours" });
}
