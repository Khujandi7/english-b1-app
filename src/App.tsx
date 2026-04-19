import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from './store/userStore';
import { initTelegram } from './services/telegram';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import { LearnList, LessonDetail } from './pages/Learn';
import { QuizList, QuizPlay } from './pages/Quiz';
import ScoreDashboard from './pages/ScoreDashboard';
import Library from './pages/Library';
import Reader from './pages/Reader';
import Vocabulary from './pages/Vocabulary';
import Profile from './pages/Profile';

export default function App() {
  const hydrate = useStore((s) => s.hydrate);
  const darkMode = useStore((s) => s.profile.darkMode);

  useEffect(() => {
    initTelegram();
    void hydrate();
  }, [hydrate]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="max-w-xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<LearnList />} />
          <Route path="/learn/:id" element={<LessonDetail />} />
          <Route path="/quiz" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPlay />} />
          <Route path="/score" element={<ScoreDashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:id" element={<Reader />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
