app.component("get-recommendations", {

  template:
    /* html */
    `
    <div>
      <h1 class="text-center set-color-to-purple-dk mt-5">Our Recommendation</h1>
    </div>
    <section class="p-4 d-flex flex-column flex-md-row align-content-center 
    align-items-center">
      <div class="w-75">
        <img class="img-fluid" :src=image alt="outerwear item">
      </div>
      <div class="p-3 text-background">
         <ul class="custom-text-left">
             <li class="custom-flex-row" v-for="(item, index) in getRecommendations" :key="index">
                <div class="custom-circle m-3"></div>
                <h4 class="display-4">{{item}}</h4>
             </li>
         </ul>
      </div>
    </section>
    `,
  data() {
    return {
      outerWearItems: this.getRecommendations,
      recommendationImage: this.image
    };
  },
  computed: {
    getRecommendations() {
      const userTemp =  localStorage.getItem("userTemp")
      const whatShouldIWear = new OuterwearRecommendation(
        parseInt(localStorage.getItem("currentTemp")) + parseInt(userTemp),
        localStorage.getItem("currentCondition"),
        localStorage.getItem("currentTimePeriod")
      );

      return whatShouldIWear.tempAndConditionRecommendations();
    },
    image(){
      const userTemp =  localStorage.getItem("userTemp")
      const whatShouldIWear = new OuterwearRecommendation(
        parseInt(localStorage.getItem("currentTemp")) + parseInt(userTemp),
        localStorage.getItem("currentCondition"),
        localStorage.getItem("currentTimePeriod")
      );
      return whatShouldIWear.getClothingItemImage()
    }
  },
});
