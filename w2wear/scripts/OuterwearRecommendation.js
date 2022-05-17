
class OuterwearRecommendation {
  /* 
        1. getTemp()
        2. getWeather()
        3. boolean rain?
        3. WeatherLogic(temp, rainOrShine)
        
    */

  constructor(temp, conditions, timeOfDay) {
    this.temp = temp;
    this.conditions = conditions;
    this.timeOfDay = timeOfDay;
  }

  tempAndConditionRecommendations () {
    let results = [];

    for (let index = 0; index < this.getOuterwearFromTemp().length; index++) {
      results.push(this.getOuterwearFromTemp()[index]);
    }

    for (let index = 0; index < this.GetOuterWearObjectFromConditions().OuterWear.length; index++) {
      if(this.GetOuterWearObjectFromConditions().OuterWear[index] != '')
        results.push(this.GetOuterWearObjectFromConditions().OuterWear[index]);
    }

    return results;

  }

  getClothingItemImage(){
    let results = this.tempAndConditionRecommendations()
    let path = "./images/clothingImages/"
    
    for (let word of results) {
      if(word === "Rain Jacket"){
        return path + "umbrella.png";
      }
    }

    if(this.temp < 50){
      return path + "coatIcon.png";
    }
    else if(this.getTempRange() == "brisk"){
      return path + "jacket.png";
    }
    else if(this.getTempRange() == "warmish"){
      return path + "sweater.png";
    }
    else {
      return path + "sunglasses.png";
    }
  }

  GetOuterWearObjectFromConditions() {

    const conditionMap = {
        sunny : { OuterWear : [""], image: "./images/sun.png"},
        cloudy : { OuterWear : [""], image: "./images/cloud.png"},
        fog : { OuterWear : [""], image: "./images/fog.png"},
        partlyCloudy : { OuterWear : [""], image: "./images/partlyCloudy.png"},
        rain : { OuterWear : ["Rain Jacket", "Rain Boots/Shoes"], image: "./images/rain.png"},
        heavyRain : { OuterWear : ["Rain Jacket", "Rain Boots/Shoes"], image: "./images/rainStorm.png"},
        thunderStorm : { OuterWear : ["Rain Jacket", "Rain Boots/Shoes"], image: "./images/thunderStorm.png"},
        snow : { OuterWear : ["Snow Boots"], image: "./images/snow.png"},
        blizzard : { OuterWear : ["Snow Boots"], image: "./images/blizzard.png"},
        tornado : { OuterWear : [""], image: "./images/tornado.png"},
        windy : { OuterWear : [""], image: "./images/windy.png"}
    }
    return conditionMap[this.getWeatherConditionKey()];
  }

  getConditionImage(pathToImage, weatherConditionsObject){
    return pathToImage + weatherConditionsObject.image;
  }

  getWeatherConditionKey(){
    const currentConditions = this.conditions;
    
    if(this.getWeatherDescription(currentConditions, "thunderstorms")){
      return "thunderStorm";
    }
    else if(this.getWeatherDescription(currentConditions, "rain") || this.getWeatherDescription(currentConditions, "showers")){
      return "rain";
    }
    else if(this.getWeatherDescription(currentConditions, "sunny") && (this.getWeatherDescription(currentConditions, "partly") || this.getWeatherDescription(currentConditions, "partly"))){
      return "partlyCloudy";
    }
    else if(this.getWeatherDescription(currentConditions, "cloudy")){
      return "cloudy";
    }
    else if(this.getWeatherDescription(currentConditions, "cloudy") && this.getWeatherDescription(currentConditions, "partly") ){
      return "partlyCloudy";
    }
    else if(this.getWeatherDescription(currentConditions, "sunny")){
      return "sunny";
    }
    else if(this.getWeatherDescription(currentConditions, "fog")){
      return "fog";
    }
    return "cloudy"
  }


  
  getWeatherDescription(weatherCondition, target){
    const wordArray = weatherCondition.toLowerCase().split(" ");

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] == target){
            return true
        }
    }

    return false;

  }


  getOuterwearFromTemp() {
    const mapTempToOuterWear = {
      extremeCold: ["It's Too Cold. Don't Go Outside"],
      veryCold: [
        "Heavy Coat",
        "Extra Layers",
        "Hat",
        "Scarf",
        "Gloves",
        "Warm Boots",
      ],
      cold: ["Hat", "Scarf", "Gloves", "Warm Boots", "Heavy Coat"],
      mildlyCold: ["Hat", "Coat"],
      brisk: ["Jacket"],
      warmish: ["Sweater"],
      perfect: ["Light Attire, It's Perfect Outside"],
      veryWarm: ["Extra Light Attire"],
      hot: ["Yup, It's Shorts Weather"],
      veryHot: ["Extra Extra Light, Make Sure To Hydrate! It's Hot Out There"],
      extremeHot: ["It's Too Hot. Don't Go Outside"]
    };
    return mapTempToOuterWear[this.getTempRange()];
  }

  getTempRange() {
    const currentTemp = parseInt(this.temp);

    if (currentTemp < 1) {
      return "extremeCold";
    }
    else if(this.isInRange(currentTemp, 0, 31)){
      return "veryCold";
    }
    else if(this.isInRange(currentTemp, 32, 44)){
      return "cold";
    }
    else if(this.isInRange(currentTemp, 45, 50)){
      return "mildlyCold";
    }
    else if(this.isInRange(currentTemp, 51, 56)){
      return "brisk";
    }
    else if(this.isInRange(currentTemp, 57, 64)){
      return "warmish";
    }
    else if(this.isInRange(currentTemp, 65, 75)){
      return "perfect";
    }
    else if(this.isInRange(currentTemp, 76, 85)){
      return "veryWarm";
    }
    else if(this.isInRange(currentTemp, 86, 94)){
      return "hot";
    }
    else if(this.isInRange(currentTemp, 95, 100)){
      return "veryHot";
    }
    else{
      return "extremeHot";
    }

  }

  isInRange(input, LowerBoundInclusive, upperBoundInclusive) {
    return input >= LowerBoundInclusive && input <= upperBoundInclusive;
  }

}
