

/* If I decide to go further with this site I can add a instagram slideshow that includes the hashtags from #ootd and #currentLocation */

app.component("landing-slide-show", {
    /*html*/
    template: 
    `       <!-- Carousel -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-sm-block shadow-lg">
            <h1>SNOW</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptas eius esse assumenda reiciendis velit dolorum, quam aut
              voluptate error odio, magni iste vitae aperiam. Recusandae et
              fugit quod asperiores.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-sm-block shadow-lg">
            <h1>RAIN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              vero itaque nobis laudantium beatae laboriosam rerum sed
              officiis? Facere optio, sequi provident adipisci recusandae eos?
              Perspiciatis labore illum ratione ipsum.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-sm-block shadow-lg">
            <h1>OR SHINE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptatem, nesciunt aperiam libero porro obcaecati inventore
              eveniet, quo nobis repellendus perferendis quibusdam
              exercitationem alias pariatur fugiat, repudiandae corporis quia
              asperiores.
            </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      `,
});


