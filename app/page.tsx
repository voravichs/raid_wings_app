import Header from './_components/Header';
import HomePage from './_components/Home';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HomePage/>
    </div>
  );
}
