<template>
  <div class="person">
    <div class="person-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th>Номер</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="person-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr v-for="(worker, index) in allWorkers" :key="index">
            <td>{{ worker.id }}</td>
            <td class="person-content__fio">{{ worker.fio }}</td>
            <td>{{ worker.tel }}</td>
            <td></td>
            <td>
              <button
                class="person-content__button"
                @click="deletePersonnel(index)"
              >
                Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["allWorkers"],

  methods: {
    ...mapMutations(["removeFromPersonnel"]),

    deletePersonnel(index) {
      this.removeFromPersonnel(index);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin: 0 auto;
  table-layout: fixed;
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  text-transform: uppercase;
}
td {
  padding: 20px 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 15px;
  color: #1f1f1f;
  background-color: #ffffff;
  margin: 100px;
}
.person {
  &-header {
    background-color: #999999;
  }
  &-content {
    height: 600px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid #999999;
    &__fio {
      font-weight: 400;
    }
    &__button {
      padding: 10px;
      border: none;
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 1px 1px 3px #333333;
      transition: 0.3s;
      &:hover {
        color: #ffffff;
        background-color: #ff0000;
        box-shadow: 3px 3px 5px #800000;
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
