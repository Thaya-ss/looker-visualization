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

// Top-left section
const topLeftContainer = document.createElement("div");
topLeftContainer.style.gridColumn = "1 / 2"; // Top left
topLeftContainer.style.paddingBottom = "20px"; // Add spacing below
topLeftContainer.innerHTML = `
  <div style="font-weight: bold; font-size: 16px;">Reports-SecondaryDemos</div>
  <div>1-Version 1</div>
  <div>29/11/2024</div>
`;

// Add the top-left content to the container
layoutContainer.appendChild(topLeftContainer);

// Bottom-right section
const bottomRightContainer = document.createElement("div");
bottomRightContainer.style.gridColumn = "2 / 3"; // Bottom right
bottomRightContainer.style.padding = "5px";
bottomRightContainer.innerHTML = `
  <div style="font-weight: bold;">Presented To:</div>
  <div>1530 Mortgage</div>
  <br>
  <div style="font-weight: bold;">Presented By:</div>
  <div>ab devilliers<br>vinodkumar.n@operative.com</div>
  <br>
  <div style="font-weight: bold;">Primary Demo:</div>
  <div>A18+</div>
  <br>
  <div style="font-weight: bold;">Flight Dates:</div>
  <div>30/12/2024 - 28/9/2025</div>
`;

// Add the bottom-right section to the container
layoutContainer.appendChild(bottomRightContainer);

// Append the layout container to the body
document.getElementById('vis').style.display = "none";
document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#f8f8f8"; // Light gray background
document.body.appendChild(layoutContainer);
