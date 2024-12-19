// import { remove } from "@vue/shared";

const state = {
    todos: [],
}

const mutations = {
    ADD_TODO(state, todo){
        state.todos.push(todo); //新增 to-do
    },
    REMOVE_TODO(state, index){
        state.todos.splice(index, 1); //刪除指定 to-do
    },
    TOGGLE_TODO(state, index){
        state.todos[index].completed = !state.todos[index].completed; //切換完成
    },
};

const actions = {
    addTodo({ commit }, todo){
        commit('ADD_TODO',todo); //呼叫mutation
    },
    removeTodo({ commit }, index){
        commit('REMOVE_TODO', index);
    },
    toggleTodo({ commit }, index){
        commit('TOGGLE_TODO', index);
    },
};

const getters = {
    allTodos: (state) => state.todos, //取的所有 to-do
}


export default{
    state,
    mutations,
    actions,
    getters,
};