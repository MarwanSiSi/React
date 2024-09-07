import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';
import { updateOrder } from '../../services/apiRestaurant';
// import { useEffect } from 'react';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={'primary'}>Make Priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  const { orderId } = params;

  await updateOrder(orderId, data);

  return null;
}
