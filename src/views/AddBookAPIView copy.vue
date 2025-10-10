<template>
  <div>
    <h1>Add Book API</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
// import db from '../firebase/init.js'
// import { collection, addDoc } from 'firebase/firestore';

// import BookList from '../components/BookList.vue';
import router from '@/router/index.js';


export default {
  setup() {
    const isbn = ref('');
    const name = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        // await addDoc(collection(db, 'books'), {
        //   isbn: isbnNumber,
        //   name: name.value
        // });

        // try {
            // const response = await axios.post('');
            axios.post('https://us-central1-week7-yiwei-5d84d.cloudfunctions.net/addBook', {
              isbn: 'isbnNumber',
              name: 'name.value'
            })
            .then(function (response) {
              alert('Book added successfully!');
              router.push('BookList')
              console.log(response);
            })
            .catch(function (error) {
              alert('Book added error!', error);
              // router.push('BookList')
              console.log(error);
            });

          //   this.count = response.data.count;
          //   this.error = null;
          // } 
          // catch (error) {
          //   console.error('Error fetching book count:', error);
          //   this.error = error;
          //   this.count = null;
          // }

        // isbn.value = '';
        // name.value = '';

        // alert('Book added successfully!');
        // router.push(BookList)
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook
    };
  }
};
</script>
 