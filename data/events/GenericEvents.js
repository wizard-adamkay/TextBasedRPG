const GenericEvents = {
  
  donut01: {
    id: "donut01",
    text: "You spot a rabid donut",
    decisions: [
      {text: "eat it", id: "donut02"},
      {text: "eat it", id: "donut02"}
    ]
  },
  donut02: {
    id: "donut02",
    text: "You eat a rabid donut",
    decisions: [
      {text: "tastes good", id: "donut02"},
      {text: "tastes bad", id: "donut02"}
    ]
  }
}

export default GenericEvents;