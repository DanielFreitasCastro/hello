import { About } from './components/About';
import { Bars } from './components/Bars';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ScrollToTopButton } from './components/ScrollTopButton';
import { Sidebar } from './components/Sidebar';
import { Skills } from './components/Skills';
import { SidebarProvider } from './hooks/use-sidebar';

export function App(): JSX.Element {
  return (
    <SidebarProvider>
      <Header />

      <Sidebar />

      <main className="m-auto max-w-content-max px-4 lg:px-8">
        <Home />
        <About />
        <Skills />
        <Bars />
      </main>

      <ScrollToTopButton />

      <Footer />
    </SidebarProvider>
  );
}
