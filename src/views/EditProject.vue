<template>
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
    };
  },
  mounted() {
    fetch("http://localhost:5000/projects/" + this.id)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleSubmit() {
      fetch("http://localhost:5000/projects/" + this.id, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }),
      })
        .then(this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
