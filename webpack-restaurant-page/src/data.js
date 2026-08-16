const info = {
  name: "Kupik Breakfast Bar",
  about:
    "Kupik has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",
  hours: {
    monday: {
      open: "8:00",
      close: "20:00",
    },
    tuesday: {
      open: "6:00",
      close: "18:00",
    },
    wednesday: {
      open: "6:00",
      close: "18:00",
    },
    thursday: {
      open: "6:00",
      close: "20:00",
    },
    friday: {
      open: "6:00",
      close: "20:00",
    },
    saturday: {
      open: "8:00",
      close: "20:00",
    },
  },
  location: "Pretocilova 125, Brno, Czech Republic",
};

const menu = {
  beverages: [
    {
      name: "Honey Tea",
      description:
        "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
      price: "$2",
    },
    {
      name: "Beary Tea",
      description:
        "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
      price: "$3",
    },
  ],
  sides: [
    {
      name: "Toast and Jam",
      description:
        "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
      price: "$3",
    },
    {
      name: "Fresh Fruit",
      description:
        "A small bowl of fresh fruit, whatever we find at the market for the day.",
      price: "$3",
    },
  ],
  mains: [
    {
      name: "Pancakes",
      description:
        "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
      price: "$4",
    },
    {
      name: "French Toast",
      description:
        "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
      price: "$5",
    },
    {
      name: "Beary Veggie Sandwich",
      description:
        "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
      price: "$8",
    },
    {
      name: "BLT",
      description:
        "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
      price: "$8",
    },
  ],
};

const contact = {
  contacts: [
    {
      name: "Mama Bear",
      position: "Chef",
      phone: "555-555-5554",
      email: "totallyRealEmail@notFake.com",
    },
    {
      name: "Papa Bear",
      position: "Manager",
      phone: "555-555-5555",
      email: "totallyRealEmail@notFake.com",
    },
    {
      name: "Baby Bear",
      position: "Waiter",
      phone: "555-555-5556",
      email: "totallyRealEmail@notFake.com",
    },
  ],
};

export { info, menu, contact };
