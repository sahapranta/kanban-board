require("./bootstrap");

window.Vue = require("vue");

//Register our components (in the next step)
Vue.component("kanban-board", require("./components/KanbanBoard.vue").default);

const app = new Vue({
    el: "#app"
});
