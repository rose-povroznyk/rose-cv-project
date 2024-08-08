import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LanguageProvider } from './contests/LanguageContest';
import MainPage from './pages/MainPage/MainPage';
import styles from './App.module.sass';

function App() {
  const notify = () =>
    toast(
      `{
      "error": "451",
      "message": "Access to this information has been revoked by the Thought Police.",
      "query": "SELECT * FROM projects WHERE developer_name = 'rose'" 🙂
    }`
    );

  useEffect(() => {
    notify();
  }, []);

  return (
    <LanguageProvider>
      <MainPage />
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
        className={styles.toast}
      />
    </LanguageProvider>
  );
}

export default App;
