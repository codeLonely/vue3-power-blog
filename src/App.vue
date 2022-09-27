<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      id="test"
      width="125"
      height="125"
      class="logo"
      alt="Vue logo"
      src="@/assets/logo.svg"
    />
    <!-- test -->
    <div class="wrapper">
      <HelloWorld id="11" title="xxx" msg="You did it!" />
      <div class="status red">test</div>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/about"> About </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.status {
  position: relative;
  top: 1;
  left: 2;

  width: 12px;
  height: 12px;

  color: #fff;

  border: unset;

  &::after {
    position: absolute;
    top: 1;

    width: 11px;
  }
}

.title {
  color: #fff;
}

header {
  width: 12px;
  height: 12px;
  max-height: 100vh;

  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;

  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;

  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;

    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;

    flex-wrap: wrap;
  }

  nav {
    margin-top: 1rem;
    margin-left: -1rem;

    padding: 1rem 0;

    font-size: 1rem;
    text-align: left;
  }
}
</style>
