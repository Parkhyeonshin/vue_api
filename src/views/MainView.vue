<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Movie" name2="api" />
    <section class="cont__refer">
      <div class="container">
        <div class="movie__inner">
          <div class="movie__slider">
            <div class="movie__popname">인기 순위</div>
            <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :slidesPerView="'auto'"
              :initialSlide="5"
              :coverflowEffect="{
                rotate: 390,
                stretch: 0,
                depth: 400,
                modifier: 1,
                slideShadows: false,
              }"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="(slider, index) in sliders" :key="slider.id">
                <a :href="`https://image.tmdb.org/movie/${slider.id}`">
                  <img
                    :src="`https://image.tmdb.org/t/p/w500/${slider.poster_path}`"
                    :alt="slider.title"
                  />
                  <em>
                    <span class="title">{{ slider.title }}</span>
                    <span class="star">{{ index + 1 }}위</span>
                  </em>
                </a>
              </swiper-slide>
            </swiper>
          </div>
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
                    <a :href="`https://image.tmdb.org/movie/${movie.id}`">
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
import FooterCont from "@/components/FooterCont.vue";
export default {
  components: {
    HeaderCont,
    FooterCont,
  },

  data: function () {
    return {
      titles: [
        { text: "we provide" },
        { text: "visual coding" },
        { text: "solutions" },
        { text: "for you API" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main__inner {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  color: var(--black);
  flex-direction: column;

  > div {
    font-size: 8.8vw;
    line-height: 0.9;
    text-transform: uppercase;
  }
}
</style>
