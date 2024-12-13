// Create a container for the entire layout
const layoutContainer = document.createElement("div");
layoutContainer.style.display = "grid";
layoutContainer.style.gridTemplateColumns = "1fr 1fr"; // 2 columns
layoutContainer.style.padding = "20px";
layoutContainer.style.fontFamily = "Arial, sans-serif";
layoutContainer.style.fontSize = "14px";
layoutContainer.style.lineHeight = "1.8";
layoutContainer.style.backgroundColor = "#ffffff"; // White background
layoutContainer.style.color = "#000000"; // Black text
layoutContainer.style.border = "1px solid #000"; // Border for structure

// Array of the layout sections and their content
const layoutData = [
  { key: "Reports-SecondaryDemos", value: "" },
  { key: "1-Version 1", value: "" },
  { key: "29/11/2024", value: "" },
  { key: "Presented To:", value: "1530 Mortgage" },
  { key: "Presented By:", value: "ab devilliers<br>vinodkumar.n@operative.com" },
  { key: "Primary Demo:", value: "A18+" },
  { key: "Flight Dates:", value: "30/12/2024 - 28/9/2025" },
];

// Populate the layout container
layoutData.forEach((item) => {
  const cell = document.createElement("div");
  cell.style.gridColumn = item.value ? "span 1" : "span 2"; // If it has value, keep it in one column
  cell.style.padding = "5px";
  cell.style.fontWeight = item.key.includes("Primary Demo") || item.key.includes("Flight Dates") ? "bold" : "normal";
  cell.innerHTML = `<span style="font-weight: bold;">${item.key}</span> ${item.value}`;
  layoutContainer.appendChild(cell);
});

// Append the layout container to the body
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#f8f8f8"; // Light gray background
document.body.appendChild(layoutContainer);
