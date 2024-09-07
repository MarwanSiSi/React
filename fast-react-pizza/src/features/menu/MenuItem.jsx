import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';

import { getCurrentQuantityById } from '../cart/cartSlice';
import { useSelector } from 'react-redux';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addToCart(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-2 flex flex-wrap justify-between gap-2 sm:mr-0 sm:items-end">
          {!soldOut ? (
            <p
              className={`flex ${isInCart ? 'items-end' : 'items-center'} text-sm`}
            >
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-4">
            {isInCart ? (
              <div className={`flex items-end gap-3 md:gap-8`}>
                <UpdateItemQuantity
                  pizzaId={id}
                  currQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={id} />
              </div>
            ) : null}

            {!soldOut && !isInCart && (
              <Button onClick={handleAddToCart} type="small">
                add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

//prop validation
MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
