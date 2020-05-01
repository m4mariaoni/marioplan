const initState = {
  projects: [
    {
      id: 1,
      title: "help me find peach",
      content: "quia et suscipit\nsuscipit",
    },
    {
      id: 2,
      title: "collect all the stars",
      content: "est rerum tempore vitae\nsequi",
    },
    {
      id: 3,
      title: "ea molestias quasi",
      content: "et iusto sed quo iure\nvoluptatem",
    },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
