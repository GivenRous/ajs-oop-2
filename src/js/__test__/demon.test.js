import Demon from "../demon";

test("valid arguments", () => {
  const result = new Demon("Character");
  expect(result).toEqual({
    name: "Character",
    type: "Demon",
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});
