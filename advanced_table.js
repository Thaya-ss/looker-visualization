// Create a container for the entire table
const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr 1fr 1fr"; // 3 columns
container.style.backgroundColor = "#d3d3d3"; // Light gray background
container.style.padding = "20px";
container.style.gap = "20px";
container.style.fontFamily = "Arial, sans-serif";
container.style.fontSize = "14px";
container.style.color = "black";

// Array of the content to be displayed
const data = [
  { key: "Deal ID:", value: "172519" },
  { key: "Plan Class:", value: "Sales (Local)" },
  { key: "Agency:", value: "1530 Mortgage" },
  { key: "End Date:", value: "28/9/2025" },
  { key: "Market:", value: "Baltimore, Las Vegas" },
  { key: "Status:", value: "Speculative" },
  { key: "Advertiser:", value: "!! Advertisement" },
  { key: "Genre:", value: "Sports" },
  { key: "Station:", value: "KOMO6, WBF" },
  { key: "Marketing Coordinator:", value: "ab devilliers" },
  { key: "Start Date:", value: "30/12/2024" },
  { key: "Primary Demo:", value: "A18+" },
];

// Populate the container with key-value pairs
data.forEach((item) => {
  const element = document.createElement("div");
  element.style.fontWeight = item.key.includes("Primary Demo") || item.key.includes("Start Date") ? "bold" : "normal";
  element.innerHTML = `<span style="font-weight: bold;">${item.key}</span> ${item.value}`;
  container.appendChild(element);
});

// Append the container to the body
document.body.style.margin = "0";
document.getElementById('vis').style.display = "none";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#f0f0f0"; // Light background
document.body.appendChild(container);
