import { InMemoryUsersRepository } from "modules/users/repositories/in-memory/InMemoryUsersRepository";

import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("Should de able to create a new user.", async () => {
    const user = {
      name: "User Test",
      email: "test@email.com",
      password: "123test",
    };

    await createUserUseCase.execute({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  });
});
