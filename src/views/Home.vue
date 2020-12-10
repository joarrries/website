<template>
  <div>
    <div class="container py-4">
      <div class="columns is-vcentered">
        <div class="column">
          <h2 class="title is-spaced">{{ $t("slogan.title") }}</h2>
          <p class="subtitle">
            {{ $t("slogan.subtitle") }}
          </p>
          <a class="button is-primary" href="#working">{{
            $t("slogan.btn")
          }}</a>
        </div>
        <div class="column"><img src="img/1.png" alt="" /></div>
      </div>
      <hr class="my-6" />
    </div>

    <div class="container has-text-centered py-4">
      <a class="hidden-item" name="working"></a>
      <h2 class="title mb-6">{{ $t("staking.runningTitle") }}</h2>
      <div class="columns">
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">{{ $t("staking.eth2.title") }}</h3>
              <p class="block">
                {{ $t("staking.eth2.content") }}
              </p>
              <h4 class="title is-spaced is-5">
                {{ $t("staking.eth2.price0") }}
                <small> / {{ $t("staking.eth2.price1") }}</small>
              </h4>
              <a
                class="button is-primary"
                href="https://zfrmz.com/xzzorxmdNLpd82oJkA2j"
                target="_blank"
              >
                {{ $t("staking.runningBtn") }}
              </a>
            </div>
          </div>
        </div>
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">{{ $t("staking.prv.title") }}</h3>
              <p class="block">
                {{ $t("staking.prv.content") }}
              </p>
              <h4 class="title is-spaced is-5">
                {{ $t("staking.prv.price0") }}
                <small> / {{ $t("staking.prv.price1") }}</small>
              </h4>

              <a
                class="button is-primary"
                href="https://zfrmz.com/xzzorxmdNLpd82oJkA2j"
                target="_blank"
              >
                {{ $t("staking.runningBtn") }}
              </a>
            </div>
          </div>
        </div>
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">{{ $t("staking.xym.title") }}</h3>
              <p class="block">
                {{ $t("staking.xym.content") }}
              </p>
              <h4 class="title is-spaced is-5">
                {{ $t("staking.xym.price0") }}
                <small> / {{ $t("staking.xym.price1") }}</small>
              </h4>
              <a
                class="button is-primary"
                href="https://zfrmz.com/xzzorxmdNLpd82oJkA2j"
                target="_blank"
              >
                {{ $t("staking.runningBtn") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container has-text-centered py-4 pt-6">
      <a class="hidden-item" href="#"></a>
      <h2 class="title mb-6">{{ $t("staking.comingTitle") }}</h2>
      <div class="columns">
        <div class="column is-one-third flex-col">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">{{ $t("staking.zen.title") }}</h3>
              <p class="block">
                {{ $t("staking.zen.content") }}
              </p>
              <h4 class="title is-spaced is-5">
                {{ $t("staking.zen.price0") }}
                <small> / {{ $t("staking.zen.price1") }}</small>
              </h4>
              <button class="button is-primary is-outlined" type="button">
                {{ $t("staking.comingBtn") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container has-text-centered py-4 pt-6">
      <a class="hidden-item" href="#" name="features"></a>
      <h2 class="title mb-6">{{ $t("features.title") }}</h2>
      <div class="columns">
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <div class="level mb-2">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img src="img/2-1.png" alt="" />
                  </figure>
                </div>
              </div>
              <h5 class="title is-5">
                {{ $t("features.safety.title") }}
              </h5>
              <div class="level">
                <p class="block pt-1 pl-1 lr-1">
                  {{ $t("features.safety.content") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <div class="level mb-2">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img src="img/3-1.png" alt="" />
                  </figure>
                </div>
              </div>
              <h5 class="title is-5">
                {{ $t("features.convenient.title") }}
              </h5>
              <div class="level">
                <p class="block pt-1 pl-1 lr-1">
                  {{ $t("features.convenient.content") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <div class="level mb-2">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img src="img/4-1.png" alt="" />
                  </figure>
                </div>
              </div>
              <h5 class="title is-5">
                {{ $t("features.profession.title") }}
              </h5>
              <div class="level">
                <p class="block pt-1 pl-1 lr-1">
                  {{ $t("features.profession.content") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="column flex-col">
          <div class="card">
            <div class="card-content">
              <div class="level mb-2">
                <div class="level-item">
                  <figure class="image is-64x64">
                    <img src="img/5-1.png" alt="" />
                  </figure>
                </div>
              </div>
              <h5 class="title is-5">
                {{ $t("features.preferential.title") }}
              </h5>
              <div class="level">
                <p class="block pt-1 pl-1 lr-1">
                  {{ $t("features.preferential.content") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
$link: hsl(0, 0%, 4%);
$link-hover: hsl(237, 82%, 62%);
$primary: hsl(237, 82%, 62%);

@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/_all";
@import "~bulma/sass/form/_all";
@import "~bulma/sass/components/_all";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/helpers/_all";
@import "~bulma/sass/layout/_all";

html {
  scroll-behavior: smooth;
}
.flex-col {
  display: flex;
}
</style>
