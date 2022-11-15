<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Unsplash" name2="api" />
    <section className="unsplash__popular">
      <div className="container">
        <div className="unsplash__headerinner">
          <h2>Unsplash Random</h2>
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="slide in sliders" :key="slide.id">
              <li>
                <a :href="`https://unsplash.com/photos/${slide.id}`">
                  <img
                    :src="slide.urls.regular"
                    :alt="slide.urls.alt_description"
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
        <form @submit.prevent="SearchSplashes()">
          <input type="search" placeholder="검색하십쇼" v-model="search" />
          <button type="submit">검색</button>
        </form>
      </div>
    </div>
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            <li v-for="splash in splashes" :key="splash.id">
              <a :href="`https://unsplash.com/photos/${splash.id}`">
                <img
                  :src="splash.urls.regular"
                  :alt="splash.urls.alt_description"
                />
              </a>
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
import { EffectCards } from "swiper";
import "swiper/css";

import "swiper/css/effect-cards";
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
    const splashes = ref([]);
    const sliders = ref([]);
    const search = ref("human");

    const SearchSplashes = () => {
      fetch(
        // `https://api.unsplash.com/search/photos?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&query=${search.value}&per_page=30`
        `https://api.unsplash.com/search/photos?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&query=${search.value}&per_page=30`
      )
        .then((response) => response.json())
        .then((result) => {
          splashes.value = result.results;
          search.value = "";
        })
        .catch((error) => console.log("error", error));
    };
    SearchSplashes();
    const RandomSplashes = () => {
      fetch(
        "https://api.unsplash.com/photos/random?client_id=wvNGn3UIEgB318VeRW4JICo3pgTNSdVlcqgsXl_Tm0k&count=10"
      )
        .then((response) => response.json())
        .then((result) => (sliders.value = result))
        .catch((error) => console.log("error", error));
    };
    RandomSplashes();
    return {
      splashes,
      search,
      sliders,
      SearchSplashes,
      RandomSplashes,
      modules: [EffectCards],
    };
  },
};
</script>

<style lang="scss">
.unsplash__popular {
  width: 80%;
  display: block;
  margin: 0 auto;
}

.unsplash__headerinner,
.unsplash__inner {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  h2 {
    width: 45%;
    color: var(--black);
    font-size: 50px;
    margin-bottom: 30px;
    text-align: left;
  }
  .swiper {
    width: 50%;
    .swiper-wrapper {
      height: 250px;
      .swiper-slide {
        border-radius: 20px;
        box-shadow: 1px 1px 5px var(--black);
        li {
          width: 100%;
          height: 100%;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  ul {
    column-count: 4;
    column-gap: 20px;
    width: 100%;
    li {
      margin-bottom: 20px;

      img {
        border-radius: 5px;
        &:hover {
          filter: brightness(130%);
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: var(--black);
  }
}
.unsplash__headerinner {
  justify-content: space-between;
  h2 {
    margin-bottom: 15px;
  }
}
.movie__search {
  margin-top: 30px;
}
.unsplash__btn {
  .container button {
    background: #565656;
    color: var(--black);
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
