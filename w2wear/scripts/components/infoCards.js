app.component("get-started-cards", {
    /* html */
    template:`  <!-- card section -->

    <div class="card-deck p-4 d-flex flex-column flex-md-row">
      <!-- <div class="flex-sm-column"> -->
      <div class="card m-2 col text-center shadow-sm change-background-lt">
        <svg
          class="w-25 mt-3 mx-auto"
          width="auto"
          height="auto"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M15.375 9.625C12.3363 9.625 9.875 12.0863 9.875 15.125C9.875 18.1637 12.3363 20.625 15.375 20.625C18.4137 20.625 20.875 18.1637 20.875 15.125C20.875 12.0863 18.4137 9.625 15.375 9.625ZM27.6675 13.75C27.356 10.9617 26.1057 8.36211 24.1218 6.3782C22.1379 4.39429 19.5383 3.14395 16.75 2.8325V0H14V2.8325C11.2117 3.14395 8.61211 4.39429 6.6282 6.3782C4.64429 8.36211 3.39395 10.9617 3.0825 13.75H0.25V16.5H3.0825C3.39395 19.2883 4.64429 21.8879 6.6282 23.8718C8.61211 25.8557 11.2117 27.106 14 27.4175V30.25H16.75V27.4175C19.5383 27.106 22.1379 25.8557 24.1218 23.8718C26.1057 21.8879 27.356 19.2883 27.6675 16.5H30.5V13.75H27.6675ZM15.375 24.75C10.0538 24.75 5.75 20.4462 5.75 15.125C5.75 9.80375 10.0538 5.5 15.375 5.5C20.6962 5.5 25 9.80375 25 15.125C25 20.4462 20.6962 24.75 15.375 24.75Z"
            fill="#9A98C8"
          />
        </svg>
        <div class="card-body mt-auto">
          <h5 class="card-title">1. Location</h5>
          <p class="card-text pb-3">Set your location</p>
        </div>
      </div>
      <div class="card m-2 col text-center shadow-sm change-background-lt">
        <svg
          class="w-25 mx-auto mt-3 set-color-to-purple-dk"
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          fill="currentColor"
          class="bi bi-cloud-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
          />
        </svg>
        <div class="card-body mt-auto">
          <h5 class="card-title">2. Weather</h5>
          <p class="card-text pb-3">Get the weather for your chosen area</p>
        </div>
      </div>
      <div class="card m-2 col text-center shadow-sm change-background-lt">
        <svg
          class="w-25 mx-auto mt-3 set-color-to-purple-dk"
          width="auto"
          height="auto"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42 34H6C4.89543 34 4 34.8954 4 36V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V36C44 34.8954 43.1046 34 42 34Z"
            stroke="#B8B7D9"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33 26V34M15 26V34V26ZM24 26V34V26Z"
            stroke="#B8B7D9"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"
            stroke="#B8B7D9"
            stroke-width="4"
          />
          <path
            d="M8 34C8 25.75 9 12 24 12C39 12 40 25.75 40 34"
            stroke="#B8B7D9"
            stroke-width="4"
          />
        </svg>

        <div class="card-body mt-auto">
          <h5 class="card-title">3. Outerwear suggestions</h5>
          <p class="card-text pb-3">Get outerwear suggestions</p>
        </div>
      </div>
    </div>`
    
})