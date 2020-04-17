export const login = (student_id) => ({
  type: "LOGIN",
  student_id,
});

export const logout = () => ({
  type: "LOGOUT",
});
