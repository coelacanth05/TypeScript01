export default function objectSample() {
  const a: object = {
    name: "kai",
    age: 37
  };
  let country: {
    language: string;
    name: string;
  } = {
    language: "Japanese",
    name: "Japan"
  };
  console.log("Object object sample 1:", country);

  country = {
    language: "English",
    name: "United States of America"
  };
  console.log("Object object sample 2:", country);

  const coelacanth: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 30,
    lastName: "aaa",
    firstName: "bbb"
  };
  coelacanth.gender = "mail";
  coelacanth.lastName = "ccc";
  // coelacanth.firstName = "ddd";
  console.log("Object object sample 3:", coelacanth);

  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: "tokyo",
    Koria: "seoul"
  };
  capitals.Caina = "Beijing";
  capitals.Canada = "Ottawa";

  console.log("Object object sample 4:", capitals);
}
