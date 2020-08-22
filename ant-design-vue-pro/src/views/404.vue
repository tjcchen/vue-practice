<template>
  <div class="wrapper-404">
    <!-- solution1: import icon font logo -->
    <IconFont class="icon-404" type="icon-404"></IconFont>

    <!-- Note: solution 2 and solution 3 cannot coexist due webpack configuration clear all existing loader -->
    <!-- Therefore, I comment out its usage -->
    <!-- solution2: import svg logo from local resources -->
    <!-- img :src="NotFoundImage" alt="NotFountImage" / -->

    <!-- solution3: use vue cli svg loader  -->
    <Google />
  </div>
</template>

<script>
import NotFoundImage from "@/assets/NotFound.svg";
import Google from "@/assets/google.svg";

export default {
  data() {
    return {
      NotFoundImage
    };
  },
  components: {
    Google
  }
};
</script>

<style scoped lang="less">
.wrapper-404 {
  text-align: center;

  .icon-404 {
    font-size: 100px;
  }
}
</style>