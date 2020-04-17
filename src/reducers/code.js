export default (state = 0, { type, student_id }) => {
  switch (type) {
    case "LOGIN":
      return student_id;
    case "LOGOUT":
      return 0;
    default:
      return state;
  }
};
