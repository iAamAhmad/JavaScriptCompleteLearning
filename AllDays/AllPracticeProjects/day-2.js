// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);
let name;

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = (event) => {
  let days;

  if (event === 'Marathon') {
    
  } else if (event === 'Triathlon') {
    
  } else if (event === 'Pentathlon') {
    
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (event) => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (event) => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent('Ahmad',event);
logTime("Ahmad", days);
