const API_ROOT = process.env.REACT_APP_API_BASE || "http://localhost:8080";

async function post(path, body) {
  const res = await fetch(`${API_ROOT}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = data?.message || data || res.statusText;
    throw new Error(err);
  }
  return data;
}

async function get(path, token) {
  const res = await fetch(`${API_ROOT}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default { post, get };
