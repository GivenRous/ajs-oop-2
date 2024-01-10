import Character from "./character";

export default class Demon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(
      name,
      (type = "Demon"),
      (health = 100),
      (level = 1),
      (attack = 10),
      (defence = 40)
    );
  }
}
