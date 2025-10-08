import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-light text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-700 text-lg font-light mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </Link>

            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-medium border border-gray-300 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;