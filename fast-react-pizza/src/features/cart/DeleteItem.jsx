import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeFromCart } from './cartSlice';
import PropTypes from 'prop-types';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(removeFromCart(pizzaId))} type="delete">
      Remove
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number,
};

export default DeleteItem;
