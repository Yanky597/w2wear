app.component("page-content", {

    computed:{
        locationIsSet(){
            return localStorage.getItem("locationIsSet") == "true" || localStorage.getItem("locationIsSet") == true;
        },
    },
    template:
    /* html */
    `<main v-if="!locationIsSet">
        <get-started-cards></get-started-cards>
    </main>
    <main v-else>
        <get-recommendations></get-recommendations>
    </main>
    <!-- maybe change this to get instagram  images using #cityname, #ootd #mostrecent?-->
    <landing-slide-show></landing-slide-show>

    `,
})