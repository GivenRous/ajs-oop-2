export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя должно содержать от 2 до 10 символов");
    }
    const arr = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Demon",
      "Undead",
      "Zombie",
    ];
    if (!arr.includes(type)) {
      throw new Error("Недопустимый тип персонажа");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("The hero is dead.");
    }
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;
    this.health += 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error("The hero is dead.");
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
