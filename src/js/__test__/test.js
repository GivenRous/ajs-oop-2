import Bowman from "../Bowman.js";
import Demon from "../Demon.js";
import Magician from "../Magician.js";
import Swordsman from "../Swordsman.js";
import Undead from "../Undead.js";
import Zombie from "../Zombie.js";

test("Bowman", () => {
  const received = new Bowman("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Bowman",
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test("Demon", () => {
  const received = new Demon("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Demon",
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test("Magician", () => {
  const received = new Magician("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Magician",
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test("Swordsman", () => {
  const received = new Swordsman("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Swordsman",
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test("Undead", () => {
  const received = new Undead("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Undead",
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test("Zombie", () => {
  const received = new Zombie("Alex");
  const expected = {
    name: "Alex",
    level: 1,
    health: 100,
    type: "Zombie",
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
