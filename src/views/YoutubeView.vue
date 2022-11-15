<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Youtube" name2="api" />
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
                <a :href="`${youtube.snippet.thumbnails.medium.url}`">
                  <img
                    :src="`${youtube.snippet.thumbnails.medium.url}`"
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
                  <li v-for="youtube in youtubes" :key="youtube.id">
                    <a :href="`${youtube.snippet.thumbnails.medium.url}`">
                      <img
                        :src="`${youtube.snippet.thumbnails.medium.url}`"
                        :alt="youtube.title"
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
    const youtubes = ref([]);
    const sliders = ref([]);
    const search = ref("마블");

    const SearchYoutube = async () => {
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.value}&key=AIzaSyBXhseeCMnFTN8eAya3AnDZLNPBXNUgvjU&maxResults=30&type=video`
      )
        .then((response) => response.json())
        .then((result) => {
          youtubes.value = result.items;
          search.value = "";
        })
        .catch((error) => console.log(error));
    };
    SearchYoutube();

    const TopYoutube = async () => {
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=game&key=AIzaSyBXhseeCMnFTN8eAya3AnDZLNPBXNUgvjU&maxResults=30&type=video"
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.items))
        .catch((error) => console.log(error));
    };
    TopYoutube();
    return {
      sliders,
      search,
      SearchYoutube,
      TopYoutube,
    };
  },
};
</script>
