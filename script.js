function timeImg() {

  const clock = document.querySelector('.time') // time in the screen
  const background = document.body // backgroung img 
  const img = document.getElementById("img") // the circle img

  clock.innerText = getTime() // iniciate time in the clock


  // This function is to check the time and change the images according with time
  checkTime("18:00:00")
  function checkTime(time) {

    // in the morning
    if (time >= "06:00:00" && time < "13:00:00") {
      img.src = "./public/sunrise.jpg"
      background.style.backgroundImage = "url('./public/bcSunrise.jpg')"

      // in the afternoon
    } else if (time >= "13:00:00" && time < "19:00:00") {
      img.src = "./public/sunset.jpg"
      background.style.backgroundImage = "url('./public/bcSunset.jpg')"

      // in the evening
    } else if (time >= "19:00:00" || time < "06:00:00") {
      img.src = "./public/moon.avif"
      background.style.backgroundImage = "url('./public/night.jpg')"

    }
  }


  // This function is to get only time  and return
  function getTime() {
    let time = new Date().toLocaleTimeString({ hour12: false })
    return time
  }

  //  This function is to update time every second
  // function count() {
  //   setInterval(() => {
  //     let time = getTime()
  //     clock.innerText = time
  //     checkTime(time)
  //   }, 1000)
  // }

  // checkTime(getTime())
  // count()

}

timeImg()