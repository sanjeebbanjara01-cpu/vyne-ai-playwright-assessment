export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'standard_user',
    password: 'not_the_right_password',
  },
} as const;
