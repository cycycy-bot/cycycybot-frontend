export const defaults = {
  test: {
    isTest: 'asdsdasdasda',
    __typename: 'test',
  },
  dropDownOpen: {
    isOpen: false,
    __typename: 'dropDown',
  },
  guilds: {
    guild: [],
    __typename: 'getGuilds',
  },
};

export const resolvers = {
  Mutation: {
    setTest: (_, d, { cache }) => {
      console.log(d);
      const data = {
        test: {
          isTest: d.test,
          __typename: 'test',
        },
      };
      cache.writeData({ data });
    },
    setDropDown: (_, d, { cache }) => {
      const data = {
        dropDownOpen: {
          isOpen: d.isOpen,
          __typename: 'dropDown',
        },
      };
      cache.writeData({ data });
    },
    setGuilds: (_, d, { cache }) => {
      console.log(d.guild);
      const data = {
        guilds: {
          guild: d.guild,
          __typename: 'getGuilds',
        },
      };
      cache.writeData({ data });
    },
  },
};
