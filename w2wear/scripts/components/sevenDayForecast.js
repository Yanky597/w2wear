app.component("seven-day-forecast", {
  template:
    /* html */
    `
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="set-background-to-DKpurple w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 class="display-4">7 Day Forecast</h1>
        <div class="d-flex justify-content-center align-items-center flex-row mb-3">
          <strong class="text-light m-2">Get Date:</strong>
          <span class="date-input">
            <input :min=minDate :max=maxDate v-model="selectedDate" id="datePickerId" type="date" name="getDate" value="">
          </span>
        </div>
      </div>
      </div>
    <ul class="mt-2">
    <li class="p-1" v-for="(day, index) in getForecastFromLocalStorage" :key="index">
        <individual-day-forecast 
        :index="index" 
        :name="day.name" 
        :temp="day.temperature" 
        :shortForecast="day.shortForecast" 
        :startTime="day.startTime"
        ></individual-day-forecast>
    </li>
    <ul>

      `,
  data() {
    return {
      selectedDate:"",
      name:"",
      temp:"",
      condition:"",
      startTime:"",
      myValues : []
    };
  },
  computed: {
    getForecastFromLocalStorage() {
      const sevenDayForecast = JSON.parse(localStorage.getItem("SevenDayForecast"));
      if(this.selectedDate == ""){
        return sevenDayForecast;
      }
      else{
        for(element of sevenDayForecast){
          let currentDate = new Date(element.startTime).toISOString().split("T")[0]
          if(currentDate === this.selectedDate){
            return [element]
          }
        }
      }
    },
    minDate(){
      return (new Date().toISOString().split("T")[0]);
    },
    maxDate(){
      const myDate = new Date()
      return new Date(myDate.setDate(myDate.getDate() + 6)).toISOString().split("T")[0];
    }
  },

  methods: {
    getDate(value) {
      return new Date(value).toString().substring(0, 15);
    },
    getTime(value) {
      return new DatevaluetoLocaleTimeString();
    },
    getImage(temp, condition, timePeriod) {
      const whatShouldIWear = new OuterwearRecommendation(
        temp,
        condition,
        timePeriod
      );
      return whatShouldIWear.GetOuterWearObjectFromConditions().image;
    },
  }
});
