const employees = [
  {
    id: 1,
    email: "e@e.com",
    password: "123",
    firstName: "Aarav",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "System Architecture Design",
        description:
          "Design the system architecture for the new project to ensure scalability and maintainability.",
        date: "2024-11-10",
        category: "Architecture",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review for Module X",
        description:
          "Conduct a detailed code review for the new feature in module X, ensuring coding standards and best practices.",
        date: "2024-11-11",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Client Presentation Preparation",
        description:
          "Prepare a comprehensive presentation for the client to showcase the product's progress and features.",
        date: "2024-11-12",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Anaya",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Feature Implementation for Project B",
        description:
          "Implement the new features as specified in the latest release for Project B, ensuring integration with existing components.",
        date: "2024-11-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Unit Testing for New Module",
        description:
          "Run unit tests to verify the functionality and stability of the newly implemented module, ensuring all edge cases are covered.",
        date: "2024-11-12",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Weekly Progress Report",
        description:
          "Prepare and submit the weekly progress report summarizing development, testing, and project milestones.",
        date: "2024-11-13",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Status Update Meeting",
        description:
          "Organize a meeting to update the team on project status, new deadlines, and any roadblocks.",
        date: "2024-11-14",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Ishaan",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Client Feedback Analysis",
        description:
          "Analyze feedback received from the client to identify issues and areas of improvement for the product.",
        date: "2024-11-10",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prototype Development for Feature Y",
        description:
          "Develop an initial prototype for the new feature Y, incorporating client requirements and design specifications.",
        date: "2024-11-11",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Coordination with Design Team",
        description:
          "Coordinate with the design team to ensure feature Y’s design aligns with development requirements and timeline.",
        date: "2024-11-13",
        category: "Coordination",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Project C Documentation Preparation",
        description:
          "Prepare the project documentation for Project C, outlining key features, architecture, and installation guides.",
        date: "2024-11-15",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review Project Requirements",
        description:
          "Review the project requirements to ensure they are clear and achievable within the given timeline and resources.",
        date: "2024-11-16",
        category: "Review",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Vihaan",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        title: "Bug Fixing in Application",
        description:
          "Identify and fix critical bugs in the application that affect functionality and user experience.",
        date: "2024-11-10",
        category: "Debugging",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Unit Testing for Module Z",
        description:
          "Write and run unit tests for module Z, ensuring full coverage and no regressions.",
        date: "2024-11-12",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Code Refactoring",
        description:
          "Refactor legacy code to improve readability, reduce technical debt, and enhance maintainability.",
        date: "2024-11-13",
        category: "Refactoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Reyansh",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Optimize Database Queries",
        description:
          "Optimize SQL queries to improve database performance and reduce response times for large datasets.",
        date: "2024-11-10",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Performance Testing of Application",
        description:
          "Conduct performance tests on the application to identify bottlenecks and areas for optimization.",
        date: "2024-11-11",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Backend Team Coordination",
        description:
          "Coordinate with the backend team to address API issues and ensure seamless integration with frontend systems.",
        date: "2024-11-12",
        category: "Coordination",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Deploy Application Update",
        description:
          "Deploy the latest application update to the production environment, ensuring minimal downtime and proper version control.",
        date: "2024-11-14",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { admin, employees };

  //   console.log(JSON.parse(data)); is done to convert or basically parse into arrays
};
