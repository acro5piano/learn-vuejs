<div id="app">
  <h2>Task list</h2>
  <table>
    <tr v-for="(task, index) in tasks">
      <td>
        <input v-if="task.editable"
               v-model="task.text"
               v-on:keyup.enter="editTask(index, task.text)">
        <p v-else="task.editable">{{ task.text }}</p>
      </td>
      <td>
        <button v-on:click="makeTaskEditable(index)">
          edit
        </button>
      </td>
      <td>
        <button v-on:click="deleteTask(index)">delete</button>
      </td>
    </tr>
  </table>
  <h2>Add new task</h2>
  <input v-on:keyup.enter="addTask" v-model="newTaskName">
</div>
