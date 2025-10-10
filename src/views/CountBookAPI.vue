<template>
  <pre>{{ jsondata }}</pre>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      count: null,
      error: null,
      jsondata:[]
    };
  },
  mounted() {
    this.getBookCountAPI();
  },
    methods: {
    async getBookCountAPI() {
        try {
        const response = await axios.get('https://us-central1-week7-yiwei-5d84d.cloudfunctions.net/countBooks');
        this.jsondata = response.data;
        this.error = null;
        } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = error;
        this.count = null;
        }
    },
    }

};
</script>
