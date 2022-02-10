<template>
  <div>
    <div class="container">
      <div class="row">
        <form>
          <fieldset>
            <legend>従業員情報</legend>
            <table>
              <tr>
                <th nowrap>従業員名</th>
                <td>
                  <span>{{ currentEmployee.name }}</span>
                </td>
              </tr>

              <tr>
                <th nowrap>写真</th>
                <td>
                  <img v-bind:src="currentEmployeeImage" />
                </td>
              </tr>
              <tr>
                <th nowrap>性別</th>
                <td>
                  <span> {{ currentEmployee.gender }} </span>
                </td>
              </tr>
              <tr>
                <th nowrap>入社日</th>
                <td>
                  <span> {{ currentEmployee.hireDate }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>メールアドレス</th>
                <td>
                  <span> {{ currentEmployee.mailAddress }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>郵便番号</th>
                <td>
                  <span> {{ currentEmployee.zipCode }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>住所</th>
                <td>
                  <span> {{ currentEmployee.address }}</span>
                </td>
              </tr>
              <tr>
                <th nowrap>電話番号</th>
                <td>
                  <span>
                    {{ currentEmployee.telephone }}
                  </span>
                </td>
              </tr>
              <tr>
                <th nowrap>給料</th>
                <td>
                  <span> {{ currentEmployee.salary }}円</span>
                </td>
              </tr>
              <tr>
                <th nowrap>特性</th>
                <td>
                  <span>
                    {{ currentEmployee.characteristics }}
                  </span>
                </td>
              </tr>
              <tr>
                <th nowrap>扶養人数</th>
                <td>
                  <div class="input-field col s12">
                    <div class="error">
                      {{ errorMessage }}
                    </div>
                    <input
                      id="dependentsCount"
                      type="text"
                      v-model="currentDependentsCount"
                      class="validate"
                      value="3"
                      required
                    />
                    <label for="dependentsCount2"> </label>
                  </div>
                </td>
              </tr>
            </table>

            <button
              type="button"
              class="btn btn-register waves-effect waves-light"
              v-on:click="update"
            >
              更新
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";
import axios from "axios";

@Component
export default class EmployeeDetail extends Vue {
  // 対象の従業員オブジェクト
  private currentEmployee = new Employee(
    0,
    "",
    "",
    "",
    new Date(),
    "",
    "",
    "",
    "",
    0,
    "",
    0
  );
  // エラ-メッセージ
  private errorMessage = "";
  // 対象の従業員のimageパス
  private currentEmployeeImage = "";
  // 対象の従業員の扶養家族人数
  private currentDependentsCount = 0;

  /**
   * vuexストアのGetters経由で取得したリクエストパラメターのIDから１件の従業員情報を取得する.
   */
  created(): void {
    // 送られてきたIDをnumberに変換して取得する
    const employeeId = Number(this.$route.params.id);
    // Getterで取得したIDに１っ県の従業員情報を渡してCurrentEmployeeに代入
    this.currentEmployee = this.$store.getters.getEmployeeById(employeeId);
    // 従業員情報から画像ファイルを取り出し、imgディレクトリからパスを取得して代入する
    this.currentEmployeeImage =
      "http://153.127.48.168:8080/ex-emp-api/img/" + this.currentEmployee.image;
    // 取得した従業員情報から付与人数を取り出し代入する
    this.currentDependentsCount = this.currentEmployee.dependentsCount;
  }
  /**
   * 付与人数を更新する.
   */
  async update(): Promise<void> {
    const response = await axios.post(
      "http://153.127.48.168:8080/ex-emp-api/employee/employees",
      {}
    );
    console.dir(JSON.stringify(response));

    if (response.data.status === "success") {
      this.$router.push("/employeeList");
    } else if (response.data.status === "error") {
      this.errorMessage = "ログインに失敗" + response.data.message;
    }
  }
}
</script>

<style scoped></style>
