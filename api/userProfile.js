import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { user, updateField, newValue } = req.body;

    if (!user || !updateField || !newValue) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const db = JSON.parse(fs.readFileSync('./database.json', 'utf8'));
    const userIndex = db.users.findIndex(u => u.username === user);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found." });
    }

    db.users[userIndex][updateField] = newValue;
    fs.writeFileSync('./database.json', JSON.stringify(db));

    return res.status(200).json({ message: "Profile updated successfully." });
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
