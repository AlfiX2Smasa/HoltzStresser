export default async function validateToken(token) {
  // Fetch token from database.json and validate expiration
  const tokens = require("../database.json").tokens;
  const tokenData = tokens.find((t) => t.token === token);
  if (!tokenData || tokenData.expires < Date.now()) {
    return false;
  }
  return true;
}
