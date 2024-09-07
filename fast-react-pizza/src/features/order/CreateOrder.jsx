import { useState } from 'react';

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { formatCurrency } from '../../utils/helpers';

import store from '../../store';
import { fetchAddress } from '../user/userSlice';
import GetLocationButton from './GetLocationButton';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isSubmitting = navigation.state === 'submitting';
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === 'loading';

  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = withPriority
    ? totalCartPrice + priorityPrice
    : totalCartPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            placeholder="e.g. John Doe"
            type="text"
            name="customer"
            defaultValue={userName}
            required
          />
        </div>

        <div className="mb-5">
          <div className="grow">
            <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <label className="sm:basis-40">Phone number</label>
              <div className="grow">
                <input
                  className="input w-full"
                  placeholder="e.g. 0XXXXXXXXXX"
                  type="tel"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div className="flex w-full">
              {formErrors?.phone && (
                <p className="mt-2 grow rounded bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-5 flex flex-col">
          <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="sm:basis-40">Address</label>
            <div className="relative grow">
              <input
                className="input w-full"
                type="text"
                name="address"
                placeholder={
                  addressStatus === 'loading'
                    ? 'Loading...'
                    : 'e.g. "123 Main St, New York, NY 10001"'
                }
                defaultValue={address}
                disabled={isLoadingAddress}
                required
              />
              {!position.latitude && !position.longitude && (
                <GetLocationButton onClick={() => dispatch(fetchAddress())} />
              )}
            </div>
          </div>
          {addressStatus === 'error' && (
            <p className="mt-2 rounded bg-red-100 p-2 text-xs text-red-700">
              {errorAddress}
            </p>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="focus-ring-offset-2 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-stone-800"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? 'Placing order'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

//request is an object that contains the request data (form Data)
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log('order:', order);

  console.log(order);

  //error handling
  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = 'Please provide a valid phone number';

  if (Object.keys(errors).length > 0) return errors;

  //if no errors, create the order and redirect to the order page
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
