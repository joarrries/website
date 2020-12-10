<template>
  <div>
    <div class="container column is-three-fifths is-narrow-desktop">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container" name="home">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="img/logo-0.png" />
              <h3 class="title is-4 pl-1">Easynodes</h3>
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item" href="#home">Home</a>
              <a class="navbar-item" href="#working">Staking</a>
              <a class="navbar-item" href="#features">Features</a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">EN</a>
                <div class="navbar-dropdown">
                  <a class="navbar-item navbar-item-dropdown" href="#">EN</a>
                  <!-- <a class="navbar-item navbar-item-dropdown" href="#">ZH</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="container py-4">
        <div class="columns is-vcentered">
          <div class="column">
            <h2 class="title is-spaced">Easy to run the node</h2>
            <p class="subtitle">
              Easynodes is a staking service provider that focuses on PoS. We
              will Provide you with convenient, safe and stable enterprise-level
              services.
            </p>
            <a class="button is-primary" href="#">Start Staking</a>
          </div>
          <div class="column"><img src="img/1.png" alt="" /></div>
        </div>
        <hr class="my-6" />
      </div>

      <div class="container has-text-centered py-4">
        <a class="hidden-item" name="working"></a>
        <h2 class="title mb-6">Running</h2>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-4">ETH2.0</h3>
                <p class="block">
                  We support the operation of escrow, the private key of the
                  asset is controlled by yourself, which is more secure.
                </p>
                <h4 class="title is-spaced is-5">
                  $20 <small> / monthly</small>
                </h4>
                <button class="button is-primary" type="button">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-4">PRV</h3>
                <p class="block">
                  Conveniently run PRV virtual nodes and obtain stable income.
                  The estimated annualized income is 20%.
                </p>
                <h4 class="title is-spaced is-5">
                  $9 <small> / monthly</small>
                </h4>
                <button class="button is-primary" type="button">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-4">XYM</h3>
                <p class="block">
                  Symbol will be launched in January next year. We support
                  running Symbol super nodes in a managed way, make an
                  appointment immediately.
                </p>
                <h4 class="title is-spaced is-5">
                  $50 <small> / monthly</small>
                </h4>
                <button class="button is-primary" type="button">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered py-4 pt-6">
        <a class="hidden-item" href="#" name="waiting"></a>
        <h2 class="title mb-6">Coming soon</h2>
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-4">ZEN</h3>
                <p class="block">
                  Just deposit 42 or 500 ZEN to run the master node immediately.
                </p>
                <h4 class="title is-spaced is-5">
                  Undetermine <small> / monthly</small>
                </h4>
                <button class="button is-primary is-outlined" type="button">
                  Waiting For
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container has-text-centered py-4 pt-6">
        <a class="hidden-item" href="#" name="features"></a>
        <h2 class="title mb-6">Features of Easynodes</h2>
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
                <h5 class="title is-5">Safety</h5>
                <div class="level">
                  <p class="block pt-1 pl-1 lr-1">
                    Decentralization, your virtual assets are in your own
                    wallet.
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
                <h5 class="title is-5">Convenient</h5>
                <div class="level">
                  <p class="block pt-1 pl-1 lr-1">
                    Simplified operation, fewer steps. Start now.
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
                <h5 class="title is-5">Profession</h5>
                <div class="level">
                  <p class="block pt-1 pl-1 lr-1">
                    More than ten years of developer's experience to support
                    you.
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
                <h5 class="title is-5">Preferential</h5>
                <div class="level">
                  <p class="block pt-1 pl-1 lr-1">
                    Preferential prices, super cost-effective, bring maximum
                    benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <a class="level-item" href="#">Support</a>
            <a class="level-item" href="#">Staking</a>
            <a class="level-item" href="#">Privacy</a>
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
export default {
  name: "App",
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
