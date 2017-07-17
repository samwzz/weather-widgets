export const fetchUserWidgets = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/user/${userId}/widgets`
  })
);

export const createWidget = data => (
  $.ajax({
    method: 'POST',
    url: 'api/widgets',
    data
  })
);

export const deleteWidget = widget => (
  $.ajax({
    method: 'DELETE',
    url: `api/widgets/${widget.id}`,
  })
);
