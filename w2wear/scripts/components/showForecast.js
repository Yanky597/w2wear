app.component("show-forecast", {
  data() {
    return {
      cityName: this.getLocationInfoFromLocalStorage().cityName,
      currentTemp: localStorage.getItem("currentTemp"),
      currentTimePeriod: localStorage.getItem("currentTimePeriod"),
      currentConditions: localStorage.getItem("currentCondition"),
      hoveringOnImage: false
    };
  },
  mounted() {
    this.updateWeather();
  },
  computed: {

    getImage() {
      const whatShouldIWear = new OuterwearRecommendation(
        localStorage.getItem("currentTemp"),
        localStorage.getItem("currentCondition"),
        localStorage.getItem("currentTimePeriod")
      );
      return whatShouldIWear.GetOuterWearObjectFromConditions().image;
    },
  },

  methods: {
    getLocationInfoFromLocalStorage: () => {
      return JSON.parse(localStorage.getItem(localStorage.currentLocation));
    },
    updateWeather: () => {
      fetchForecast()
        .then((data) => getThisWeeksWeather(data))
        .catch(console.log);
    },
    isInFocus(){
      if(!this.hoveringOnImage){
        this.hoveringOnImage = true;
      }
      else{
        setTimeout(()=>{
          this.hoveringOnImage = false;
        }, 5000) 
      }
    }
  },
  template:
    /* html */
    `
   <div
   class="mainContainer 
          align-content-center 
          align-items-center 
          d-fluid 
          p-3
          d-flex
          justify-content-center
          m-3
          set-background-to-DKpurple
          @on
          "
 >
    <div class="main-left-container text-center w-50 m-0">
        <p class="mb-0 mt-2 h1">{{cityName}}</p>
        <p style="color:#D4D3F9" class="display-1 largerText">{{currentTemp}}&#8457</p> 
        <p class="mb-0 mt-2 h3">{{currentTimePeriod}}</p>
        <p class="mb-0 mt-1">{{currentConditions}}</p>
    </div>
    <div class="main-right-container text-center w-50 w-sm-100 m-0 ">
      <div :class="{weatherImage: hoveringOnImage}" @mouseover="isInFocus">
        <img class="img-fluid" :src="getImage" alt="weather image">
      </div>
    </div>
    </div>
    <accordian></accordian>
 </div>
   `,
});
