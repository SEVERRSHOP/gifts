var boxes = document.getElementsByClassName("box_img");
var present = document.getElementById("present");

for (let i = 0; i < boxes.length; i++) {
  boxes.item(i).onclick = function () {
    present.style.display = "block";
    document.getElementById("present_img").src = `../../src/present_${i}.png`;

  };
}

document.getElementById("cross").onclick = () =>
  (present.style.display = "none");

console.log("test out");
console.log(Math.random() * 5);
