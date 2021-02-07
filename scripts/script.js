let defaultRandomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = "#" + defaultRandomColor;
document.getElementById('clickChangeBtn').innerHTML = "Background-color hex: " + "#" + defaultRandomColor;


let changeBgColor = () => {
    let defaultRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + defaultRandomColor;
    document.getElementById('clickChangeBtn').innerHTML = "Background-color Hex: " + '#' + defaultRandomColor;
}

document.getElementById('clickChangeBtn').addEventListener("click", changeBgColor);
