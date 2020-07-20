export function getCurrentAuthority() {
  return ["user"];
};

export function check(authority) {
  const current = getCurrentAuthority();

  // The some() method tests whether at least one element in the array passes the test
  // implemented by the provided function. It returns a Boolean value.
  // 'item' refers to each item in 'current' array
  return current.some(item => authority.includes(item));
};

export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
};