app.component("page-header", {
  data() {
    return {
      isSet: localStorage.getItem("locationIsSet") == "true",
    };
  },

  template:
    /* html */
    `
    <side-nav></side-nav>
    <!-- this area contains the logo plus main -->

    <section
      class="text-light shadow-sm pb-5 text-center text-sm-center set-background-to-DKpurple"
    >
      <div class="container">
        <img
          class="img-fluid w-25"
          src="./images/w2WearLogoSmallv2.png"
          alt="logo"
        />
        <div class="time date-time-frontpage">{{getDate}}<br>{{getTime}}</div>

        <div
          class="d-sm-flex align-items-center justify-content-center pt-2 p-3"
        >
          <div v-if="locationIsSet"><show-forecast></show-forecast></div>
          <div v-else><add-location></add-location></div>
          
        </div>
      </div>
    </section>
    `,
  computed: {
    locationIsSet() {
      return localStorage.getItem("locationIsSet") == "true" || localStorage.getItem("locationIsSet") == true;
    },
    getDate(){
      return (new Date()).toString().substring(0, 15)
    },
    getTime(){
      return (new Date()).toLocaleTimeString()
    }
  },
});
