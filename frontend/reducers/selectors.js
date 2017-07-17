import { values } from 'lodash';

export const selectWidgets = ({ widgets }) => (
  values(widgets)
);
