import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/Gemini_Generated_Image_wvzf8bwvzf8bwvzf-removebg-preview.png';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // Feedback State
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Register State
  const [name, setName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Clear feedback on mode switch
  useEffect(() => {
    setError('');
    setSuccess('');
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLogin) {
      // Login Logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    } else {
      // Register Logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      if (users.some(u => u.email === regEmail)) {
        setError('User with this email already exists.');
        return;
      }

      const newUser = { name, email: regEmail, password: regPassword };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      setSuccess('Account created successfully! Please sign in.');
      setIsLogin(true);
      // Pre-fill login email
      setEmail(regEmail);
      setPassword('');
    }
  };

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <main className="flex min-h-screen font-display overflow-hidden bg-auth-light dark:bg-auth-dark text-slate-900 dark:text-slate-100">

      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`w-full min-h-screen bg-white dark:bg-slate-900 flex ${isLogin ? 'flex-row' : 'flex-row-reverse'} relative`}
      >

        {/* Visual Panel (60%) */}
        <motion.section
          layout
          className="hidden lg:flex w-[60%] glossy-mesh relative overflow-hidden flex-col justify-between p-16"
        >
          {/* Glassy Overlay Elements */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                <img src={logoImage} alt="App Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">Académie Lamusique</span>
            </div>
          </div>

          <div className="relative z-10 max-w-xl">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-5xl font-bold text-white leading-tight mb-4">
                    Empowering Musical Excellence.
                  </h1>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Manage your students, schedules, and scores in one unified administrative suite designed for world-class educators.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="register-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-5xl font-bold text-white leading-tight mb-4">
                    Join the Future of Music Education.
                  </h1>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Create an account to start managing your academy with the world's most advanced musical administration tools.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex gap-4 items-center">
            <div className="flex -space-x-4">
              <img alt="Admin user" className="w-10 h-10 rounded-full border-4 border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3bKMJfEGATUU5Q0omQB_SGDTTrnHxvbHurYfCHjmc38zaJCag-GfYFsnqrmH7X8f62pTQGTkKTukW8yBLxSHLQb8tRxDmYnpFY7Yp-sklBOelraHxsoQ-s60Kn9DZL4o7LaEKR0rPxmgQ7t9FiNy5WOBWVvAicosbkOd4YpC140i0wCFNzHMzeij_zGb3u-iasX-8Z8UkxqRqykzK0_pa5JpszNmyRUsI88m0pO-We0isLqOa8WlbCiXFbqXl1WwLp8cMlbVbmher" />
              <img alt="Admin user" className="w-10 h-10 rounded-full border-4 border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG2F4jnHL2SgrdWVX7DVxequAubk5KDfkqIUwfHGCY_VOdLTQA4pEKf9xa8IOVBZWx7hay5tVcWABm66ow8fv33BQOHnOYEW2LdVl9nf_d938N6n0lxmDfMHWpt3H_bSFy8vDURVk8Kzp4t0K4W8XRgzrReCJOTpzZNP95Iw1OPjrP-_EnHSpcf3kP2x6b3QQbCzT0-SOfPq5Nx7IHtGYwRO2AU8NVIioNW_aOmG_4OidrwUG7Zgq-awiQKAeIEgNFFJ_kUNNK4W3F" />
              <img alt="Admin user" className="w-10 h-10 rounded-full border-4 border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPUkVMvh9jYPxKGcfBHHMN-Sw3yT031Crx_vQ_Omws_4-OGP3Fuv7OgTn74RHnrp0cRhALrA6z5tL85NSLPzNqvvhC5U3jbMEDHMCZNgRM_A9DwkrsnTbxQzW6mBfKM82_1yVbsy36nf_r172Geuy5F-ciKE-zq4U0MtomzXXG9SDYomKwo5gHRRRN7R0-8rCVzguYFKlw3FeJSU964QkQ2FmzjmYXl-AKVqaaaiQEGH_RxyXxUmRG55ET5NN7Ad2_DQIWhL4iVNvL" />
            </div>
            <span className="text-white/90 font-medium text-sm">Joined by 200+ global educators</span>
          </div>

          {/* Floating Musical Elements (Decorative) */}
          <div className="absolute right-0 top-1/4 translate-x-1/4 opacity-40">
            <img alt="Piano" className="rounded-2xl shadow-2xl rotate-12 scale-100 border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTvrlLTVLWHruO7Lve72XhglnKaWF82XGFapZQdgM6ALSpM7Db8FUh2VLxfm8DqEz683MVJvbFetuKJ1uYCncvzEpmdJp_yy0FYZpGFeyxasZG_U7K91_evW8I2SjcxZEJRRi0xK6n3ol2sd9whvxD6Wt2Y9VEeAR1GuQweP1yh8ld6xO_eR7QR9ATHeZUBrmqRHLesc9f75f5VgQP8xVJaH3eAxiQhgg2jjuEHxrfSP0a8xACgifUCK9167AgIZSVA2I-w-JW8MXA" />
          </div>
          <div className="absolute left-1/4 bottom-1/4 -translate-x-1/2 opacity-30">
            <img alt="Guitar" className="rounded-2xl shadow-2xl -rotate-12 scale-90 border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJk__b_TNy6OfdBppvwcp3INIbOniMkVcDJxBO9pRrYRQPG52C05DmSSpXs4hAW0msrvsRLKyEOUI8N4SRvXb8UdnGgFJh75v4y2HJIXnLWx4QVd326NouUXVhHONBDDzuZS8Tcr-1nEOtywcLx5Vqjl3QLxmMnDIxU0WVbFO6aDIEp51sy6vVIwNCrUakX6Unw9sGYG_py7dw4ptj-EEqHbbr3-vuuGwPw5Pe10T1oXdhFo4d4VHG5HF0kF15WCNBYjgtLPkWc4VZ" />
          </div>
        </motion.section>

        {/* Right Side: Form (40%) */}
        {/* We use layout to allow it to move/resize if needed, but flex handling does mostly positional work */}
        <motion.section
          layout
          className="w-full lg:w-[40%] bg-cream-soft dark:bg-background-dark flex items-center justify-center p-6 sm:p-8 lg:p-12 h-screen max-h-screen overflow-hidden"
        >
          <div className="w-full max-w-sm">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={logoImage} alt="App Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-primary text-xl font-bold">Lamusique</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Welcome back</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Please enter your details to sign in.</p>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg text-center font-medium">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="bg-green-50 text-green-500 text-sm p-3 rounded-lg text-center font-medium">
                      {success}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide" htmlFor="email">Email Address</label>
                      <div className="relative">
                        <input
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-none rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder-slate-400 text-sm"
                          id="email"
                          name="email"
                          placeholder="name@lamusique.edu"
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide" htmlFor="password">Password</label>
                        <a className="text-xs font-bold text-primary hover:text-primary/80 transition-colors" href="#">Forgot password?</a>
                      </div>
                      <div className="relative">
                        <input
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-none rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder-slate-400 text-sm"
                          id="password"
                          name="password"
                          placeholder="••••••••"
                          required
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400 font-medium" htmlFor="remember-me">Remember for 30 days</label>
                    </div>

                    <button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </form>

                  <div className="relative pt-2">
                    <div className="absolute inset-0 flex items-center pt-2">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-cream-soft dark:bg-background-dark text-slate-500 font-medium">Or sign in with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                      </svg>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 dark:fill-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.13 15.83 2.92 9.22 6.54 7.15c1.1-.63 2.15-.74 3.34-.14.7.35 1.34.34 2.14 0 1.54-.76 3.2-.67 4.27.42-3.2 3.65-2.7 9.42.76 11-.84 2.22-1.95 4.1-3.6 5.85zm-2.87-14.8c-.1 2.3-2.13 4.14-4.22 3.95-.3-2.6 2.13-4.66 4.22-3.95z"></path>
                      </svg>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apple</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Don't have an account?
                    <a
                      className="font-bold text-primary hover:underline transition-all ml-1 cursor-pointer"
                      onClick={toggleAuthMode}
                    >
                      Sign Up
                    </a>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Create Account</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Join the community today.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide" htmlFor="name">Full Name</label>
                      <div className="relative">
                        <input
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-none rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder-slate-400 text-sm"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide" htmlFor="reg-email">Email Address</label>
                      <div className="relative">
                        <input
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-none rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder-slate-400 text-sm"
                          id="reg-email"
                          name="reg-email"
                          placeholder="name@lamusique.edu"
                          required
                          type="email"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide" htmlFor="reg-password">Password</label>
                      <div className="relative">
                        <input
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border-none rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all placeholder-slate-400 text-sm"
                          id="reg-password"
                          name="reg-password"
                          placeholder="Create a password"
                          required
                          type="password"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98] text-sm tracking-wide"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>

                  <div className="relative pt-2">
                    <div className="absolute inset-0 flex items-center pt-2">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-cream-soft dark:bg-background-dark text-slate-500 font-medium">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                      </svg>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <svg className="w-5 h-5 dark:fill-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C3.13 15.83 2.92 9.22 6.54 7.15c1.1-.63 2.15-.74 3.34-.14.7.35 1.34.34 2.14 0 1.54-.76 3.2-.67 4.27.42-3.2 3.65-2.7 9.42.76 11-.84 2.22-1.95 4.1-3.6 5.85zm-2.87-14.8c-.1 2.3-2.13 4.14-4.22 3.95-.3-2.6 2.13-4.66 4.22-3.95z"></path>
                      </svg>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apple</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Already have an account?
                    <a
                      className="font-bold text-primary hover:underline transition-all ml-1 cursor-pointer"
                      onClick={toggleAuthMode}
                    >
                      Sign In
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
};

export default Login;
