export const API_BASE = "https://parallel-image-processing-production.up.railway.app";

export async function uploadImages(formData) {
  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}

export async function getStatus(sessionId) {
  const res = await fetch(`${API_BASE}/status/${sessionId}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    throw new Error("Session not found");
  }

  return res.json();
}

export async function getResults(sessionId) {
  const res = await fetch(`${API_BASE}/results/${sessionId}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    throw new Error("Session not found");
  }

  return res.json();
}
