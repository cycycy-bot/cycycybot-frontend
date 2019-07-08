export const defaults = {
  test: {
    isTest: 'asdsdasdasda',
    __typename: 'test',
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
  },
};
