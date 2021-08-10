function countdown(date){
    const futureDate = new Date(date);
    const todayDate = new Date()
    const timeStampDiff = futureDate.getTime() - todayDate.getTime();

    const days = Math.floor(timeStampDiff / (24 * 60 * 60 * 1000));
    const hours = Math.floor(timeStampDiff / (60 * 60 * 1000));
    const minutes = Math.floor(timeStampDiff / (60 * 1000));
    const seconds = Math.floor(timeStampDiff / 1000);

    const daysLeft = days
    const hoursLeft = hours % 24
    const minutesLeft = minutes % 60
    const secondsLeft = seconds % 60

    const numberOfDays = document.getElementById('numberOfDays')
    numberOfDays.innerText = daysLeft

    const numberOfHours = document.getElementById('numberOfHours')
    numberOfHours.innerText = hoursLeft

    const numberOfMinutes = document.getElementById('numberOfMinutes')
    numberOfMinutes.innerText = minutesLeft

    const numberOfSeconds = document.getElementById('numberOfSeconds')
    numberOfSeconds.innerText = secondsLeft

    return {
        daysLeft,
        hoursLeft,
        minutesLeft,
        secondsLeft,
      }
}

// setInterval(() => {
//   countdown("31 December 2021 23:59:59");
// }, 1000)
