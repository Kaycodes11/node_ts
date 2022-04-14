export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tasks Api",
      version: "1.0.0",
      description: "A simple todo Task Api",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
