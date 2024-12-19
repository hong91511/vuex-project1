<template>
    <div>
      <h1>To-Do List</h1>
      <input v-model="newTodo" placeholder="輸入新任務" />
      <button @click="addTodo">新增</button>
  
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <label>
            <input type="checkbox" v-model="todo.completed" @change="toggleTodo(index)" />
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
              {{ todo.text }}
            </span>
          </label>
          <button @click="removeTodo(index)">刪除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTodo: '', // 儲存使用者輸入
      };
    },
    computed: {
      ...mapGetters(['allTodos']), // 使用 Vuex 的 Getter
      todos() {
        return this.allTodos;
      },
    },
    methods: {
      ...mapActions(['addTodo', 'removeTodo', 'toggleTodo']), // 使用 Vuex 的 Actions
      addTodo() {
        if (this.newTodo.trim() !== ''){
            const newTodo = {
            text: this.newTodo,
            completed: false,
        };
        this.$store.dispatch('addTodo',newTodo); //呼叫vuex action
        this.newTodo = ''; // 清空輸入框
        }
      },
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  button {
    margin-left: 10px;
  }
  </style>
  