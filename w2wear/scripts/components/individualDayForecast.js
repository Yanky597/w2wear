app.component("individual-day-forecast", {
    props:{
        index:Number,
        name:String,
        temp:String,
        condition:String,
        shortForecast:String,
        startTime:String
    },
    template:
      /* html */
      `
          <div v-if="index % 2 == 0" class="individual-forecast-row-hover flex-md-row set-background-to-ltpurple p-2 d-flex flex-column align-items-center justify-content-between">
                <div class="d-flex flex-column align-items-center justify-content-center individual-forecast-style">
                  <span>{{name}}, {{date}}</span>
                  <h4>Temp : {{temp}}
                  </h4>
                  <span class="text-muted text-center">{{shortForecast}}</span>
                </div>
                <div class="align-items-center justify-content-center text-center mt-sm-3">
                  <h5>Recommendation:</h5>
                  <ul>
                    <li class="quicksand-font" v-for="item in recommendations">{{item}}</li>
                  </ul>
                </div>
              <img class="w-25" :src=image alt="images">
          </div>
          <div v-else class="individual-forecast-row-hover  flex-md-row set-background-to-DKpurple light-text-dark-background p-2 d-flex flex-column align-items-center justify-content-between">
                <div class="d-flex flex-column align-items-center justify-content-center individual-forecast-style">
                  <span>{{name}}, {{date}}</span>
                  <h4>Temp : {{temp}}</h4>
                  <span class="text-muted text-center">{{shortForecast}}</span>
                </div>
                <div class="align-items-center justify-content-center text-center mt-sm-3">
                  <h5>Recommendation:</h5>
                  <ul>
                    <li class="quicksand-font" v-for="item in recommendations">{{item}}</li>
                  </ul>
                </div>
              <img class="w-25" :src=image alt="images">
          </div>
  
        `,
    data() {
      return {
          date : "",
          recommendations : []
      };
    },
    computed: {
        image(){

            this.date = (new Date(this.startTime)).toLocaleDateString().substring(0,4) 

            return  this.getRecommendationAndImage(this.temp, this.shortForecast, this.name)
        },

    },
    methods: {
      getRecommendationAndImage(temp, condition, timePeriod) {

        const whatShouldIWear = new OuterwearRecommendation(
          temp,
          condition,
          timePeriod
        );

        this.recommendations = whatShouldIWear.tempAndConditionRecommendations();
        return whatShouldIWear.GetOuterWearObjectFromConditions().image;
      },
    }
  });
  