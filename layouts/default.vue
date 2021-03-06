<template>
<div id="wrap">
  <nav id="topbar" class="navbar navbar-full fixed-top navbar-light bg-faded" ref="topbar">
    <div class="container">
      <div class="row w-100">
        <div class="col">
          <nuxt-link class="navbar-brand" :to="{name: 'index'}">
            <b>Vue.js</b> - Fast Forms
          </nuxt-link>
        </div>
        <div class="col col-auto">
          <a id="githubBtn"
             class="float-right"
             target="_blank"
             href="https://github.com/andhovesyan/vue-fast-forms"
          >
            <i class="fa fa-github" />
            <b>Github</b>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <header id="header" class="jumbotron jumbotron-fluid text-center" ref="header">
    <h1 style="font-weight: 600; font-size: 4rem">Vue Fast Forms</h1>
    <p class="lead mt-3" style="font-weight: 600">
      Vue.js components for fast and easy forms build, validation and data bindning.
    </p>
    <div class="container">
      <div class="row">
        <div class="col-auto mx-auto text-center">
          <h5 class="my-2">Install via npm</h5>
          <code class="install-code">npm install vue-fast-form --save-dev</code>
          <h5 class="my-2">or download</h5>
          <vf-btn class="mt-1 mx-2">
            vue-fast-form.js
          </vf-btn>
          <vf-btn class="mt-1 mx-2">
            vue-fast-form.min.js
          </vf-btn>
        </div>
      </div>
    </div>
  </header>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <nuxt />
      </div>
      <div class="col col-auto">
      <aside style="width: 15rem;"></aside>
        <ul id="sideNav" ref="sideNav" class="nav flex-column" :class="{scrolled}">
          <li><h5>Components</h5></li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{name: 'index'}">
              Forms
            </nuxt-link>
          </li>
          <li><h6>Inputs</h6></li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{name: 'inputs'}">
              Base inputs
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{name: 'custom'}">
              Custom inputs
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{name: 'datepicker'}">
              Datepicker
            </nuxt-link>
          </li>
          <li><h6>Buttons</h6></li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="{name: 'buttons'}">
              Buttons
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {

  name: 'App',

  data() {
    return {
      scrolled: false,
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      if (!this.$refs.sideNav) {
        return;
      }
      let offset = this.$refs.sideNav.getBoundingClientRect().top;
      offset += this.$refs.header.offsetHeight;
      offset += this.$refs.topbar.offsetHeight;
      this.scrolled = window.scrollY >= offset;
    });
  },
};
</script>

<style lang="scss">

@import 'assets/styles/main.scss';

#githubBtn {
  background: #24292e;
  border-radius: .15rem;
  color: #fff;
  font-size: 1.25rem;
  padding: 0 1rem;
  letter-spacing: .1px;
  line-height: 3rem;
  height: 2.75rem;
  margin: .75rem 0 0;
  transition: border-radius .3s, margin .3s;
  .fa {
    font-size: 2.75rem;
    margin-top: .25rem;
    margin-right: .75rem;
    float: left;
  }
  &:hover {
    background: lighten(#24292e, 7.5%);
    cursor: pointer;
    text-decoration: none;
    transition: background .3s;
  }
}

#topbar {
  background: #fff;
  color: #2C3E50;
  border: none;
  // border-bottom: 1px solid #888;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  border-radius: 0;
  font-family: 'Dosis', sans-serif;
  line-height: 4rem;
  height: 4rem;
  padding: 0;
  width: 100%;
  transition: line-height .3s, height .3s;
  .navbar-brand {
    color: #2C3E50;
    padding: 0;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 4rem;
    height: 4rem;
    transition: font-size .3s, line-height .3s, height .3s;
  }
  &.scrolled {
    height: 3rem;
    line-height: 2.75rem;
    border-bottom-color: #888;
    .navbar-brand {
      height: 3rem;
      line-height: 3rem;
      font-size: 1.3rem;
      margin-top: -2px;
    }
    #githubBtn {
      border-radius: 0;
      margin: 0;
      transition: border-radius .3s ease .3s, margin .3s;
    }
  }
}

#sideNav {
  width: 15rem;
  h6 {
    margin: .5rem 0;
  }
  padding-left: 2rem;
  &.scrolled {
    position: fixed;
    top: 5rem;
  }
  .nav-item {
    line-height: 2rem;
  }
  .nav-link {
    color: #1565c0;
    padding: 0;
    text-decoration: none!important;
    outline: none!important;
    &::before {
      content: '';
      border-left: 2px solid transparent;
      margin-right: .5rem;
    }
    &:hover {
      color: #2196f3;
    }
    &.exact-active {
      color: #64b5f6;
      pointer-events: none;
      &::before {
        border-color: #2196f3;
      }
    }
  }
}

#header {
  background: lighten(#2196F3, 5%);
  color: #fff;
}
.install-code {
  border: solid 1px #2196F3;
  border-radius: .15rem;
  display: block;
  line-height: 2.2rem;
  height: 2.3rem;
  padding: 0 1rem;
}

.lead {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
