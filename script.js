const gridContainer = document.querySelector(".grid-container");

const computedStyles = window.getComputedStyle(gridContainer);
const containerWidth = parseFloat(computedStyles.getPropertyValue("width"));

let gridSize = 16;

const gridSlider = document.querySelector("#gridRange");

gridSlider.value = "16";
const sliderValue = document.querySelector("#sliderValue");

let color = "#F33A6A";
document.querySelector(".colorShow").style.backgroundColor = color;
document.querySelector("#colorPicker").value = color;

constructGrid();

function constructGrid() {
    gridContainer.style.setProperty('--grid-size', gridSize);
    let gridItemWidth = containerWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = `${gridItemWidth}px`;
        gridItem.style.height = `${gridItemWidth}px`;
        gridContainer.appendChild(gridItem);
    }
    buttons();
}

gridSlider.oninput = function () {
    gridSize = this.value;
    sliderValue.textContent = `${this.value} x ${this.value}`;
    gridContainer.innerHTML = "";
    constructGrid();
};

function buttons() {
    const gridItems = document.querySelectorAll(".grid-item");

    let isEraser = false;

    const clearGrid = document.querySelector(".clearBtn");
    clearGrid.addEventListener("click", () => {
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = "white";
        });
    });

    const eraserBtn = document.querySelector(".eraserBtn");
    const eraserStyle = window.getComputedStyle(eraserBtn);
    eraserBtn.addEventListener("click", () => {
        isEraser = !isEraser;
        const temp = eraserStyle.color;
        eraserBtn.style.color = eraserStyle.backgroundColor;
        eraserBtn.style.backgroundColor = temp;
    });

    const colorBtn = document.querySelector(".colorBtn");
    colorBtn.addEventListener("click", () => {
        document.querySelector("#colorPicker").click();
    });

    document
        .querySelector("#colorPicker")
        .addEventListener("input", function () {
            let selectedColor = this.value;
            color = selectedColor;
            document.querySelector(".colorShow").style.backgroundColor = color;
        });

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener("mouseenter", () => {
            if (!isEraser) {
                gridItem.style.backgroundColor = color;
            } else {
                gridItem.style.backgroundColor = "white";
            }
        });
    });
}
