import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // get the menu from the loader in the router array in App.jsx
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-500 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

//* Render as you fetch approach *//
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
