<template>
  <div class="Movie">
    <a
      class="MovieLink"
      :href="data.url">
      <div class="MovieContent">
        <div>
          <img
            class="MovieImg"
            :src="data.img_url"
            alt="MovieImg" />
        </div>
        <div class="MovieTitle">{{ data.title }}</div>
      </div>
    </a>

  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    data: Object
  }
}
</script>

<style scoped>
div.Movie {
  width: calc(100% / 3);
  margin-top: 20px;
  padding-left: 3px;
  padding-right: 3px;
  box-sizing: border-box;
}

div.Movie:first-of-type,
div.Movie:nth-of-type(4n) {
  padding-left: 0;
  padding-right: 6px;
}

div.Movie:nth-of-type(3n) {
  padding-left: 6px;
  padding-right: 0;
}

a.MovieLink {
  text-decoration: none;
}

div.MovieContent {
  background-color: #fff;
}

img.MovieImg {
  width: 100%;
  border: 1px solid #e0e0e0
}

div.MovieTitle {
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 25px;
  font-weight: 700;
  color: #212121;
}

</style>
