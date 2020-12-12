<template>
  <div class="container">
    <a class="hidden-item" name="nav"></a>
    <div class="container column is-three-fifths is-narrow-desktop">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/#nav">
              <img src="img/logo-0.png" />
              <h3 class="title is-4 pl-1">Easynodes</h3>
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              v-on:click="nav_active"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              v-bind:class="{ 'is-active': isActive }"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            class="navbar-menu"
            v-bind:class="{ 'is-active': isActive }"
          >
            <div class="navbar-end">
              <a class="navbar-item" href="/#nav">
                {{ $t("nav.home") }}
              </a>
              <a class="navbar-item" href="/#working">
                {{ $t("nav.staking") }}
              </a>
              <a class="navbar-item" href="/#features">
                {{ $t("nav.features") }}
              </a>
              <div class="navbar-item">
                <div class="control">
                  <LocaleSelector class="selector" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <footer class="footer pt-6">
      <div class="container column is-three-fifths">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <a class="title is-4" href="#">Easynodes</a>
            </div>
          </div>
          <div class="level-right">
            <a class="level-item" href="/#working">
              {{ $t("footer.staking") }}
            </a>
            <a class="level-item" :href="$t('footer.privacyLink')">{{
              $t("footer.privacy")
            }}</a>
            <a class="level-item" href="mailto:support@easynodes.net">{{
              $t("footer.support")
            }}</a>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column">
            <div class="buttons">
              <a class="button" href="https://twitter.com/Easynodes1">
                <svg width="22" height="22" viewBox="0 0 14 11" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.35 1.74A2.796 2.796 0 0013.614.202a5.869 5.869 0 01-1.824.674A2.91 2.91 0 009.692 0c-1.586 0-2.87 1.243-2.87 2.777 0 .217.023.43.072.632A8.25 8.25 0 01.974.508a2.7 2.7 0 00-.388 1.396c0 .963.507 1.813 1.278 2.312A2.958 2.958 0 01.562 3.87v.034c0 1.346.99 2.469 2.305 2.723a2.9 2.9 0 01-.758.097c-.184 0-.365-.016-.54-.049.365 1.103 1.426 1.907 2.684 1.928A5.89 5.89 0 01.685 9.791 5.91 5.91 0 010 9.753 8.339 8.339 0 004.403 11c5.284 0 8.171-4.231 8.171-7.9 0-.122-.001-.242-.007-.36A5.715 5.715 0 0014 1.302a5.89 5.89 0 01-1.65.437z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="column has-text-centered has-text-right-tablet">
            <p class="subtitle is-6">© 2020 Easynodes. All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import LocaleSelector from "@/components/LocaleSelector";
export default {
  name: "App",
  components: { LocaleSelector },
  data() {
    return { langs: ["EN", "ZH"], isActive: false };
  },
  methods: {
    nav_active: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/bulma.scss";
</style>