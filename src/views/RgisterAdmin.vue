<template id="registerAdmin">
  <div>
    <body>
      <header>
        <div class="container">
          <div class="header">
            <div class="header-left">
              <a href="login.html">
                <img class="logo" src="img/header_logo.png" />
              </a>
            </div>

            <div class="header-right">
              <a href="registerAdmin.html">管理者登録</a>
            </div>
          </div>
        </div>
      </header>
      <div class="top-wrapper">
        <div class="container">
          <div class="row register-page">
            <div class="error">エラーメッセージ</div>
            <form class="col s12" id="reg-form" action="#">
              <div class="row">
                <div class="input-field col s6">
                  <input
                    id="last_name"
                    type="text"
                    v-model="lastName"
                    class="validate"
                    required
                  />
                  <label for="last_name">姓</label>
                </div>
                <div class="input-field col s6">
                  <input
                    id="first_name"
                    type="text"
                    v-model="firstName"
                    class="validate"
                    required
                  />
                  <label for="first_name">名</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    v-model="mailAddress"
                    class="validate"
                    required
                  />
                  <label for="email">メールアドレス</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    class="validate"
                    minlength="8"
                    required
                  />
                  <label for="password">パスワード</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6">
                  <button
                    type="button"
                    class="btn btn-large btn-register waves-effect waves-light"
                    v-on:click="registerAdmin()"
                  >
                    登録
                    <i class="material-icons right">done</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="footer">
            <div class="footer-center">©️ xxx Inc.</div>
          </div>
        </div>
      </footer>
      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
@Component
export default class RegisterAdmin extends Vue {
  private erroeMessage = "エラ〜メッセージ";
  private lastName = "姓";
  private firstName = "名";
  private mailAdress = "メールアドレス";
  private password = "パスワード";
}
</script>

<style scoped></style>
