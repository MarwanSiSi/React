import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col pr-10">
            <span className="flex justify-center text-xs">/pizza</span>
            <p className="font-normal">
              {formatCurrency(totalPrice / quantity)}
            </p>
          </div>
          <div>
            <span className="flex justify-center text-xs">total</span>

            <p className="font-bold">{formatCurrency(totalPrice)}</p>
          </div>
        </div>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array,
};

export default OrderItem;
