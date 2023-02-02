<template>
  <div id="app-main">
    <div class="background"></div>
    <header>
      
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<style lang="scss">
html {
  height: stretch;
}

body {
  margin: 0;
  font-family: "Apple SD Gothic Neo", "Malgun Gothic", "Dotum", sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  min-height: stretch;
}

div#app-main {
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  min-height: 100vh;
  min-height: stretch;
  padding: 2rem;

  div.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    width: stretch;
    height: 50vh;
    min-height: 100px;

    background-color: #107f4f;
    //background-image: url("../assets/logo_bg.png");
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
  }

  header {
    text-align: center;
    margin-top: 10vh;
    z-index: 1;
  }

  main {
    background-color: white;
    box-sizing: border-box;
    margin: 10vh auto 40vh auto;
    width: 90vw;
    z-index: 1;
  }

  a {
    color: #4a4a4a;
    text-decoration: none;

    &:hover {
      color: black;
      text-shadow: 0 0 0.25rem #ccc;
    }
  }
}
</style>
