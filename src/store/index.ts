/**
 * Vuexストアに共通情報を持たせる.
 */
import Vue from "vue";
import Vuex from "vuex";
import { Employee } from "@/types/employee";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 従業員数
    totalEmployeeCount: 0,
    // 従業員一覧
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    //  従業員一覧情報をwebAPIか等取得してmutationを呼び出す
    async getEmployeeList(context, payload) {
      // 外部webAPIの呼び出し
      const response = await axios.get(
        "http://153.127.48.168:8080/ex-emp-api/employee/employees"
      );
      payload = response.data;
      context.commit("addEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    // 従業員一覧情報を作成してstateに格納する
    showEmployeeList(state, payload) {
      // payloadないの従業員一覧をstateの従業員一覧に格納
      state.employees = new Array<Employee>();
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  getters: {
    // 従業員数を返す
    getEmployeeCount(state) {
      return state.totalEmployeeCount;
    },
    // 従業員一覧を返す
    getEmployee(state) {
      return state.employees;
    },
    // IDから従業員を１件検索して返す
    getEmployeeById(state) {
      return (id: number) => {
        return state.employees.filter((employee) => employee.id == id);
      };
    },
  }, // end getters
  modules: {}, // end modules
});
