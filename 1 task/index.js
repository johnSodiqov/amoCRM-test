const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timer = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timer)
      }
      let hour = Math.floor(seconds / 3600)
      let minute = Math.floor(seconds / 60)
      let second = Math.floor(seconds % 60)

      hour = hour < 10 ? "0" + hour : hour
      minute = minute < 10 ? "0" + minute : minute
      second = second < 10 ? "0" + second : second

      timerEl.innerHTML = hour + ":" + minute + ":" + second

      seconds--
    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  let reg = /[A-Za-zA-Яа-яЁё]/g;

  inputEl.value = inputEl.value.replace(reg, "")

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds - 1);

  inputEl.value = '';
});

