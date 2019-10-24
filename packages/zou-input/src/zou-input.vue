<!--test.vue-->
<template>
  <div>
    <div v-if="type == 'text'">
      <input type="type" v-model="value" :disabled='disabled' >{{ value }}{{ type }}
    </div>
    <textarea v-else></textarea>
  </div>
</template>

<script>
export default {
  name: "zou-input",
  data() {
    return {
      value: "",
      haha: "hahhaha"
      // flag: false
    };
  },
  props: {
    type: {
      type: String,
      default: "text"
      // required: true
    },
    disabled: {                     
      type: Boolean,
      default: false
    }
  },
  methods: {
    inputDisabled() {
      return this.disabled;
    }
  }
};
</script>

<style >
.echojoy-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>

input 的 disabled属性， disabled disabled="true/false" 都是禁用状态 看一下elementui怎么解决的