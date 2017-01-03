var app = new Vue({
  el: '#app',
  data: {
    tasks: [{"text":"Learn JavaScript","editable":false},{"text":"Learn Vue","editable":false},{"text":"Build todo list","editable":false}],
    newTaskName: '',
  },
  computed: {
    getTasks: function() {
      this.$http.get('/tasks').then(function(res) {
        return res.data
      })
    },
  },

  methods: {
    addTask: function () {
      this.tasks.push({ text: this.newTaskName, editable: false})
      this.newTaskName = ''
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1)
    },
    editTask: function (index, text) {
      this.tasks[index].text = text
      this.tasks[index].editable = false
    },
    makeTaskEditable: function (index) {
      this.tasks[index].editable = true
    },
  }

})

var head = new Vue({
  el: '#head',
  data: {
    title: 'Todo list'
  },
})
