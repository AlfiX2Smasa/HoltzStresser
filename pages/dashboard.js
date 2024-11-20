export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Launch an Attack</h2>
      <form method="POST" action="/api/attack">
        <label>Target URL</label>
        <input type="url" name="target" required />
        <label>Duration (seconds)</label>
        <input type="number" name="duration" required />
        <label>Attack Method</label>
        <select name="method">
          <option value="hold">Hold</option>
          <option value="bypass">Bypass Cloudflare</option>
          <option value="flood">Flood</option>
          <option value="tcp_ip">TCP/IP</option>
        </select>
        <button type="submit">Start Attack</button>
      </form>
    </div>
  );
}
