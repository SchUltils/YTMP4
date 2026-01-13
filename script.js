// --- REPLACE THIS WITH YOUR REPLIT APP URL ---
const API_BASE = "https://30047524-15d3-4672-bfac-8bf88fee153f-00-tm90bvmsvy9h.spock.replit.dev/";

async function convert() {
  const url = document.getElementById("url").value.trim();
  const status = document.getElementById("status");
  const download = document.getElementById("download");

  if (!url) {
    status.textContent = "Please enter a URL.";
    return;
  }

  download.style.display = "none";
  status.textContent = "Converting...";

  try {
    const res = await fetch(API_BASE + "/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });

    const data = await res.json();

    if (data.error) {
      status.textContent = "Error: " + data.error;
      return;
    }

    status.textContent = "✅ Done!";
    download.href = API_BASE + data.download_url;
    download.textContent = "📥 Download MP4";
    download.style.display = "block";

  } catch (err) {
    console.error(err);
    status.textContent = "Server error, try again later.";
  }
}
