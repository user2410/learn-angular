import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
