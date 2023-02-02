<template>
  <layout>
    <div class="centered">
      <h1>다른 브라우저를 사용해주세요!</h1>
      <p>해당 업무 홈페이지는 Edge/Chrome을 사용해야 합니다.</p>
      <nav>
        <div>
          <a :href="`microsoft-edge:${currentHref}`"
            ><img
              src="./browser-icons/edge-browser.svg"
              width="100"
              height="100"
              alt="Microsoft Edge"
            />
            <div>Microsoft Edge</div></a
          >
        </div>
        <div>
          <a href="https://www.google.co.kr/chrome/" target="_blank"
            ><img
              src="./browser-icons/chrome-logo.svg"
              width="100"
              height="100"
              alt="Google Chrome"
            />
            <div>Google Chrome</div></a
          >
        </div>
      </nav>
    </div>
  </layout>
</template>
<script>
import Layout from "./CenteredCommonLayout.vue";

export default {
  components: {
    Layout,
  },
  computed: {
    currentHref() {
      return window.location.href;
    },
  },
};
</script>
<style lang="scss" scoped>
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  & > * {
    width: 100%;
    text-align: center;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > div {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    a > div {
      margin-top: 0.5rem;
    }
  }
}
</style>
