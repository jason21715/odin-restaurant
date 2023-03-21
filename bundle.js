/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/get.js":
      /*!********************!*\
  !*** ./src/get.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assignID": () => (/* binding */ assignID),\n/* harmony export */   "createProject": () => (/* binding */ createProject),\n/* harmony export */   "createTask": () => (/* binding */ createTask),\n/* harmony export */   "currentDiv": () => (/* binding */ currentDiv),\n/* harmony export */   "getCurrentID": () => (/* binding */ getCurrentID),\n/* harmony export */   "projectArr": () => (/* binding */ projectArr),\n/* harmony export */   "pushProject": () => (/* binding */ pushProject),\n/* harmony export */   "pushTask": () => (/* binding */ pushTask),\n/* harmony export */   "removeTask": () => (/* binding */ removeTask),\n/* harmony export */   "showProjects": () => (/* binding */ showProjects),\n/* harmony export */   "showTasks": () => (/* binding */ showTasks),\n/* harmony export */   "taskArr": () => (/* binding */ taskArr)\n/* harmony export */ });\n//factories?\n\nvar projectArr = [];\nfunction createProject(title, id) {\n  var taskArray = [];\n  return {\n    title: title,\n    id: id,\n    taskArray: taskArray,\n    showProjectArr: function showProjectArr() {\n      return projectArr;\n    },\n    pushTask: function pushTask(task) {\n      taskArray.push(task);\n    }\n  };\n}\nfunction pushProject(object) {\n  projectArr.push(object);\n}\nfunction showProjects() {\n  return projectArr;\n}\nvar taskArr = [];\nfunction pushTask(task) {\n  taskArr.push(task);\n}\nfunction showTasks() {\n  return taskArr;\n}\nfunction removeTask(task) {\n  var index = taskArr.indexOf(task);\n  if (index > -1) {\n    taskArr.splice(index, 1);\n  }\n}\nfunction createTask(title, dueDate, priority, description, notes, taskID, projectID) {\n  projectID = getCurrentID();\n  return {\n    title: title,\n    dueDate: dueDate,\n    priority: priority,\n    description: description,\n    notes: notes,\n    taskID: taskID,\n    projectID: projectID\n  };\n}\nfunction assignID() {\n  return String(Date.now() * Math.random());\n}\nvar id;\nfunction currentDiv(projectID) {\n  id = projectID;\n}\nfunction getCurrentID() {\n  return id;\n}\n\n//# sourceURL=webpack://odin-todolist/./src/get.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addGrid": () => (/* binding */ addGrid),\n/* harmony export */   "createNewTaskFunction": () => (/* binding */ createNewTaskFunction),\n/* harmony export */   "createProjectButtonFunction": () => (/* binding */ createProjectButtonFunction),\n/* harmony export */   "createToDoForm": () => (/* binding */ createToDoForm),\n/* harmony export */   "defaultProjectFunction": () => (/* binding */ defaultProjectFunction),\n/* harmony export */   "elementFromHtml": () => (/* binding */ elementFromHtml),\n/* harmony export */   "getUserName": () => (/* binding */ getUserName),\n/* harmony export */   "removeButtonFunction": () => (/* binding */ removeButtonFunction),\n/* harmony export */   "removeProjectFunction": () => (/* binding */ removeProjectFunction),\n/* harmony export */   "welcomeTheUser": () => (/* binding */ welcomeTheUser)\n/* harmony export */ });\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./src/get.js");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n//get username\nfunction getUserName() {\n  var usernameInput = document.getElementById("usernameInput");\n  var username = usernameInput.value;\n  return username;\n}\n\n//html template\nfunction elementFromHtml(html) {\n  var template = document.createElement("template");\n  template.innerHTML = html.trim();\n  return template.content.firstElementChild;\n}\n\n//adds second main page\nfunction addGrid() {\n  var grid = elementFromHtml("\\n        <div class=\\"grid-container\\">\\n            <div id=\\"welcome\\"></div>\\n            <div id=\\"details\\"></div>\\n            <div id=\\"projects\\">\\n              <div>\\n                <h1>Projects</h1>\\n              </div>\\n              <div id=\\"projects-grid\\">\\n                <div id=\'project0\' class=\\"projectItem\\"><p>Default Project</p></div>\\n              </div>\\n              <button type=\\"submit\\" id=\\"createProject\\">Create New</button>\\n            </div>\\n            <div id=\\"todos\\">\\n              <div class=\\"todosTitle\\">\\n                <h1>To-dos</h1>\\n                <button type=\\"submit\\" id=\\"createNewTask\\">Create a new task</button>\\n              </div>\\n\\n              <div id=\\"tasks\\">\\n              </div>\\n\\n            </div>\\n        </div>\\n    ");\n  document.body.appendChild(grid);\n  (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.currentDiv)("project1");\n}\n\n//create form when creating a new todo\nfunction createNewTaskFunction() {\n  var btn = document.getElementById("createNewTask");\n  btn.addEventListener("click", function () {\n    createToDoForm();\n    createTaskButtonFunction();\n  });\n}\nfunction createTaskButtonFunction() {\n  var btn5 = document.getElementById("submitForm");\n  var tasks = document.getElementById("tasks");\n  var titleInput = document.getElementById("titleInput");\n  var dueDateInput = document.getElementById("dueDateInput");\n  var priorityInput = document.getElementById("priorityInput");\n  var descriptionInput = document.getElementById("descriptionInput");\n  var notesInput = document.getElementById("notesInput");\n  btn5.addEventListener("click", function (e) {\n    e.preventDefault();\n    var task = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(titleInput.value, dueDateInput.value, priorityInput.value, descriptionInput.value, notesInput.value, (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.assignID)());\n    (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.pushTask)(task);\n    var tempArray = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)();\n    var _iterator = _createForOfIteratorHelper(tempArray),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var key = _step.value;\n        if (key.id == (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentID)()) {\n          key.pushTask(task);\n          var taskDiv = elementFromHtml("\\n            <div class=\\"task-item ".concat(task.taskID, "\\">\\n              <h3>Task-").concat(task.title, "</h3>\\n              <p>Due: ").concat(task.dueDate, "</p>\\n              <p>Priority: ").concat(task.priority, "</p>\\n              <p>Description: ").concat(task.description, "</p>\\n            </div>\\n          "));\n          tasks.appendChild(taskDiv);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    showTaskDetail();\n    titleInput.value = "";\n    dueDateInput.value = "";\n    priorityInput.value = "";\n    descriptionInput.value = "";\n    notesInput.value = "";\n  });\n}\n\n//todo form\nfunction createToDoForm() {\n  var details = document.getElementById("details");\n  var form = elementFromHtml("\\n  <form>\\n    <div id=\\"title-grid\\">\\n      <label for=\\"titleInput\\">Title</label> <br>\\n      <input id=\\"titleInput\\" name=\\"titleInput\\" type=\\"text\\">\\n    </div>\\n\\n    <div id=\\"description-grid\\">\\n      <label for=\\"descriptionInput\\">Description</label> <br>\\n      <textarea id=\\"descriptionInput\\" name=\\"descriptionInput\\" type=\\"text\\"></textarea>\\n    </div>\\n\\n    <div id=\\"dueDate-grid\\">\\n      <label for=\\"dueDateInput\\">Due Date</label> <br>\\n      <input id=\\"dueDateInput\\" name=\\"dueDateInput\\" type=\\"date\\">\\n    </div>\\n\\n    <div id=\\"priority-grid\\"> \\n      <h3>Priority</h3>\\n      <input id=\\"priorityInput\\" type=\\"text\\" placeholder=\\"urgency...\\">\\n    </div>\\n\\n    <div id=\\"notes-grid\\">\\n      <label for=\\"notesInput\\">Extra Notes</label> <br>\\n      <textarea  id=\\"notesInput\\" name=\\"notesInput\\" type=\\"text\\"></textarea>\\n    </div>\\n\\n    <div id=\\"submitForm-grid\\">\\n      <button id=\\"submitForm\\">CREATE</button>\\n    </div>\\n  </form>\\n  ");\n  removeAllChildElements(details);\n  details.appendChild(form);\n}\n\n//welcome the user with the current date\nfunction welcomeTheUser(username) {\n  var welcome = document.getElementById("welcome");\n  var welcomeMessage = document.createElement("p");\n  var amountOfTasksMessage = document.createElement("p");\n  var d = new Date().toDateString();\n  welcomeMessage.innerHTML = "Welcome, ".concat(username, " <br> ").concat(d);\n  amountOfTasksMessage.innerHTML = "You have # of tasks due TODAY";\n  welcome.appendChild(welcomeMessage);\n  welcome.appendChild(amountOfTasksMessage);\n  var project1 = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.createProject)("Default", "project1");\n  (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.pushProject)(project1);\n  defaultProjectFunction();\n}\nfunction createProjectButtonFunction() {\n  var createNewProject = document.getElementById("createProject");\n  var projectGrid = document.getElementById("projects-grid");\n  var tempDiv = document.createElement("div");\n  var input = document.createElement("input");\n  var button = document.createElement("button");\n  button.textContent = "+";\n  button.id = "projectTitleSubmit";\n  button.type = "submit";\n  input.id = "projectTitleInput";\n  createNewProject.addEventListener("click", function (e) {\n    e.preventDefault();\n    projectGrid.appendChild(tempDiv);\n    tempDiv.appendChild(input);\n    tempDiv.appendChild(button);\n    tempDiv.id = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.assignID)();\n    tempDiv.style.display = "block";\n    button.addEventListener("click", submitButtonClick);\n    function submitButtonClick(e) {\n      e.preventDefault();\n      var newDiv = document.createElement("div");\n      var p = document.createElement("p");\n      p.classList.add("project-title");\n      var project = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(input.value, (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.assignID)());\n      (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.pushProject)(project);\n      newDiv.id = project.id;\n      newDiv.classList.add("projectItem");\n      projectGrid.appendChild(newDiv);\n      newDiv.appendChild(p);\n      newDiv.addEventListener("click", function () {\n        (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.currentDiv)(project.id);\n        lightUpDiv(project.id);\n        var task = document.getElementById("tasks");\n        removeAllChildElements(task);\n        var _iterator2 = _createForOfIteratorHelper(project.taskArray),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var key = _step2.value;\n            var taskDiv = elementFromHtml("\\n            <div class=\\"task-item ".concat(key.taskID, "\\">\\n              <h3>Task-").concat(key.title, "</h3>\\n              <p>Due: ").concat(key.dueDate, "</p>\\n              <p>Priority: ").concat(key.priority, "</p>\\n              <p>Description: ").concat(key.description, "</p>\\n            </div>\\n          "));\n            task.appendChild(taskDiv);\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n        deleteTaskButton();\n      });\n      newDiv.appendChild(removeProjectFunction());\n      removeButtonFunction(newDiv.id);\n      p.textContent = project.title;\n      tempDiv.style.display = "none";\n      button.removeEventListener("click", submitButtonClick);\n      input.value = "";\n    }\n  });\n}\nfunction removeAllChildElements(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\nfunction removeProjectFunction() {\n  var btn = document.createElement("button");\n  btn.className = "deleteButton";\n  btn.textContent = "-";\n  btn.type = "submit";\n  return btn;\n}\nfunction lightUpDiv(id) {\n  var tempid1 = Array.from(document.querySelectorAll("div.projectItem"));\n  var tempid2 = document.getElementById("".concat(id));\n  var pElement = tempid2.querySelector("p");\n  for (var i = 0; i < tempid1.length; i++) {\n    tempid1[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)";\n    var pElement2 = tempid1[i].querySelector("p");\n    pElement2.style.color = "white";\n  }\n  tempid2.style.backgroundColor = "white";\n  pElement.style.color = "blue";\n}\nfunction removeButtonFunction(currentDiv) {\n  var btn = document.querySelectorAll(".deleteButton");\n  btn.forEach(function (buttons) {\n    return buttons.addEventListener("click", function () {\n      var divId = document.getElementById(currentDiv);\n      divId.remove();\n    });\n  });\n}\nfunction defaultProjectFunction() {\n  var defaultProject = document.getElementById("project0");\n  defaultProject.addEventListener("click", function () {\n    (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.currentDiv)("project1");\n    lightUpDiv("project0");\n    var task = document.getElementById("tasks");\n    removeAllChildElements(task);\n    var tempArray = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)();\n    var _iterator3 = _createForOfIteratorHelper(tempArray),\n      _step3;\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var key = _step3.value;\n        if (key.id == "project1") {\n          var _iterator4 = _createForOfIteratorHelper(key.taskArray),\n            _step4;\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var i = _step4.value;\n              var taskDiv = elementFromHtml("\\n                <div class=\\"task-item ".concat(i.taskID, "\\">\\n                <h3>Task-").concat(i.title, "</h3>\\n                <p>Due: ").concat(i.dueDate, "</p>\\n                <p>Priority: ").concat(i.priority, "</p>\\n                <p>Description: ").concat(i.description, "</p>\\n              </div>\\n                </div>\\n              "));\n              task.appendChild(taskDiv);\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n        }\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n    deleteTaskButton();\n    showTaskDetail();\n  });\n}\nfunction showTaskDetail() {\n  var task = Array.from(document.querySelectorAll("div.task-item"));\n  var detailContainer = document.getElementById("details");\n  var _loop = function _loop() {\n    var a = _task[_i];\n    //Each Div\n    a.addEventListener("click", function () {\n      //Add click\n      var tempArray = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)(); //Get Task Array\n      removeAllChildElements(detailContainer); //Remove anything in details\n      var _iterator5 = _createForOfIteratorHelper(tempArray),\n        _step5;\n      try {\n        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n          var b = _step5.value;\n          //Looping through the Task Array\n          if (b.taskID == a.getAttribute("class").split(" ")[1]) {\n            //If ID is correct\n            var taskDiv = elementFromHtml("\\n          <div class=\'task-detail\'> \\n            <h3>Title: ".concat(b.title, "</h3>\\n            <p>Due: ").concat(b.dueDate, "</p>\\n            <p>Priority: ").concat(b.priority, "</p>\\n            <p>Description: ").concat(b.description, "</p>\\n            <p>Notes: ").concat(b.notes, "</p>\\n          </div>\\n          "));\n            detailContainer.appendChild(taskDiv);\n          }\n        }\n      } catch (err) {\n        _iterator5.e(err);\n      } finally {\n        _iterator5.f();\n      }\n    });\n  };\n  for (var _i = 0, _task = task; _i < _task.length; _i++) {\n    _loop();\n  }\n  deleteTaskButton();\n}\nfunction deleteTaskButton() {\n  var task = Array.from(document.querySelectorAll("div.task-item"));\n  var tempArray = (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.showTasks)();\n  var btn = document.createElement("button");\n  btn.textContent = "delete";\n  btn.classList.add("deleteTaskButton");\n  task.forEach(function (element) {\n    return element.appendChild(btn);\n  });\n  btn.addEventListener("click", function () {\n    var tempID = btn.parentElement.getAttribute("class").split(" ")[1];\n    for (var _i2 = 0, _task2 = task; _i2 < _task2.length; _i2++) {\n      var a = _task2[_i2];\n      if (a.getAttribute("class").split(" ")[1] == tempID) {\n        a.remove();\n        var _iterator6 = _createForOfIteratorHelper(tempArray),\n          _step6;\n        try {\n          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n            var b = _step6.value;\n            if (b.taskID == tempID) {\n              (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.removeTask)(b);\n            }\n          }\n        } catch (err) {\n          _iterator6.e(err);\n        } finally {\n          _iterator6.f();\n        }\n      }\n    }\n  });\n}\n\n//# sourceURL=webpack://odin-todolist/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/main.js":
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");\n/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./src/get.js");\n\n\nwindow.addEventListener("load", function () {\n  getStartedButtonFunction();\n\n  // for (let i = 0; i < projectArr.length; i++) {\n  //   let project = projectArr[i];\n  //   localStorage.setItem(`project_${project.id}`, JSON.stringify(project));\n  // }\n\n  // for (let i = 0; i < taskArr.length; i++) {\n  //   let task = taskArr[i];\n  //   localStorage.setItem(`task_${task.id}`, JSON.stringify(task));\n  // }\n\n  // for (let i = 0; i < localStorage.length; i++) {\n  //   let key = localStorage.key(i);\n  //   let value = JSON.parse(localStorage.getItem(key));\n\n  //   if (key.startsWith("project_")) {\n  //     projectArr.push(value);\n  //   } else if (key.startsWith("task_")) {\n  //     taskArr.push(value);\n  //   }\n  // }\n});\n\nfunction getStartedButtonFunction() {\n  var getStartedButton = document.getElementById("getStartedButton");\n  var usernameInput = document.getElementById("usernameInput");\n  var mainScreen = document.getElementById("mainScreen");\n  getStartedButton.addEventListener("click", function () {\n    if (usernameInput.value !== "") {\n      var currentUserName = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getUserName)();\n      mainScreen.remove(); //remove front page\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addGrid)();\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createNewTaskFunction)(); //adds functions for buttons\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createProjectButtonFunction)();\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeProjectFunction)();\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.welcomeTheUser)(currentUserName);\n    }\n  });\n}\n\n//# sourceURL=webpack://odin-todolist/./src/main.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/main.js");
  /******/
  /******/
})();
