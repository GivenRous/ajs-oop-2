import Character from "./сharacter";

export default class Bowerman extends Character {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
