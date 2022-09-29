import { Voiture } from "../dist/js/voiture.js";

describe("Voiture", function () {
  it("should create a car", function () {
    const v = new Voiture("Audi", "A1", "citadine");
    expect(v).toBeInstanceOf(Voiture);
    expect(v.marque).toEqual("Audi");
    expect(v.modele).toEqual("A1");
    expect(v.type).toEqual("citadine");
    expect(v.photo).toEqual("Audi-A1.jpg");
    expect(v.options).toBeInstanceOf(Map);
    expect(v.options.size).toEqual(0);
  });

  it("should not create a car because of marque", function () {
    expect(() => {
      const v = new Voiture("Cheval", "Diratamere", "citadine");
    }).toThrow();
  });

  it("should not create a car because of type", function () {
    expect(() => {
      const v = new Voiture("Audi", "MoaToo", "citadine");
    }).toThrow();
  });

  it("should add an option", function () {
    const v = new Voiture("Audi", "A1", "citadine");
    expect(v.ajouterOption(Voiture.OPTIONS.COULEUR, "rouge")).toBeUndefined();
    expect(v.options.get(Voiture.OPTIONS.COULEUR)).toEqual("rouge");
  });

  it("should delete an option", function () {
    const v = new Voiture("Audi", "A1", "citadine");
    expect(v.ajouterOption(Voiture.OPTIONS.COULEUR, "rouge")).toBeUndefined();
    expect(v.retirerOption(Voiture.OPTIONS.COULEUR)).toBeUndefined();
    expect(v.options.size).toEqual(0);
  });

  it("should not add an unknown option", function () {
    const v = new Voiture("Audi", "A1", "citadine");
    expect(() => {
      v.ajouterOption(Voiture.OPTIONS.PARFUM, "fraise");
    }).toThrow();
  });
});
