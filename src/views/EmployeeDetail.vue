<template>
  <div></div>
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

  // vuexストアのGetters経由で取得したリクエストパラメターのIDから１件の従業員情報を取得する
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
}
</script>

<style scoped></style>
