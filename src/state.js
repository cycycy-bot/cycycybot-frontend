export const defaults = {
  test: {
    isTest: 'asdsdasdasda',
    __typename: 'test',
  },
};

export const resolvers = {
  Mutation: {
    setTest: (_, d, { cache }) => {
      const data = {
        test: {
          isTest: 'test',
          __typename: 'test',
        },
      };
      cache.writeData({ data });
    },
  },
};
