class Driver {
  constructor(name,startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(current_time){
    let current_year = new Date(current_time, 1, 1)
    let totalYears = (current_year - this.startDate)
    totalYears = totalYears/(365*24*60*60*1000)
    return Math.round(totalYears)
  }
}

class Route {
  constructor(beginning_location,ending_location){
    this.beginning_location = beginning_location
    this.ending_location = ending_location
  }
  blocksTravelled(){
  var vertical = Math.abs(parseInt(this.beginning_location.vertical - this.ending_location.vertical))
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  var beginning_horizontal = eastWest.indexOf(this.beginning_location.horizontal)
  var ending_horizontal = eastWest.indexOf(this.ending_location.horizontal)
  var horizontal = Math.abs(beginning_horizontal - ending_horizontal)
  return horizontal + vertical
  }
  estimatedTime(peak_Time){
    if(peak_Time == true){
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3
  }
}
