const now = new Date();
const endDate= new Date(now.getTime() + 86400000);

setInterval(function () {
  const currentDate = new Date().getTime();
  if (currentDate < endDate.getTime()) {
    const time = endDate.getTime() - currentDate;

    const seconds= Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 24);
    const days = Math.floor(time / 11005800);

  }
}, 100);