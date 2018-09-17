let avenues = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear() - 1;
  }
}

class Route{
  constructor(start, end){
    this.start = start;
    this.end = end;
  }
  blocksTravelled(){
    return Math.abs(this.start.vertical - this.end.vertical) + Math.abs(avenues.indexOf(this.start.horizontal) - avenues.indexOf(this.end.horizontal));
  }
  estimatedTime(peak){
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
