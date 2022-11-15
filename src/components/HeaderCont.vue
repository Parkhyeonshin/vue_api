<template>
  <header id="header">
    <div class="header__left">
      <ul>
        <li>
          <router-link to="/about">About</router-link>
          <router-link to="/reference">Reference</router-link>
        </li>
      </ul>
    </div>
    <h1 class="header__center">
      <router-link to="/">API SITE</router-link>
    </h1>
    <div class="header__right">
      <ul>
        <li>
          <router-link to="/youtube">Youtube</router-link>
        </li>
        <li>
          <router-link to="/movie">Movie</router-link>
        </li>
        <li>
          <router-link to="/unsplash">Unsplash</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: var(--bg-light);
  border-bottom: 1px solid var(--bg-dark-border);
  display: flex;
  align-items: flex-end;
  color: var(--black);
  padding: 0 10px;
  z-index: 100000;
  a {
    color: var(--black);
    display: inline-block;
    position: relative;
    margin: 5px 12px 12px 12px;
    line-height: 1;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      // background: var(--black);
      background: rgb(136, 136, 136);
      transform: scaleX(0);
      transition: all 0.3s ease;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
  li {
    display: inline-block;
  }

  .header__left {
    flex: 1 1 40%;
    font-family: var(--font-sub2);
  }
  .header__center {
    flex: 1 1 20%;
    text-align: center;
    font-size: 38px;
    font-family: var(--font-sub2);

    h1 a {
      padding: 10px 10px 12px 10px;
    }
  }
  .header__right {
    flex: 1 1 40%;
    text-align: right;
    font-family: var(--font-sub2);
  }
}
</style>
