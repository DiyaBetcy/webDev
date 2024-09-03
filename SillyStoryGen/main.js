const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
document.querySelector("html").style.backgroundColor = "grey";


function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Arrays for the insert values
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Original story template
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

randomize.addEventListener('click', result);

function result() {
  // Generate random values for the placeholders
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  // Replace the placeholders with the random values in newStory using replaceAll()
  var newStory = storyText.replaceAll(':insertx:', xItem)
                          .replaceAll(':inserty:', yItem)
                          .replaceAll(':insertz:', zItem);

  // Custom name replacement
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Check if UK format is selected and adjust temperature and weight
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + " stone";
    const temperature = Math.round((94 - 32) * 5 / 9) + " centigrade";
    
    // Replace the units in the story
    newStory = newStory.replace('94 fahrenheit', temperature)
                       .replace('300 pounds', weight);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
