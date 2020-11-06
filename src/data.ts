import faker from "faker";
import { Predicate } from "fp-ts/function";

const seeds = "**********";
const emptySeeds = Array.from(seeds, (_: unknown): undefined => undefined);

export const makeSeedObject = (empties: undefined[] = emptySeeds) => {
  return empties.map((_: unknown) => {
    const pw = faker.internet.password();
    return {
      password: pw,
      confirmPassword: pw,
      email: faker.internet.email(),
      age: faker.random.number(),
    };
  });
};

// const repeatReducer = (acc: string, curr: string) => `${acc}${curr}` )
const dataList = Array.from("*********", (_: string) => makeSeedObject());

console.log(dataList);

export default dataList;
