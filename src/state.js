export const defaults = {
  test: {
    isTest: 'asdsdasdasda',
    __typename: 'test',
  },
  dropDownOpen: {
    isOpen: false,
    __typename: 'dropDown',
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
      console.log(d);
      const data = {
        dropDownOpen: {
          isOpen: d.isOpen,
          __typename: 'dropDown',
        },
      };
      cache.writeData({ data });
    },
  },
};
