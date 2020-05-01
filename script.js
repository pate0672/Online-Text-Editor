/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
  // CODE GOES HERE
  let text = document.getElementById("text-input").value;
  let output = document.getElementById("text-output");
  output.innerText = text;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
  elem.classList.toggle("active");
  let className = document.getElementById("text-output").classList.value;
  console.log(className);

  if (className.includes("underline")) {
    document.getElementById("text-output").classList.remove("underline");
  } else {
    document.getElementById("text-output").classList.add("underline");
  }

  // document.getElementById("text-output").classList.add("underline");
  // document.getElementById("text-output").classList.remove("underline");
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
  // elem.classList.toggle("active");
  console.log(alignType);
  document.getElementById("text-output").style.textAlign = alignType;

  let buttonsList = document.getElementsByClassName("align");
  for (i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove("active");
  }
  elem.classList.add("active");
}

function largeButton(elem) {
  document.getElementById("small").classList.remove("active");
  document.getElementById("regular").classList.remove("active");
  elem.classList.toggle("active");
  let className = document.getElementById("text-output").classList.value;

  if (className.includes("large")) {
    document.getElementById("text-output").classList.remove("large");
  } else {
    document.getElementById("text-output").classList.remove("regular", "small");
    document.getElementById("text-output").classList.add("large");
  }
}

function regularButton(elem) {
  document.getElementById("large").classList.remove("active");
  document.getElementById("small").classList.remove("active");
  elem.classList.toggle("active");
  let className = document.getElementById("text-output").classList.value;

  if (className.includes("regular")) {
    document.getElementById("text-output").classList.remove("regular");
  } else {
    document.getElementById("text-output").classList.remove("large", "small");
    document.getElementById("text-output").classList.add("regular");
  }
}

function smallButton(elem) {
  document.getElementById("large").classList.remove("active");
  document.getElementById("regular").classList.remove("active");
  elem.classList.toggle("active");
  let className = document.getElementById("text-output").classList.value;

  if (className.includes("small")) {
    document.getElementById("text-output").classList.remove("small");
  } else {
    document.getElementById("text-output").classList.remove("large", "regular");
    document.getElementById("text-output").classList.add("small");
  }
}

function addColour(elem, colourType) {
  document.getElementById("text-output").style.color = colourType;

  let buttonsList = document.getElementsByClassName("colour");
  for (i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove("active");
  }
  elem.classList.add("active");
}


var voiceList = document.querySelector("#voiceList");
var btnSpeak = document.querySelector("#btnSpeak");
// var output = document.getElementById("text-output").innerText;
let output = document.getElementById("text-output");
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener("click", () => {
  var toSpeak = new SpeechSynthesisUtterance(output.innerText);
  var selectedVoiceName = voiceList.selectedOptions[0].getAttribute(
    "data-name"
  );
  voices.forEach(voice => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
});

function PopulateVoices() {
  voices = synth.getVoices();
  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  voiceList.innerHTML = "";
  voices.forEach(voice => {
    var listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);
  });

  voiceList.selectedIndex = selectedIndex;
}
