<template>
  <div class="container">
    <div class="row register-page">
      <div class="error">{{ errorMessage }}</div>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
@Component
export default class RegisterAdmin extends Vue {
  private errorMessage = "";
  private lastName = "";
  private firstName = "";
  private mailAddress = "";
  private password = "";

  /**
   * 情報管理者を登録する.
   *
   * @returns Promiseオブジェクト
   *
   */
  async registerAdmin(): Promise<void> {
    const response = await axios.post(
      "http://153.127.48.168:8080/ex-emp-api/insert",
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
      this.errorMessage = "登録に失敗しました" + response.data.message;
    }
  }
}
</script>

<style scoped="scoped">
.register-page {
  width: 600px;
}
</style>
