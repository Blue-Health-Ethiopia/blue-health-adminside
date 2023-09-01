import { virtualseminars } from "../../data/virtualseminars";

const seminarsInitialState = {
  seminars: virtualseminars,
};

export const seminarsReducer = (state = seminarsInitialState, action) => {
  switch (action.type) {
    case 'CREATE_SEMINAR':
      return {
        seminars: [...state.seminars, action.payload],
      };
    default:
      return state;
  }
};
