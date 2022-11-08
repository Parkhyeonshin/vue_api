<template>
  <div>
    <HeaderCont />
    <TitleCont />
    <ContactCont />
    <FooterCont />
  </div>
</template>
<script>
import HeaderCont from "@/components/HeaderCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import ContactCont from "@/components/ContactCont.vue";
export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },
};
</script>
