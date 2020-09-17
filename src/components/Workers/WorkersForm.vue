<template>
  <div class="modal">
    <div class="modal-header">
      <div class="modal-header__title">
        Сведения <br />
        о персонале
      </div>
      <button class="modal-header__button" @click="showModal = true">
        Добавить
      </button>
    </div>

    <!-- overlay -->
    <div class="overlay" v-if="showModal" @click="showModal = false"></div>

    <!-- modal -->
    <div class="modal-form animated bounceIn" v-if="showModal">
      <button class="modal-form__close" @click="showModal = false">x</button>
      <div class="modal-form__title">Сотрудник</div>
      <div v-if="error" class="modal-form__error">Что-то пошло не так</div>
      <div class="modal-form-inputs">
        <input
          type="text"
          class="modal-form-inputs__fio"
          v-model="fio"
          placeholder="ФИО"
        />
        <the-mask
          type="tel"
          class="modal-form-inputs__tel"
          v-model="tel"
          placeholder="Телефон"
          :mask="'+7(###)-###-##-##'"
        />
      </div>
      <button class="modal-form__button" @click="submitForm()">Создать</button>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import { mapMutations } from "vuex";

export default {
  props: ["allWorkers"],
  data() {
    return {
      fio: "",
      tel: "",
      error: false,
      showModal: false,
    };
  },
  components: {
    TheMask,
  },
  methods: {
    ...mapMutations(["addWorker", "deleteWorker"]),

    submitForm() {
      if (this.fio && this.tel != "") {
        this.addWorker({
          id: this.allWorkers.length + 1,
          fio: this.fio,
          tel:
            "+7(" +
            this.tel[0] +
            this.tel[1] +
            this.tel[2] +
            ")-" +
            this.tel[3] +
            this.tel[4] +
            this.tel[5] +
            "-" +
            this.tel[6] +
            this.tel[7] +
            "-" +
            this.tel[8] +
            this.tel[9],
        });
        (this.fio = ""), (this.tel = ""), (this.error = false);
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #99999980;
}
.modal {
  margin: 30px 0;
  &-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &__title {
      font-weight: 600;
      font-size: 72px;
    }
    &__button {
      margin-bottom: 15px;
      padding: 10px 49px;
      border: 1px #999999 solid;
      border-radius: 10px;
      background-color: #ffffff;
      transition: 0.1s;
      &:hover {
        box-shadow: 0px 0px 5px 1px #999999;
      }
      &:focus {
        outline: none;
      }
      &:active {
        box-shadow: 0px 0px 3px 0px #999999;
      }
    }
  }
  &-form {
    text-align: center;
    position: absolute;
    display: block;
    width: 300px;
    height: 300px;
    z-index: 9999;
    margin: 0 auto;
    padding: 20px 30px;
    top: 150px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
    animation-duration: 0.5s;
    &__close {
      position: absolute;
      padding: 5px 10px;
      box-shadow: 1px 1px 1px #cccccc;
      color: #ff0000;
      border: none;
      top: 10px;
      right: 10px;
      transition: 0.1s;
      border-radius: 50%;
      &:hover {
        background-color: #ff0000;
        color: #fff;
        border: none;
        cursor: pointer;
      }
    }
    &__title {
      margin-top: 15px;
      font-weight: 600;
      font-size: 30px;
      text-align: center;
    }
    &__error {
      color: #ff0000;
    }
    &-inputs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 30px 0 30px 0;
      &__fio,
      &__tel,
      input {
        width: 100%;
        height: 25px;
        padding: 5px 10px;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 15px;
        color: #333333;
        border: 1px #999999 solid;
        border-radius: 5px;
        &:focus {
          outline: none;
          border: 1px #333333 solid;
        }
      }
    }
    &__button {
      padding: 10px 40px;
      border: 1px #999999 solid;
      border-radius: 10px;
      background-color: #ffffff;
      transition: 0.1s;
      &:hover {
        box-shadow: 0px 0px 5px 1px #999999;
      }
      &:focus {
        outline: none;
      }
      &:active {
        box-shadow: 0px 0px 3px 0px #999999;
      }
    }
  }
}
</style>
