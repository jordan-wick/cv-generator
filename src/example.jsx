const example = {
  name: "Jon Snow",
  phone: "(555) 012-4738",
  email: "jon@snow.com",
  location: "Winterfell",
  experiences: [
    {
      company: "Night's Watch",
      position: "Commander",
      startDate: new Date(2011, 1),
      endDate: new Date(2015, 7),
      summary: "Led the Night's Watch in defending the realm from the White Walkers. Strategized and executed defense plans. Managed and trained new recruits.",
      location: "The Wall",
      id: crypto.randomUUID(),
      expanded: false,
    },
    {
      company: "Winterfell",
      position: "King in the North",
      startDate: new Date(2015, 8),
      endDate: new Date(2019, 4),
      summary: "Defended the North from the White Walkers. Unified the Northern houses. Led military campaigns and strategic planning.",
      location: "Winterfell",
      id: crypto.randomUUID(),
      expanded: false,
    }
  ],
  education: [
    {
      institution: "Winterfell University",
      degree: "Bachelor of Combat",
      graduation: new Date(2005, 4),
      location: "Winterfell",
      id: crypto.randomUUID(),
      expanded: false,
    }
  ],
};

export default example;