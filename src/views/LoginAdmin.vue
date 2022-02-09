<template>
  <div>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!--Import Google Icon Font-->
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <!-- Compiled and minified CSS -->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/index.css" />
        <link rel="stylesheet" href="css/header.css" />
        <link rel="stylesheet" href="css/footer.css" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ログイン</title>
        <style>
          .login-page {
            width: 600px;
          }
        </style>
      </head>

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
                <router-link to="/registerAdmin">管理者登録</router-link> |
              </div>
            </div>
          </div>
        </header>
        <div class="top-wrapper">
          <div class="container">
            <div class="row login-page">
              <div class="col s12 z-depth-6 card-panel">
                <div class="error">{{ response.data.message }}</div>
                <form class="login-form">
                  <div class="row"></div>
                  <div class="row">
                    <div class="input-field col s12">
                      <i class="material-icons prefix">mail_outline</i>
                      <input
                        class="validate"
                        id="mailAddress"
                        type="email"
                        v-model="mailAdress"
                      />
                      <label
                        for="mailAddress"
                        data-error="wrong"
                        data-success="right"
                        >メールアドレス</label
                      >
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <i class="material-icons prefix">lock_outline</i>
                      <input id="password" type="password" v-model="password" />
                      <label for="password">パスワード</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <button
                        type="button"
                        class="btn btn-register waves-effect waves-light col s12"
                        v-on:click="loginAdmin()"
                      >
                        ログイン
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s6 m6 l6">
                      <p class="margin medium-small">
                        <a href="registerAdmin.html">管理者登録はこちら</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
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
    </html>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
