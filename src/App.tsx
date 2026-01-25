import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectSeparator,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
function App() {
  return (
    <main className='p-4'>
      <Header />
      <section className='mt-8 grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-x-5 text-center'>
        <Information />
      </section>
      <Separator orientation='horizontal' className='mt-4' />
    </main>
  );
}

export default App;
