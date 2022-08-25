import { createRoot } from 'react-dom/client';
import Products from "./components/Products";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Products />);
