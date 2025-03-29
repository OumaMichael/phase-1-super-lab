// Defining the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Defining the Deciduous class extending Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor to assign species
      this.name = name; // Assign the name property
    }
  
    static definition() {
      // Use super to access the parent class definition and extend it
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Defining the Evergreen class extending Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Calling the parent class constructor to assign species
      this.name = name; // Assign the name property
    }
  
    static definition() {
      // Use super to access the parent class definition and extend it
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Example usage:
  const oak = new Deciduous("Oak", "Mighty Oak");
  console.log(oak.species); // Output: Oak
  console.log(oak.name); // Output: Mighty Oak
  console.log(Deciduous.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  const pine = new Evergreen("Pine", "Evergreen Pine");
  console.log(pine.species); // Output: Pine
  console.log(pine.name); // Output: Evergreen Pine
  console.log(Evergreen.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  