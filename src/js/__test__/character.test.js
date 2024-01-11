import Character from "../character";

test("valid arguments", () => {
  const result = new Character("Character", "Magician");
  expect(result).toEqual({
    name: "Character",
    type: "Magician",
    health: 100,
    attack: undefined,
    defence: undefined,
    level: 1,
  });
});

test("short name", () => {
  expect(() => new Character("M")).toThrowError("Имя должно содержать от 2 до 10 символов");
});

test("long name", () => {
  expect(() => new Character("CharacterCharacter", "Magician")).toThrowError(
    "Имя должно содержать от 2 до 10 символов"
  );
});

test("invalid type", () => {
  expect(() => new Character("Character", "Magicianman")).toThrowError(
    "Недопустимый тип персонажа"
  );
});
