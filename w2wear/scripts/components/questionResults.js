app.component("question-results", {
    props:{
        questionOne:String,
        questionTwo:String,
        questionThree:String,
        questionFour:String,
        questionFive:String,
        results:Number,
        resultText: String
    },
    data() {
        return {
        }
    },
    computed:{
    },

    template:
    /* html */
    `
    <div>
        <p><strong>Do you frequently find yourself hot? or cold? : {{questionOne}}</strong></p>
        <hr />
    </div>
    <div>
        <p><strong>Are you usually colder than your friends/family/colleges? : {{questionTwo}}</strong></p>
        <hr />
    </div>
    <div>
        <p><strong>Do you frequently find yourself wearing sweaters in the summertime? : {{questionThree}}</strong></p>
        <hr />
    </div>
    <div>
        <p><strong>Whats your favorite time of year to go swimming in the ocean? : {{questionFour}}</strong></p>
        <hr />
    </div>
    <div>
        <p><strong>Sign up for our future emailing list : {{questionFive}}</strong></p>
        <hr />
    </div>

    <h2>Results: {{resultText}}</h2>
    <p>Thank you for your submission</p>
    `
})


