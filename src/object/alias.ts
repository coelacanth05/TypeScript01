export default function typeAliasSample() {
  type Country = {
    capital: string;
    language: string;
    name: string;
  };
  const japan: Country = {
    capital: "tokyo",
    language: "japanese",
    name: "japan"
  };

  console.log("Object object sample 5:", japan);

  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };
  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  type Adventurer = Knight | Wizard;
  type Paladin = Knight & Wizard;

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: "木の剣",
    swordSkill: "3連切り"
  };
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: "木の杖",
    swordSkill: "ファイアボール"
  };
  console.log(adventurer1);
  console.log(adventurer2);
}
