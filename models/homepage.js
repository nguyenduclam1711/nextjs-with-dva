const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const model = {
  namespace: 'index',
  state: {
    name: 'luler',
    count: 0,
    init: false,
  },
  reducers: {
    calculate(state, { payload }) {
      const { count } = state;
      return { ...state, count: count + payload };
    },
  },
  effects: {
    *init(action, { put }) {
      yield delay(2000);
      yield put({ type: 'caculate', payload: 1 });
    },
    *calc({ payload }, { put }) {
      yield put({ type: 'calculate', payload });
    },
  },
};

export default model;
