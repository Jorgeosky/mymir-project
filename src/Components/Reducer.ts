const data = [localStorage.getItem('isLoggedIn'), localStorage.getItem('user')];

const initialState = {
  isLoggedIn: data[0] === null ? false : JSON.parse(data[0]),
  user: data[1] === null ? {} : JSON.parse(data[1]),
};

export default initialState;

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case types.signin: {
//       localStorage.setItem(
//         'isLoggedIn',
//         JSON.stringify(action.payload.isLoggedIn),
//       );
//       localStorage.setItem('user', JSON.stringify(action.payload.user));
//       localStorage.setItem('type', JSON.stringify(action.payload.type));
//       return {
//         ...state,
//         isLoggedIn: action.payload.isLoggedIn,
//         user: action.payload.user,
//         type: action.payload.type,
//       };
//     }
//     case types.signup: {
//       localStorage.setItem(
//         'isLoggedIn',
//         JSON.stringify(action.payload.isLoggedIn),
//       );
//       localStorage.setItem('user', JSON.stringify(action.payload.user));
//       localStorage.setItem('type', JSON.stringify(action.payload.type));
//       return {
//         ...state,
//         isLoggedIn: action.payload.isLoggedIn,
//         user: action.payload.user,
//         type: action.payload.type,
//       };
//     }
//     case types.signout: {
//       localStorage.removeItem('user');
//       localStorage.setItem('isLoggedIn', false);
//       clearSession();
//       return {
//         isLoggedIn: false,
//         type: JSON.parse(localStorage.getItem('type')),
//       };
//     }
//     case types.type: {
//       localStorage.setItem('type', JSON.stringify(action.payload.type));
//       return {
//         ...state,
//         type: action.payload.type,
//       };
//     }
//     case types.profile: {
//       localStorage.setItem('user', JSON.stringify(action.payload.user));
//       return {
//         ...state,
//         user: action.payload.user,
//       };
//     }

//     default:
//       return state;
//   }
// };
