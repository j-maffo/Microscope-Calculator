//Science 10 Biology Calculator

//  Variables for Background Theme

// Header Variables
let inputHeader = document.getElementById("second-header");
let calcTitle = document.getElementById("top-header");
let calcImage = document.getElementById("image-of-calclator-type");
let instructionInfo = document.getElementById("main-instructions");
let totMagIntructionsHeader = document.getElementById(
  "total-mag-instructions-headers"
);
let imageMagIntructionsHeader = document.getElementById(
  "image-mag-instructions-headers"
);
let scaleBarIntructionsHeader = document.getElementById(
  "scale-bar-instructions-headers"
);
let fovIntructionsHeader = document.getElementById("fov-instructions-headers");
let objectLengthIntructionsHeader = document.getElementById(
  "obj-length-instructions-header"
);

// Input Element Varaibles
let occularPower = document.getElementById("occular-mag");
let objPower1 = document.getElementById("obj-mag1");

let imgLength = document.getElementById("img-height");
let objLength = document.getElementById("obj-height");
let scaleBarMicron = document.getElementById("scale-bar-micron-unit");
let scaleBarCentimeter = document.getElementById("scale-bar-centimeter-unit");

let fovDiameter1 = document.getElementById("field-diameter1");
let totalMag1 = document.getElementById("total-mag-A");
let totalMag2 = document.getElementById("total-mag-B");

let fitNum = document.getElementById("fit-number");
let fitNumfov = document.getElementById("fit-number-fov");

// Answer Element Variables
let outputHeader = document.getElementById("result-header");
let theAnswer = document.getElementById("result");
// Button Variables
let goBackBtn = document.getElementById("return-btn");
let totMagBtn = document.getElementById("total-mag-btn");
let imgMagBtn = document.getElementById("img-mag-btn");
let scaleBarBtn = document.getElementById("scale-bar-btn");
let fovBtn = document.getElementById("fov-btn");
let objLBtn = document.getElementById("obj-length-btn");
// Hidden Elements of First Display Page
imageMagIntructionsHeader.style.display = "none";
totMagIntructionsHeader.style.display = "none";
scaleBarIntructionsHeader.style.display = "none";
fovIntructionsHeader.style.display = "none";
objectLengthIntructionsHeader.style.display = "none";
inputHeader.style.display = "none";

occularPower.style.display = "none";
objPower1.style.display = "none";

totalMag1.style.display = "none";
totalMag2.style.display = "none";
fovDiameter1.style.display = "none";

imgLength.style.display = "none";
objLength.style.display = "none";

fitNumfov.style.display = "none";
fitNum.style.display = "none";

outputHeader.style.display = "none";
theAnswer.style.display = "none";

goBackBtn.style.display = "none";
//Event listeners
totMagBtn.addEventListener("click", totalMagCalc);
imgMagBtn.addEventListener("click", imgMagCalc);
scaleBarBtn.addEventListener("click", scaleBarCalc);
fovBtn.addEventListener("click", fovCalc);
goBackBtn.addEventListener("click", goBackBtnClicked);
objLBtn.addEventListener("click", objLengthCalc);
// Event Functions
function totalMagCalc() {
  // Input
  var occularNum = +document.getElementById("occular-mag-in").value;
  let objMagNum = +document.getElementById("obj-mag-in").value;
  // Process
  document.getElementById("occular-mag-in").value = " ";
  document.getElementById("obj-mag-in").value = " ";
  let totalMag = occularNum * objMagNum;
  var output = `The answer is ${totalMag.toFixed(1)}X`;
  // Hidden Elements
  instructionInfo.style.display = "none";
  imageMagIntructionsHeader.style.display = "none";
  scaleBarIntructionsHeader.style.display = "none";
  fovIntructionsHeader.style.display = "none";
  imgMagBtn.style.display = "none";
  scaleBarBtn.style.display = "none";
  fovBtn.style.display = "none";
  objLBtn.style.display = "none";
  // Shown Elements
  totMagIntructionsHeader.style.display = "inherit";
  outputHeader.style.display = "inherit";
  theAnswer.style.display = "inherit";
  totMagBtn.style.display = "block";
  inputHeader.style.display = "inherit";
  occularPower.style.display = "inherit";
  objPower1.style.display = "inherit";
  goBackBtn.style.display = "block";
  // Output
  calcImage.src = "images/Total Magnification.jpg";
  totMagBtn.style.width = "180px";
  totMagBtn.innerHTML = "Calculate";
  totMagBtn.style.margin = "auto";
  goBackBtn.style.margin = "auto";
  theAnswer.innerHTML = output;
  calcTitle.innerHTML = "Total Magnification Calculator";
}
function goBackBtnClicked() {
  // Input
  // Process
  // Shown Elements
  instructionInfo.style.display = "inherit";
  totMagBtn.style.display = "inherit";
  imgMagBtn.style.display = "inherit";
  scaleBarBtn.style.display = "inherit";
  fovBtn.style.display = "inherit";
  objLBtn.style.display = "inherit";
  //Hidden Elements
  objectLengthIntructionsHeader.style.display = "none";
  totMagIntructionsHeader.style.display = "none";
  imageMagIntructionsHeader.style.display = "none";
  scaleBarIntructionsHeader.style.display = "none";
  fovIntructionsHeader.style.display = "none";
  inputHeader.style.display = "none";

  occularPower.style.display = "none";
  objPower1.style.display = "none";
  totalMag1.style.display = "none";
  totalMag2.style.display = "none";
  fovDiameter1.style.display = "none";
  imgLength.style.display = "none";
  objLength.style.display = "none";
  fitNum.style.display = "none";
  fitNumfov.style.display = "none";

  outputHeader.style.display = "none";
  theAnswer.style.display = "none";
  goBackBtn.style.display = "none";
  // Output
  calcImage.src = "images/Microscope.jpg";
  calcImage.style.width = "300";

  totMagBtn.style.textAlign = "center";
  totMagBtn.style.width = "auto";
  document.getElementById("top-btns").style.display = "initial";
  document.getElementById("bottom-btns").style.display = "initial";

  objLBtn.innerHTML = "Object length";
  totMagBtn.innerHTML = "Total Magnification of Microscope";
  imgMagBtn.innerHTML = "Magnification of Image";
  scaleBarBtn.innerHTML = "Scale Bar";
  fovBtn.innerHTML = "Field of View";
  fovBtn.style.marginTop = "20px";
  calcTitle.innerHTML = "Microscope Calculator";
}
function imgMagCalc() {
  // Input
  let imgLengthNum = +document.getElementById("img-height-in").value;
  let objLengthNum = +document.getElementById("obj-height-in").value;
  // Process
  let magOfImg = imgLengthNum / objLengthNum;
  var output2 = `The image is ${magOfImg.toFixed(
    2
  )}X bigger in size than the object`;
  document.getElementById("img-height-in").value = " ";
  document.getElementById("obj-height-in").value = " ";
  // Shown Elements
  imageMagIntructionsHeader.style.display = "inherit";
  imgMagBtn.style.display = "block";
  goBackBtn.style.display = "block";
  inputHeader.style.display = "inherit";
  imgLength.style.display = "inherit";
  objLength.style.display = "inherit";
  outputHeader.style.display = "inherit";
  theAnswer.style.display = "inherit";
  // goBackBtn.style.display = "inherit";
  // Hidden Elements
  totMagIntructionsHeader.style.display = "none";
  instructionInfo.style.display = "none";
  scaleBarIntructionsHeader.style.display = "none";
  fovIntructionsHeader.style.display = "none";
  totMagBtn.style.display = "none";
  scaleBarBtn.style.display = "none";
  fovBtn.style.display = "none";
  objLBtn.style.display = "none";
  // Output
  calcImage.src = "images/Image Magnification.jpg";
  calcImage.style.width = "300";
  imgMagBtn.style.margin = "auto";
  goBackBtn.style.margin = "auto";
  imgMagBtn.innerHTML = "Calculate";
  theAnswer.innerHTML = output2;
  calcTitle.innerHTML = "Magnification of Image Calculator";
}
function scaleBarCalc() {
  // Input
  let imgLengthNum = +document.getElementById("img-height-in").value;
  let objLengthNum = +document.getElementById("obj-height-in").value;
  // Process
  let scaleBarOfImg = objLengthNum / imgLengthNum; // um is obj cm is img
  var output3 = `1 cm of the drawing represents ${scaleBarOfImg.toFixed(
    2
  )} µm of the actual object.`;
  document.getElementById("img-height-in").value = " ";
  document.getElementById("obj-height-in").value = " ";
  // Shown Elements
  scaleBarIntructionsHeader.style.display = "inherit";
  scaleBarBtn.style.display = "block";
  inputHeader.style.display = "inherit";
  imgLength.style.display = "inherit";
  objLength.style.display = "inherit";
  outputHeader.style.display = "inherit";
  theAnswer.style.display = "inherit";
  goBackBtn.style.display = "block";

  // Hidden Elements
  totMagIntructionsHeader.style.display = "none";
  instructionInfo.style.display = "none";
  imageMagIntructionsHeader.style.display = "none";
  fovIntructionsHeader.style.display = "none";
  totMagBtn.style.display = "none";
  imgMagBtn.style.display = "none";
  fovBtn.style.display = "none";
  objLBtn.style.display = "none";
  // Output
  calcImage.src = "images/Scale Bar.PNG";

  scaleBarBtn.innerHTML = "Calculate";
  scaleBarBtn.style.margin = "auto";
  goBackBtn.style.margin = "auto";
  theAnswer.innerHTML = output3;
  calcTitle.innerHTML = "Scale Bar Calculator";
}
function fovCalc() {
  // Input
  let totMag1Num = +document.getElementById("tot-mag1-in").value;
  let firstFovDiameter = +document.getElementById("first-fov-in").value;
  let totMag2Num = +document.getElementById("tot-mag2-in").value;
  // Process
  let fovDiameterResult = (totMag1Num * firstFovDiameter) / totMag2Num;
  var output4 = `The field of view is ${fovDiameterResult.toFixed(2)} mm.`;
  console.log(output4);
  document.getElementById("tot-mag1-in").value = " ";
  document.getElementById("first-fov-in").value = " ";
  document.getElementById("tot-mag2-in").value = " ";

  // Shown Elements
  fovIntructionsHeader.style.display = "inherit";
  fovBtn.style.display = "block";
  inputHeader.style.display = "inherit";
  totalMag1.style.display = "inherit";
  totalMag2.style.display = "inherit";
  outputHeader.style.display = "inherit";
  theAnswer.style.display = "inherit";
  goBackBtn.style.display = "block";
  fovDiameter1.style.display = "inherit";
  // Hidden Elements
  objectLengthIntructionsHeader.style.display = "none";
  totMagIntructionsHeader.style.display = "none";
  instructionInfo.style.display = "none";
  imageMagIntructionsHeader.style.display = "none";
  scaleBarIntructionsHeader.style.display = "none";
  totMagBtn.style.display = "none";
  imgMagBtn.style.display = "none";
  scaleBarBtn.style.display = "none";
  objLBtn.style.display = "none";

  // Output

  calcImage.src = "images/field-of-view.jpg";

  fovBtn.innerHTML = "Calculate";
  fovBtn.style.margin = "auto";
  goBackBtn.style.margin = "auto";

  theAnswer.innerHTML = output4;
  calcTitle.innerHTML = "Field of View Calculator";
}
function objLengthCalc() {
  // Input
  let fitNumValue = +document.getElementById("fit-num-in").value;
  let fitFovNum = +document.getElementById("fit-num-fov-in").value;
  // Process
  let calculatedObjLength = fitFovNum / fitNumValue;
  var output5 = `The length of the object is ${calculatedObjLength.toFixed(
    2
  )} mm.`;
  document.getElementById("fit-num-in").value = " ";
  document.getElementById("fit-num-fov-in").value = " ";
  // Shown Elements
  objectLengthIntructionsHeader.style.display = "inherit";
  objLBtn.style.display = "block";
  inputHeader.style.display = "inherit";
  fitNum.style.display = "inherit";
  fitNumfov.style.display = "inherit";
  outputHeader.style.display = "inherit";
  theAnswer.style.display = "inherit";
  goBackBtn.style.display = "block";
  // Hidden Elements

  fovIntructionsHeader.style.display = "none";
  totMagIntructionsHeader.style.display = "none";
  instructionInfo.style.display = "none";
  imageMagIntructionsHeader.style.display = "none";
  scaleBarIntructionsHeader.style.display = "none";
  totMagBtn.style.display = "none";
  imgMagBtn.style.display = "none";
  scaleBarBtn.style.display = "none";
  fovBtn.style.display = "none";
  // Output
  calcImage.src = "images/Object Length.png";

  objLBtn.innerHTML = "Calculate";
  objLBtn.style.margin = "auto";
  goBackBtn.style.margin = "auto";
  theAnswer.innerHTML = output5;
  calcTitle.innerHTML = "Object Length Calculator";
}
