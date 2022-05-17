const app = Vue.createApp({
    data() {
      return {
        userTemp:0
      };
    },
    methods: {
      setUserTemp(value){
        this.userTemp = value
        localStorage.setItem("userTemp", value)
      }
    },
  });
  