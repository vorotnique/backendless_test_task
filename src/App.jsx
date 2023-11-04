import './App.css';
import Router from './Router';
// import { RouterProvider } from 'react-router-dom';
import Container from './components/Container';

export default function App() {
  return (
    <div className="App">
      <Container>
        <Router />
        {/* <RouterProvider router={router} /> */}
      </Container>
    </div>
  );
}
