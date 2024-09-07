import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="mx-auto flex items-center gap-2 space-x-2 md:gap-3">
      <Button
        type="rounded"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="mt-3 text-sm font-medium">{currQuantity}</span>
      <Button
        type="rounded"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number,
  currQuantity: PropTypes.number,
};

export default UpdateItemQuantity;
