const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温　摂氏30度で外は暑かった。　:insertx: は出かけた。:inserty: の家に着いた。　:insertz: が倒れてきた。 体重50kgのドラえもんは驚かなかったが、Kは驚いた。しずかちゃんの家でははじめてことだった。';
//const storyText = 'It was US94 fahrenheitUK outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs US300 poundsUK, and it was a hot day.';
const insertX = ['ドラえもん', 'アンパンマン', 'アムロ']
//const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['しずかちゃん', 'てんどんまん', 'シャア']
//const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['電柱', '煙突', '鉄塔']
//const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('K', name);
  }

  if (document.getElementById("US").checked) {
    const temperature =  `${Math.round(30*1.8+32)} centigrade`;
    const weight = `${Math.round(30*2.2046)} stone`;
    newStory = newStory.replace('摂氏30度', temperature);
    newStory = newStory.replace('体重50kg', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
