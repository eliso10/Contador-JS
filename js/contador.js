let count = 0;
let timerInterval;

function increment() {
  count++;
  updateCount();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

function updateCount() {
  document.getElementById('count').textContent = count;
}

function startTimer() {
  const inputTime = parseInt(document.getElementById('inputTime').value);
  
  if (!Number.isNaN(inputTime) && inputTime > 0) {
    let seconds = inputTime;
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
      seconds--;
      
      if (seconds >= 0) {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
        document.getElementById('timerDisplay').textContent = `${minutes}:${remainingSeconds}`;
      } else {
        clearInterval(timerInterval);
        alert('¡Se termino el tiempo 🥳!');
      }
    }, 1000);
  }
}