<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Youtube" name2="api" />
    <section className="youtube__popular">
      <div className="container">
        <div className="youtube__inner">
          <h2>Youtube Random</h2>
          <swiper
            :effect="'cube'"
            :grabCursor="true"
            :cubeEffect="{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="slider in sliders" :key="slider">
              <li>
                <a
                  :href="`https://www.youtube.com/watch?v=${slider.id.videoId}`"
                >
                  <img
                    :src="slider.snippet.thumbnails.medium.url"
                    :alt="slider.snippet.description"
                  />
                </a>
              </li>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <div class="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        <form @submit.prevent="SearchYoutube()">
          <input type="search" placeholder="검색하십쇼" v-model="search" />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            <li v-for="youtube in youtubes" :key="youtube.id">
              <img :src="youtube.snippet.thumbnails.medium.url" alt="##" />
            </li>
          </ul>
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
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const youtubes = ref([]);
    const sliders = ref([]);
    const search = ref("game");

    const SearchYoutube = async () => {
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.value}&key=AIzaSyANNkakWue2AYsAUKUGRlVxrqBuH6JbMrQ&maxResults=30&type=video`
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
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=game&key=AIzaSyANNkakWue2AYsAUKUGRlVxrqBuH6JbMrQ&maxResults=6&type=movie"
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result.items))
        .catch((error) => console.log(error));
    };
    TopYoutube();
    return {
      sliders,
      search,
      youtubes,
      SearchYoutube,
      TopYoutube,
      modules: [EffectCube, Pagination],
    };
  },
};
</script>

<style lang="scss">
// .unsplash__inner {
//     ul {
//         column-count: 4;
//         column-gap: 20px;
//         width: 100%;

//         li {
//             margin-bottom: 20px;

//             img {
//                 border-radius: 5px;
//             }
//         }
//     }
// }
.youtube__inner {
  display: block;
  margin: 0 auto;
  width: 40%;
  h2 {
    color: #fff;
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
}
.youtube__btn {
  .container button {
    background: #565656;
    color: snow;
    border-radius: 5px;
    padding: 5px 10px;
    padding-top: 2px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      background: var(--white);
      color: var(--black);
    }
  }
}
</style>
