<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Unsplash" name2="api" />
    <section class="cont__refer">
      <div class="container">
        <div class="unsplash__inner">
          <div class="unsplash__slider"></div>
          <div class="unsplash__search">
            <div className="container">
              <h2>검색하기</h2>
              <form @submit.prevent="SearchSplashes()">
                <input
                  type="search"
                  placeholder="검색하십쇼"
                  v-model="search"
                />
                <button type="submit">검색</button>
              </form>
            </div>
          </div>
          <div class="unsplash__images">
            <ul>
              <li v-for="splash in splashes" :key="splash.id">
                <a href="#">
                  <img :src="splash.urls.small" :alt="splash.id" />
                </a>
              </li>
            </ul>
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
    const splashes = ref([]);
    const search = ref("human");

    const SearchSplashes = () => {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&query=${search.value}`
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    };
    SearchSplashes();
    const RandomSplashes = () => {
      fetch(
        "https://api.unsplash.com/photos/random?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&query=human&count=30"
        // "https://api.unsplash.com/photos/random?client_id=r6e6_4ZwiAV0Dc0WvGopVnh2YGoPLi5X-C52UOikVNc&count=20"
      )
        .then((response) => response.json())
        .then((result) => (splashes.value = result))
        .catch((error) => console.log("error", error));
    };
    RandomSplashes();
    return {
      splashes,
      search,
      SearchSplashes,
      RandomSplashes,
    };
  },
};
</script>

<style lang="scss">
.unsplash__inner {
  h2 {
    color: #fff;
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
  }
  .swiper-wrapper {
    height: 250px;
  }
  ul {
    column-count: 4;
    column-gap: 20px;
    width: 100%;
    li {
      margin-bottom: 20px;

      img {
        border-radius: 5px;
      }
    }
  }

  .swiper-pagination-bullet-active {
    background: white;
  }
}
.unsplash__search {
  margin-bottom: 50px;

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
    top: 38px;
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

.unsplash__btn {
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
