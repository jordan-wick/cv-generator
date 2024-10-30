const example = {
  name: "Jon Snow",
  phone: "123456789",
  email: "jon@snow.com",
  location: "Winterfell",
  experiences: [
    {
      company: "Night's Watch",
      position: "Commander",
      startDate: new Date(2011, 1),
      endDate: new Date(2015, 7),
      summary: "Defend the realm from the White Walkers"
    },
    {
      company: "Winterfell",
      position: "King in the North",
      startDate: new Date(2015, 8),
      endDate: new Date(2019, 4),
      summary: "Defend the North from the White Walkers"
    }
  ],
  education: [
    {
      institution: "Winterfell University",
      degree: "Bachelor of Combat",
      startDate: new Date(2001, 7),
      endDate: new Date(2005, 4)
    }
  ],
};

export default example;