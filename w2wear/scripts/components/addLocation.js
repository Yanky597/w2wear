app.component("add-location", {
  template:
    /* html */
    `
    <div
        class="mainContainer d-fluid align-content-center align-items-center p-3"
        >
        <h1 class="color">Add Your Location</h1>

        <div class="d-fluid align-content-center p-3">
            <button
            @click= "getWeather"
            title="submit location"
            class="getUserLocation btn btn-sm set-background-to-DKpurple shadow-sm"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-geo-alt-fill set-color-to-purple-lt w-auto"
                viewBox="0 0 16 16"
            >
                <path
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
            </svg>
            </button>
            <input
            class="p-2 m-0"
            type="text"
            placeholder="Zip Code"
            name="Location"
            class="set-color-to-purple-dk text-center"
            id="myLocation"
            />
            <br />
            <span id="invalidZip">Please Enter a valid zip code</span>
        </div>
        <h3 class="m-3">
            and get the weather + outerwear recommendation
        </h3>
    </div>
    `,
    methods:{
        getWeather : () =>{
            getTempAtCurrentLocationAndRenderData()
            setTimeout(()=>{
                location.reload()
            }, 1000)
        },
       
        getLocationInfoFromLocalStorage: () => {
            return JSON.parse(localStorage.getItem(localStorage.currentLocation));
        },
    },
});
