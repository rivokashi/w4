const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温　摂氏30度で外は暑かった。　:insertx:は出かけた。:inserty:の家に着いた。　:insertz: が倒れてきた。 体重50kgの:insertx:は驚かなかったが、Kは驚いた。:inserty:の家でははじめてことだった。';
const insertX = ['ドラえもん', 'アンパンマン', 'アムロ']
const insertY = ['しずかちゃん', 'てんどんまん', 'シャア']
const insertZ = ['電柱', '煙突', '鉄塔']

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

  if (document.getElementById("us").checked) {
    const temperature =  `華氏${Math.round(30*1.8+32)}度`;
    const weight = `${Math.round(50* 2.2046)}pond`;
    newStory = newStory.replace('摂氏30度', temperature);
    newStory = newStory.replace('50kg', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
