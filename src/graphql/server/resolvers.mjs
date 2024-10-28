// Fake Database
const nodes = [
  // New

  {
    __typename: "Person",
    id: "22",
    name: "Morgan LeFey",
    profilePicture: { url: "/assets/morgan.png" },
    joined: "2019-05-20T00:00:00.000Z",
    location: { id: "23", name: "Avalon" },
  },
  {
    __typename: "Person",
    id: "23",
    name: "Eddie Tor",
    profilePicture: { url: "/assets/eddie.png" },
    joined: "2021-11-30T00:00:00.000Z",
    location: { id: "24", name: "Byte City" },
  },
  {
    __typename: "Person",
    id: "24",
    name: "Jasmine Tea",
    profilePicture: { url: "/assets/jasmine.png" },
    joined: "2022-03-14T00:00:00.000Z",
    location: { id: "25", name: "Cha Gardens" },
  },

  // Additional Story entries
  {
    __typename: "Story",
    id: "10",
    category: "NEWS",
    title: "Scientists Find Snow in the Desert",
    summary:
      "In a surprising weather event, parts of the Sahara Desert experienced rare snowfall, leaving scientists intrigued. This unusual phenomenon, observed in areas like Ain Sefra, may be linked to shifting global weather patterns. The event has sparked curiosity and highlights potential climate-related changes in regions typically known for extreme heat and aridity.",
    authorID: "22",
    createdAt: "2021-12-13T00:00:00.000Z",
    attachments: [{ url: "/assets/desert_snow.png" }],
    thumbnail: {
      url: "/assets/desert_snow.png",
      altText: "Snow-covered dunes",
    },
    likeCount: 35,
    doesViewerLike: false,
    comments: [
      { id: "comment14", text: "Isn't it beautiful?" },
      { id: "comment15", text: "Climate change is real, folks!" },
    ],
  },
  {
    __typename: "Story",
    id: "411",
    category: "COOKING",
    title: "The Perfect Pumpkin Pie Recipe",
    summary:
      "Discover the steps to create a homemade pumpkin pie with a golden crust and rich, spiced filling. Perfect for autumn gatherings, this recipe combines traditional flavors with a touch of modern flair to make a truly unforgettable dessert.",
    authorID: "23",
    createdAt: "2021-10-15T00:00:00.000Z",
    attachments: [{ url: "/assets/pumpkin_pie.png" }],
    thumbnail: { url: "/assets/pumpkin_pie.png", altText: "Pumpkin pie slice" },
    likeCount: 22,
    doesViewerLike: true,
    comments: [
      { id: "comment16", text: "Looks yummy!" },
      { id: "comment17", text: "Perfect for autumn!" },
    ],
  },
  {
    __typename: "Story",
    id: "412",
    category: "EDUCATION",
    title: "Top Coding Languages of 2023",
    summary:
      "Explore this year's top programming languages, from versatile staples to emerging favorites, as we dive into trends shaping the software development landscape in 2023.",
    authorID: "24",
    createdAt: "2023-06-30T00:00:00.000Z",
    attachments: [{ url: "/assets/coding_languages.png" }],
    thumbnail: {
      url: "/assets/coding_languages.png",
      altText: "Code editor on screen",
    },
    likeCount: 110,
    doesViewerLike: false,
    comments: [
      { id: "comment18", text: "JavaScript for the win!" },
      { id: "comment19", text: "Go is underrated." },
      { id: "comment20", text: "Python all the way!" },
    ],
  },

  // Additional Organization entries
  {
    __typename: "Organization",
    id: "448",
    name: "Hedgehog Herald",
    profilePicture: { url: "/assets/hedgehog_herald.png" },
    joined: "2018-08-08T00:00:00.000Z",
    organizationKind: "JOURNALISTIC",
  },
  {
    __typename: "Organization",
    id: "49",
    name: "Coding Collective",
    profilePicture: { url: "/assets/coding_collective.png" },
    joined: "2021-09-01T00:00:00.000Z",
    organizationKind: "NONPROFIT",
  },
  {
    __typename: "Organization",
    id: "410",
    name: "Healthy Hedgehogs Inc.",
    profilePicture: { url: "/assets/healthy_hedgehogs.png" },
    joined: "2022-01-15T00:00:00.000Z",
    organizationKind: "COMMERCIAL",
  },

  // Additional Stories with comments and details
  {
    __typename: "Story",
    id: "413",
    category: "NEWS",
    title: "Ocean Levels on the Rise",
    summary:
      "Scientists report significant rises in global sea levels, attributing these changes to accelerated ice melt and warming oceans. This phenomenon poses increased risks for coastal regions worldwide and highlights urgent environmental concerns.",
    authorID: "9",
    createdAt: "2022-05-16T00:00:00.000Z",
    attachments: [{ url: "/assets/ocean_levels.png" }],
    thumbnail: {
      url: "/assets/ocean_levels.png",
      altText: "Rising ocean waves",
    },
    likeCount: 150,
    doesViewerLike: true,
    comments: [
      { id: "comment21", text: "We need to act now!" },
      { id: "comment22", text: "What can we do to help?" },
    ],
  },
  {
    __typename: "Story",
    id: "414",
    category: "EDUCATION",
    title: "Learning Rust as a Beginner",
    summary:
      "An introductory guide to the Rust programming language, highlighting its unique focus on memory safety and concurrency, making it ideal for building efficient, reliable software.",
    authorID: "22",
    createdAt: "2023-04-07T00:00:00.000Z",
    attachments: [{ url: "/assets/rust_programming.png" }],
    thumbnail: {
      url: "/assets/rust_programming.png",
      altText: "Rust programming",
    },
    likeCount: 65,
    doesViewerLike: false,
    comments: [
      { id: "comment23", text: "I'm going to try Rust now!" },
      { id: "comment24", text: "Such an underrated language." },
    ],
  },
  {
    __typename: "Story",
    id: "515",
    category: "COOKING",
    title: "The Art of Pasta Making",
    summary:
      "Master the art of pasta-making with essential tips and techniques for creating fresh, homemade pasta, from kneading dough to shaping and cooking to perfection.",
    authorID: "23",
    createdAt: "2021-12-25T00:00:00.000Z",
    attachments: [{ url: "/assets/pasta_making.png" }],
    thumbnail: { url: "/assets/pasta_making.png", altText: "Fresh pasta" },
    likeCount: 47,
    doesViewerLike: true,
    comments: [
      { id: "comment25", text: "I love making my own pasta!" },
      { id: "comment26", text: "So relaxing." },
    ],
  },

  // Old below
  {
    __typename: "Person",
    id: "the-viewer",
    name: "A. D. Veloper",
    profilePicture: {
      url: "/assets/a.png",
    },
    joined: "2023-01-01T00:00:00.000Z",
    location: {
      id: "viewer-location",
      name: "Wheresoever You Are",
    },
  },
  {
    __typename: "Person",
    id: "1",
    name: "Chris P. Bacon",
    profilePicture: {
      url: "/assets/pig.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "10",
      name: "Poultropolis",
    },
  },
  {
    __typename: "Story",
    id: "2",
    category: "ALL",
    title: "Local Yak Named Yak of the Year",
    summary:
      "The annual Yak of the Year awards ceremony took place last night, and this year's winner is none other than Max, a beloved yak from the small town of Millville. Max, who is known for his friendly personality and hardworking nature, beat out stiff competition from other yaks in the region to take home the coveted title.\n \nAccording to the judges, Max stood out due to his exceptional contributions to the community. He has been used as a pack animal to help transport goods to and from the town's market, and has also been a reliable source of milk and wool for local farmers. In addition, Max has become something of a local celebrity, often posing for photos with tourists and participating in community events.",
    authorID: "7",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/yak.png",
      },
    ],
    thumbnail: {
      url: "/assets/yak.png",
      altText: "Portrait of Max the Yak by a local artist",
    },
    likeCount: 5,
    doesViewerLike: false,
    comments: [
      {
        id: "comment1",
        text: "So proud of our local yak",
      },
      {
        id: "comment2",
        text: "I've been waiting my whole life for this moment",
      },
      {
        id: "comment3",
        text: "What's a yak???",
      },
      {
        id: "comment4",
        text: "We used to keep yaks in the old country",
      },
      {
        id: "comment5",
        text: "It's a yak attack, this award is whack",
      },
      {
        id: "comment6",
        text: "There are better yaks in every pasture of this country",
      },
      {
        id: "comment7",
        text: "Yak yak yak yak yak yak yak yak",
      },
      {
        id: "comment8",
        text: "He's a good yak, he saved my child from drowning",
      },
    ],
  },
  {
    __typename: "Story",
    id: "3",
    category: "EDUCATION",
    title: "Why did the chicken cross the road? To get to the other side!",
    summary:
      "Chickens are curious animals and will often explore their surroundings, including crossing roads if the opportunity arises. It is important to note that chickens are intelligent and adaptable animals, and the specific reasons for any given chicken crossing the road may vary depending on the individual and its circumstances.",
    authorID: "1",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/chicken.png",
      },
    ],
    thumbnail: {
      url: "/assets/chicken.png",
    },
    likeCount: 2,
    doesViewerLike: false,
    comments: [
      {
        id: "comment9",
        text: "I never knew!",
      },
      {
        id: "comment10",
        text: "This is a very deep joke.",
      },
    ],
  },
  {
    __typename: "Story",
    id: "4",
    category: "NEWS",
    title: "New Hedgehog Species Discovered",
    summary:
      "Breaking news! Scientists have just announced the discovery of a new species of hedgehog, and you won't believe what makes this species unique.\n \n     According to the researchers, the new hedgehogs, which have been named 'sparklehogs,' are distinguished by their ability to produce rainbow-colored sparks from their spikes when they are feeling threatened.\n     \n     But that's not all! The sparklehogs have also been observed using their sparkling spikes to communicate with one another, creating dazzling light shows in the process.\n     \n     'We've never seen anything like it,' said lead researcher Dr. Maria Hernandez. 'These hedgehogs are truly one of a kind.'",
    authorID: "6",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/hedgehog.png",
      },
    ],
    thumbnail: {
      url: "/assets/hedgehog.png",
    },
    likeCount: 160,
    doesViewerLike: false,
    comments: [
      {
        id: "comment11",
        text: "Aren't hedges dark though???",
      },
    ],
  },
  {
    __typename: "Story",
    id: "99",
    category: "NEWS",
    title: "Study: The egg came first, but only after the chicken",
    summary:
      'In a shocking new study, scientists have finally determined the age-old question of whether the chicken or the egg came first. And it turns out, the answer is both!\n      According to the research, the egg actually came first — but only after the chicken had already laid it.\n      \n      "We were amazed by the results," said lead researcher Dr. Janet Hennessy. "It seems that the chicken somehow managed to lay an egg before it even existed. It\'s a real chicken-and-egg paradox."\n      \n      The study, which involved observing hundreds of chickens on a farm, found that the birds would lay eggs and then, a short time later, a fully-formed chicken would emerge from the shell.\n      \n      "We always thought that the egg came first and the chicken was born from it," said Hennessy. "But it turns out, the chicken was there all along, just waiting to hatch."\n      \n      The findings have caused quite a stir in the scientific community, with many experts calling for further research to be done on the mysterious life cycle of the chicken.\n      \n      "It\'s a groundbreaking discovery that will change the way we think about the chicken and the egg," said Hennessy. "Who knows what other secrets these amazing creatures may be hiding?"',
    authorID: "30",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/puzzled_egg.png",
      },
    ],
    thumbnail: {
      url: "/assets/puzzled_egg.png",
    },
    likeCount: 17,
    doesViewerLike: false,
    comments: [
      {
        id: "comment13",
        text: "Wait...",
      },
    ],
  },
  {
    __typename: "Person",
    id: "30",
    name: "Brock Boc",
    profilePicture: {
      url: "/assets/chicken_lover.png",
    },
    joined: "2017-04-02T00:00:00.000Z",
    location: {
      id: "31",
      name: "Paradoxopolus",
    },
  },
  {
    __typename: "Story",
    id: "5",
    category: "COOKING",
    title: "Onion Soup Recipe",
    summary:
      "I am so excited to share with you my all-time favorite recipe for French onion soup. I can't even begin to tell you how many times I've made this dish for my family and friends, and it never fails to impress.\n\n As a self-proclaimed wine mom, I always love finding new and creative ways to incorporate my favorite vintages into my cooking. And let me tell you, the dry white wine in this recipe really takes the flavor of the onions to the next level. Trust me, it's a game changer.\n \n But don't just take my word for it – give this recipe a try for yourself and see how it becomes a new staple in your household. Not only is it delicious, but it's also the perfect comfort food for those cold winter nights.\n \n So grab your wine glasses and let's get cooking!",
    authorID: "8",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/recipe.png",
      },
    ],
    thumbnail: {
      url: "/assets/recipe.png",
    },
    likeCount: 12,
    doesViewerLike: false,
    comments: [
      {
        id: "comment12",
        text: "I tried it with passionfruit instead of onions, it's a great substitution!",
      },
    ],
  },
  {
    __typename: "Story",
    id: "story6",
    category: "ALL",
    title: "What is my cat trying to tell me?",
    summary:
      "I just had the most surreal conversation with my cat. I was talking to her about my day and she just stared at me with this really intense look in her eyes and meowed. I have no idea what she was trying to say, but I have a feeling she was trying to impart some deep wisdom on me. Or maybe she just wanted more treats. Either way, it was a very interesting conversation. #catconvo #felinewisdom",
    authorID: "9",
    createdAt: "2020-01-01T00:00:00.000Z",
    attachments: [
      {
        url: "/assets/cat.png",
      },
    ],
    thumbnail: {
      url: "/assets/cat.png",
    },
    likeCount: 12,
    doesViewerLike: false,
    comments: [],
  },
  {
    __typename: "Organization",
    id: "6",
    name: "Gazelle Gazette",
    profilePicture: {
      url: "/assets/gazelle.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    organizationKind: "JOURNALISTIC",
  },
  {
    __typename: "Organization",
    id: "7",
    name: "Baller Bovine Board",
    profilePicture: {
      url: "/assets/bovine.png",
      altText: "Blue-ribboned insignia of the Baller Bovine Board",
    },
    joined: "2020-01-01T00:00:00.000Z",
    organizationKind: "NONPROFIT",
  },
  {
    __typename: "Person",
    id: "8",
    name: "Suzie Queue",
    profilePicture: {
      url: "/assets/blogger.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "11",
      name: "Venice",
    },
  },

  {
    __typename: "Person",
    id: "15",
    name: "Jennifer Letuchyberg",
    profilePicture: {
      url: "/assets/j.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "16",
      name: "Zig Zag",
    },
  },
  {
    __typename: "Person",
    id: "13",
    name: "Alexei Seligsteinwitz",
    profilePicture: {
      url: "/assets/alexei.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "14",
      name: "Mystery",
    },
  },

  {
    __typename: "Person",
    id: "19",
    name: "Catalina Chaiman",
    profilePicture: {
      url: "/assets/c.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "20",
      name: "Weed",
    },
  },
  {
    __typename: "Person",
    id: "9",
    name: "Katrina Starer",
    profilePicture: {
      url: "/assets/cat_avatar.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "12",
      name: "New York",
    },
  },
  {
    __typename: "Person",
    id: "17",
    name: "Paige Talaberg",
    profilePicture: {
      url: "/assets/p.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "18",
      name: "Boring",
    },
  },
  {
    __typename: "Person",
    id: "21",
    name: "Huy Li",
    profilePicture: {
      url: "/assets/h.png",
    },
    joined: "2020-01-01T00:00:00.000Z",
    location: {
      id: "22",
      name: "Cave Junction",
    },
  },
];

export function nodeResolver({ id }) {
  return nodes.find((node) => node.id === id);
}

export function topStoryResolver(_, { category }) {
  if (typeof category === "string" && category !== "ALL") {
    return nodes.filter(
      (node) => node.__typename === "Story" && node.category === category
    )[0];
  } else {
    return nodes.filter((node) => node.__typename === "Story")[0];
  }
}

export function topStoriesResolver() {
  return nodes.filter((node) => node.__typename === "Story").slice(0, 3);
}

export function storyPosterResolver(story) {
  return nodeResolver({ id: story.authorID });
}

export function newsfeedStoriesResolver(
  _,
  { first, after: afterStr, category }
) {
  const count = first ?? Infinity;
  const after = parseInt(afterStr, 10) || 0;
  const next = count + after;
  const edges = nodes.filter(
    (node) =>
      node.__typename === "Story" &&
      (typeof category !== "string" ||
        category === "ALL" ||
        category === node.category)
  );
  return {
    pageInfo: {
      hasNextPage: edges.length >= next,
      endCursor: "" + next,
    },
    edges: edges.slice(after, next).map((node) => ({ node, cursor: node.id })),
  };
}

export function contactsResolver(_, { search }) {
  const persons = nodes.filter(
    (node) => node.__typename === "Person" && node.id !== "the-viewer"
  );
  if (search == null || search == "") {
    return persons;
  } else {
    return persons.filter((person) =>
      person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}

export function storyCommentsResolver(story, { first, after: afterStr }) {
  const count = first ?? Infinity;
  const after = parseInt(afterStr, 10) || 0;
  const next = count + after;
  const comments = story.comments;
  return {
    pageInfo: {
      hasNextPage: comments.length >= next,
      endCursor: "" + next,
    },
    edges: comments.slice(after, next).map((comment) => ({
      node: comment,
    })),
  };
}

export function resolveLikeStoryMutation(_, { id, doesLike }) {
  const story = nodes.find((node) => node.id === id);
  if (!story) {
    return; // TODO should report an error
  }
  story.likeCount += doesLike - story.doesViewerLike;
  story.doesViewerLike = doesLike;
  return {
    story,
  };
}

let nextCommentID = 0;
export function resolvePostStoryCommentMutation(_, { id, text }) {
  const story = nodes.find((node) => node.id === id);
  if (!story) {
    return; // TODO should report an error
  }
  const newComment = {
    id: `posted-comment-${nextCommentID++}`,
    text,
  };
  story.comments.unshift(newComment);
  return {
    story,
    commentEdge: {
      node: newComment,
    },
  };
}

export function resolveImageURL({ url }, { width, height }) {
  const params = [
    ["width", width],
    ["height", height],
  ].filter((o) => o[1] != null);
  return (
    url +
    (params.length ? "?" + params.map(([k, v]) => `${k}=${v}`).join("&") : "")
  );
}

export const rootValue = {
  viewer: () => {
    return {
      actor: nodes.find((node) => node.id === "the-viewer"),
    };
  },
  node: (args) => {
    return nodeResolver(args);
  },
};
