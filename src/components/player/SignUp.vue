<template>
  <div>
    <div data-test="welcomeText">
      {{ welcomeText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",

  data() {
    return {
      welcomeText: "Hello, welcome",
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>
