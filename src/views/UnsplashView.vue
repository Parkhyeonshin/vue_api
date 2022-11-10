<template>
  <div>
    <HeaderCont />
    <TitleCont name1="Unsplash" name2="api" />
    <section class="cont__refer">
      <div class="container">
        <div class="unsplash__inner">
          <div class="unsplash__slider"></div>
          <div class="unsplash__search"></div>
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

    // const SearchSplashes = () => {
    //   fetch(
    //     `https://api.unsplash.com/search/photos?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&query=${search.value}`
    //   )
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
    // };
    // SearchSplashes();
    const RandomSplashes = () => {
      fetch(
        "https://api.unsplash.com/photos/random?client_id=JN0Xp0E35hR1IoBWz_MgaXzV3uhKAwCMOrCfKt_7SVA&count=20"
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
      // SearchSplashes,
      RandomSplashes,
    };
  },
};
</script>

<style lang="scss">
.unsplash__images {
  width: 80%;
  margin: 0 auto;
}
</style>
