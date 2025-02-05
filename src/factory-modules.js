const TodoItem = function (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist
) {
  const CheckListItem = function (description, isCompleted) {
    checklistItem = {};

    Object.defineProperties(checklistItem, {
      description: {
        get: () => description,
        set: (newTitle) => {
          if (typeof newDescription === "string") description = newDescription;
          else alert("Description must be a string.");
        },
        isCompleted: {
          get: () => isCompleted,
          set: (newCompleted) => {
            if (typeof newCompleted === "boolean") isCompleted = newCompleted;
            else alert("Completed must be a boolean.");
          },
        },
      },
    });

    return checklistItem;
  };

  const todoItem = {};

  Object.defineProperties(todoItem, {
    title: {
      get: () => title,
      set: (newTitle) => {
        if (typeof newTitle === "string") title = newTitle;
        else alert("Title must be a string.");
      },
    },
    description: {
      get: () => description,
      set: (newDescription) => {
        if (typeof newDescription === "string") description = newDescription;
        else alert("Description must be a string.");
      },
    },
    dueDate: {
      get: () => dueDate,
      set: (newDueDate) => {
        if (new Date(newDueDate).toString() !== "Invalid Date")
          dueDate = newDueDate;
        else alert("Invalid date format.");
      },
    },
    priority: {
      get: () => priority,
      set: (newPriority) => {
        if (["low", "medium", "high"].includes(newPriority))
          priority = newPriority;
        else alert('Priority must be "low", "medium", or "high".');
      },
    },
    notes: {
      get: () => notes,
      set: (newNotes) => {
        if (typeof newNotes === "string") notes = newNotes;
        else alert("Notes must be a string.");
      },
    },
    checklist: {
      get: () => checklist,
      set: (newChecklist) => {
        if (Array.isArray(newChecklist)) checklist = newChecklist;
        else alert("Checklist must be an array.");
      },
    },
  });

  return { title, description, dueDate, priority, notes, checklist };
};

const Project = function (title, todoItems) {
  const project = {};

  Object.defineProperties(project, {
    title: {
      get: () => title,
      set: (newTitle) => {
        if (typeof newTitle === "string") title = newTitle;
        else alert("Title must be a string.");
      },
    },
    todoItems: {
      get: () => todoItems,
      set: (newTodoItems) => {
        if (Array.isArray(newTodoItems)) todoItems = newTodoItems;
        else alert("Todo items must be an array.");
      },
    },
  });

  return project;
};

export { TodoItem, Project };
