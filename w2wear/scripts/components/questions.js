app.component("questions", {

  data() {
      return {
          questionOne:"",
          questionTwo:"",
          questionThree:"",
          questionFour:"",
          questionFive:"",
          submitted : false,
          results : 0,
      }
  },  
  methods: {
      onSubmit(){

        if(this.questionFour ==="" || !/[a-zA-Z]/.test(this.questionFour)){
            document.querySelector("#check-text-error").innerHTML="Please enter a valid answer.";
        }
        else if ( this.questionFive === "" || 
                ! /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/.test(this.questionFive) ) 
        {
            document.querySelector("#email-error-message").innerHTML="Please enter a valid email.";
        }
        else{
            this.submitted = true;
            this.$emit('set-body-temp', this.getResults())
        }
      },
      getResults(){
          this.results = 0;

        if(this.questionOne == "hot"){
            this.results -= 1.25
        }
        else if(this.questionOne == "cold"){
            this.results += 1.25
        }

        if(this.questionTwo == "no"){
            this.results -= 1.25
        }
        else if(this.questionTwo == "yes"){
            this.results += 1.25
        }

        if(this.questionThree == "no"){
            this.results -= 1.25
        }
        else if(this.questionThree == "yes"){
            this.results += 1.25
        }
        

        if(this.questionFour.toLowerCase() != "summer" && this.questionFour != "" && this.submitted){
            this.results -= 2
        }

        return this.results;
    },
          
},
computed:{
    resultText(){
        if(this.getResults() < 0){
            return "You have an internal body temperature that leans towards hot"
        }
        else if(this.getResults() == 0){
           return "You have a balanced internal body temperature"
        }
        else {
           return "You have an internal body temperature that leans towards cold"
        }
    }
},
  template:
    /* html */
    `
    <section
          class="align-content-center align-items-center d-fluid p-3 d-flex justify-content-center m-3 hotOrColdQuestions"
          v-if="!submitted"
        >
    <div class="w-50">
            <form action="#" @submit.prevent="onSubmit">
              <div>
                <legend>Do you frequently find yourself hot? or cold?</legend>
                <input type="radio" id="cold" name="hotOrCold" value="cold" v-model="questionOne"/>
                <label for="cold">Cold</label><br />
                <input
                  type="radio"
                  id="moderate"
                  name="hotOrCold"
                  value="MODERATE"
                  v-model="questionOne"
                />
                <label for="moderate">Moderate</label><br />
                <input type="radio" id="hot" name="hotOrCold" value="hot" v-model="questionOne"/>
                <label for="hot">Hot</label><br />
              </div>

              <!-- Question #2 -->
              <hr>
              <div class="mt-3">
                <legend>Are you usually colder than your friends/family/colleges</legend>
                <input type="radio" id="Yes" name="usuallyColder" value="yes" v-model="questionTwo" />
                <label for="Yes">Yes</label><br />
                <input
                  type="radio"
                  id="notReally"
                  name="usuallyColder"
                  value="MODERATE"
                  v-model="questionTwo"
                />
                <label for="notReally">Not Really</label><br />
                <input type="radio" id="No" name="usuallyColder" value="no" v-model="questionTwo" />
                <label for="No">No</label><br />
              </div>
              <br />

              <!-- Question #3 -->
              <hr>
              <div class="mt-3">
                <legend>Do you frequently find yourself wearing sweaters in the summertime?</legend>
                <input type="radio" id="Yes" name="sweaterInTheSummer" value="yes" v-model="questionThree" />
                <label for="Yes">Yes</label><br />
                <input
                  type="radio"
                  id="notReally"
                  name="sweaterInTheSummer"
                  value="MODERATE"
                  v-model="questionThree"
                />
                <label for="notReally">Not Really</label><br />
                <input type="radio" id="No" name="sweaterInTheSummer" value="no" v-model="questionThree" />
                <label for="No">No</label><br />
              </div>
              <br />

                <!-- Question #4 -->
                <hr>
                <div class="mt-3">
                  <legend>Whats your favorite time of year to go swimming in the ocean?</legend>
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">?</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" v-model="questionFour">
                    <span id="check-text-error" class="m-3 text-danger"></span>
                  </div>
                </div>
                <br />
                <!-- Question #5 -->
                <hr>
                <div class="mt-3">
                  <legend>Sign up for our future emailing list</legend>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                    <input type="text" class="form-control" id="email" aria-label="Email" aria-describedby="basic-addon2" v-model="questionFive">
                    <span id="email-error-message" class="m-3 text-danger"></span>
                  </div>
                </div>
                <br />
              <button class="btn btn-dark">Submit</button>
            </form>
          </div>
        </section>
        
        <div class="mt-5" v-else>
        <question-results
            :questionOne='questionOne'
            :questionTwo='questionTwo'
            :questionThree='questionThree'
            :questionFour='questionFour'
            :questionFive='questionFive'
            :results='getResults'
            :resultText='resultText'
        ></question-results></div>
    `,
});