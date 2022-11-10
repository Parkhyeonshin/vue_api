<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Movie" name2="api" />
    <section class="cont__refer">
      <div class="container">
        <div class="movie__inner">
          <div class="movie__slider"></div>
          <div class="movie__search">
            <div className="container">
              <h2>검색하기</h2>
              <form @submit.prevent="SearchMovies()">
                <input
                  type="search"
                  placeholder="검색하십쇼"
                  v-model="search"
                />
                <button type="submit">검색</button>
              </form>
            </div>
          </div>
          <div class="movie__movies">
            <div class="container">
              <div class="movie__list">
                <ul>
                  <li v-for="movie in movies" :key="movie.id">
                    <a href="">
                      <img
                        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                        :alt="movie.title"
                      />
                      <em>
                        <span class="title">{{ movie.title }}</span>
                        <span class="star">{{ movie.vote_average }}</span>
                      </em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterCont />
    <ContactCont />
  </div>
</template>
<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";
export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },

  setup() {
    const movies = ref([]);
    const sliders = ref([]);
    const search = ref("마블");

    const SearchMovies = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e9df2a50c640db534a28c26f470cc305&language=ko-KOR&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => {
          movies.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log(error));
    };
    SearchMovies();

    const TopMovies = async () => {
      await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=e9df2a50c640db534a28c26f470cc305&language=ko-KOR&page=1&region="
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.results))
        .catch((error) => console.log(error));
    };
    TopMovies();
    return {
      movies,
      sliders,
      search,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss">
.movie__pop {
  width: 100%;
  overflow-x: auto;

  .movie__popname {
    color: snow;
    font-size: 25px;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 20px;
    text-decoration: underline;
    text-underline-position: under;
  }

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    .swiper-wrapper {
      width: 32%;

      .swiper-slide-active img {
        border: 4px solid #fff;
        filter: brightness(140%);
      }
    }

    li {
      width: 30%;
      position: relative;
    }
    em {
      display: block;
      height: 80px;
      margin-bottom: 30px;
      font-family: var(--font-kor);
    }
    .title {
      padding: 5px 0;
      display: inline-block;
    }
    .star {
      background: #fff;
      color: #000;
      position: absolute;
      left: 10px;
      top: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-weight: 700;
    }
  }
  a {
    color: var(--white);
  }
}

.movie__inner {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 23%;
      position: relative;
      em {
        display: block;
        height: 80px;
        margin-bottom: 30px;
        font-family: var(--font-kor);
      }
      .title {
        padding: 5px 0;
        display: inline-block;
        color: var(--black);
      }
      .star {
        background: #fff;
        color: #000;
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        font-weight: 700;
      }
    }
  }
  a {
    color: var(--white);
  }
}

.movie__search {
  margin-bottom: 100px;

  .container {
    position: relative;
  }

  h2 {
    color: var(--black);
    font-size: 40px;
    text-indent: -9999px;
    height: 0;
  }
  input {
    background: #eee;
    border: 2px solid var(--white);
    border-radius: 30px;
    color: var(--black);
    width: 100%;
    padding: 10px 40px;
    font-family: var(--font-kor2);
  }
  button {
    position: absolute;
    top: 7px;
    right: 10px;
    border-radius: 20px;
    width: 50px;
    height: 30px;
    border: 0;
    font-family: var(--font-kor2);
    line-height: 30px;
    z-index: 1000;
    background: #e5e5e5;
    &:hover {
      background: #000;
      color: var(--white);
      cursor: pointer;
    }
  }
}
</style>
