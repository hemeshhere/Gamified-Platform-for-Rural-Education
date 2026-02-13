import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";

import ProtectedRoute from "./components/common/ProtectedRoute";
import ProtectedElement from "./components/common/ProtectedElement";
import RoleRedirect from "./components/common/RoleRedirect";

// Auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import GlobalLoader from "./components/common/GlobalLoader";

// Student Pages
import StudentDashboard from "./pages/StudentDashboard";
import LessonsList from "./components/lessons/LessonsList";
import LessonViewer from "./components/lessons/LessonViewer";
import NotificationsPage from "./pages/NotificationsPage";
import ProgressPage from "./pages/ProgressPage";
import BadgeGallery from "./pages/BadgeGallery";
import QuizList from "./components/quiz/QuizList";
import QuizAttempt from "./components/quiz/QuizAttempt";

// Chat (Student)
import StudentChatList from "./pages/StudentChatList";
import ChatRoom from "./pages/ChatScreen";

// Teacher Pages
import TeacherDashboard from "./pages/TeacherDashboard";
import LessonUpload from "./pages/LessonUpload";
import QuizCreate from "./pages/QuizCreate";
import TeacherAddXP from "./pages/TeacherAddXP";
import TeacherSendNotification from "./pages/TeacherSendNotification";
import TeacherManageContent from "./pages/TeacherManageContent";
import TeacherStudentList from "./pages/TeacherStudentList";
import TeacherChatList from "./pages/TeacherChatList";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalLoader />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}
