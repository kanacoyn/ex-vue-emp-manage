<template>
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
    <title>情報登録</title>
    <style>
      .register-page {
        width: 600px;
      }
    </style>
  </head>
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
              <router-link to="/registerAdmin">管理者登録</router-link> |
            </div>
          </div>
        </div>
      </header>

      <div class="top-wrapper">
        <div class="container">
          <div class="row register-page">
            <div class="error" >{{ response.data.message}}</div>
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
import axios from "axios";
@Component
export default class RegisterAdmin extends Vue {
  private errorMessage = "エラーメッセージ";
  private lastName = "姓";
  private firstName = "名";
  private mailAddress = "メールアドレス";
  private password = "パスワード";

  // 情報管理者を登録する
  async registerAdmin(): Promise<void> {
    const response = await axios.post(
      "http://153.127.48.168:8080/ex-emp-api/employee/employees",
      {
        name: this.lastName + "" + this.firstName,
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    console.dir(JSON.stringify(response));

    if (response.data.status === "success") {
      this.$router.push("/loginAdmin");
    } else if (response.data.status === "error") {
      this.$router.push(response.data.message);
    }
  }
}
</script>

<style scoped id="admin">
.register-page {
  width: 600px;
}
</style>
