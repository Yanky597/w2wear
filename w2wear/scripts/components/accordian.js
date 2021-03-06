app.component("accordian", {
    computed: {
        getFullWeatherDescription(){
            return localStorage.getItem("fullCondition")
        }
    },
    template:
    /* html */
    `
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button text-light set-background-to-DKpurple hover-dark-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Full Forecast Description
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body set-color-to-purple-dk">
        <strong>{{getFullWeatherDescription}}</strong> 
      </div>
    </div>
  </div>
</div>
    `
})