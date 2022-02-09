<template>
  <div>
    <div class="container">
      <div>従業員数:{{ employeeCount() }} 人</div>
      <div class="row">
        <table class="striped">
          <thead>
            <tr>
              <th>名前</th>
              <th>入社日</th>
              <th>扶養人数</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="employee of employees" v-bind:key="employee.id">
              <td>
                <a href="'employeeDetail.html'+ employee.id">{{
                  employees()
                }}</a>
              </td>
              <td>
                {{ employee.hireDate }}
              </td>
              <td>{{ employee.dependentsCount }}人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
            <tr>
              <td><a href="employeeDetail.html">山田太郎</a></td>
              <td>2000/1/1</td>
              <td>3人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";
@Component
export default class EmployeeList extends Vue {
  created(): void {
    this.$store.dispatch("getEmployeeList");
  }

  employeeCount(): number {
    return this.$store.getters.getEmployeeCount;
  }
  employees(): Array<Employee> {
    return this.$store.getters.getEmployees;
  }
}
</script>

<style scoped></style>
