# lab-architecture

## 1. Technical project need

- PHP code becomes difficult to maintain quickly when presentation, business rules, and database access are mixed together.
- This lab shows how to structure an application so it is easier to read, more stable, and simpler to evolve.
- The goal is to separate responsibilities without losing the overall logic of the project.
- The objective is to learn how to organize an application in 3 layers: presentation, business logic, and data.
- This provides a clearer foundation for larger PHP projects, with less duplication and fewer regression risks.

## 2. Concepts and techniques to learn

- 3-tier architecture: separating the application into three areas: interface, business logic, and data.
  - (example: the view displays information, the service processes it, and the DAO reads or writes to the database)
- DAO (Data Access Object): isolating data access logic.
  - (example: `UserDao::findAll()` to retrieve users without mixing SQL and application logic)
- Service: grouping business processing and validation rules.
  - (example: `UserService::createUser()` which checks rules before saving)
- BaseService: centralizing common methods used by several services.
  - (example: `findAll()`, `save()`, or `delete()` shared between multiple services)
- Practical test: verifying that an expected behavior works in the right context.
  - (example: calling a service and validating the result for a simple business rule)

## 3. Expected implementation

Create a small PHP project that illustrates an application organized into 3 layers to manage a basic resource, such as users, products, or messages.

- The presentation layer should only display results and must not contain business logic or SQL queries.
- Database access should be isolated in separate DAO classes with clear methods for reading and writing the relevant resource.
- Add one or more Service classes that validate data, apply business rules, and orchestrate processing.
- Introduce a common BaseService class to factor reusable methods and avoid duplication.
- Clearly show the separation of responsibilities between layers with a concrete example of each component in use.
- Include a simple test or demo to verify that a business rule or data access path works as expected.
- Provide a minimal Quick Start and an executable Hello World in PHP to run the project quickly and illustrate the workflow.
- Keep the example clean, readable, and educational, without heavy frameworks or over-engineering.
- Briefly explain the role of each layer and the benefits of this organization in a larger PHP project.
