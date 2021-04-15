import './App.css';
import SidebarComponent from './components/organisms/sidebar/sidebar';
import DefaultView from './components/views/default/default';

function App() {
  return (
      <main>
          <SidebarComponent />
          <DefaultView />
      </main>
  );
}

export default App;
