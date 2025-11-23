{
  // Union type | that means OR || like javascript

  //   type FrontendDeveloper = "fakibazDeveloper" | "JuniorDeveloper"; // string literal type
  //type FullStackDeveloper = "fullstackDeveloper" | "ExpertDeveloper"; // string literal type

  type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "JuniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female"; // string literal type
    bloodGroup: "O+" | "A+" | "AB+"; // string literal type
  };

  const user1: User = {
    name: "Swadeb",
    gender: "male",
    bloodGroup: "A+",
  };

  // Intersection types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "BackendDeveloper";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "Css", "js", "mongodb", "express"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };
}
