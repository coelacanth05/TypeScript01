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
}
