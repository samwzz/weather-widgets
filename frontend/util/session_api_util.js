export const signup = (user) =>(
  $.ajax({
    method: 'post',
     url: '/api/users/',
     data: { user: user }
  })
);

export const signin = (user) =>(
  $.ajax({
    method: 'post',
     url: '/api/session/',
     data: { user: user }
  })
);

export const signout = () =>(
  $.ajax({
    method: 'delete',
     url: '/api/session/'
  })
);
