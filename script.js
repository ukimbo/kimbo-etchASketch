const gridContainer = document.querySelector(".grid-container");

const computedStyles = window.getComputedStyle(gridContainer);
const containerWidth = parseFloat(computedStyles.getPropertyValue("width"));

const gridSize = 16;

const gridItemWidth = containerWidth / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${gridItemWidth}px`;
    gridItem.style.height = `${gridItemWidth}px`;
    gridContainer.appendChild(gridItem);
}
