import { useState } from 'react';
import { X, BookOpen, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProgrammingBooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgrammingBooksModal({
  isOpen,
  onClose,
}: ProgrammingBooksModalProps) {
  const bookStores = [
    {
      name: 'Amazon',
      description: 'Largest selection of programming books with fast shipping',
      icon: '📦',
      url: 'https://www.amazon.com/s?k=programming+books',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      name: "O'Reilly Learning Platform",
      description: 'Interactive learning with hands-on exercises and video courses',
      icon: '🎓',
      url: 'https://www.oreilly.com/',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Goodreads',
      description: 'Discover ratings, reviews, and recommendations from readers',
      icon: '⭐',
      url: 'https://www.goodreads.com/shelf/show/programming',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Local Bookstore',
      description: 'Support independent retailers in your community',
      icon: '🏪',
      url: 'https://www.indiebound.org/search/book?keys=programming',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="bg-card border-border/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-background rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl font-bold font-display">
                Master Programming
              </h2>
            </div>

            {/* Marketing Copy */}
            <div className="space-y-4">
              <p className="text-lg text-foreground/80">
                <span className="text-cyan-400 font-semibold">Unlock your potential</span> with carefully curated programming books that transform how you code. Whether you're diving into web development, mastering algorithms, or exploring AI—these books are your roadmap to excellence.
              </p>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold text-cyan-400">Why read programming books?</span> They provide deep knowledge that tutorials can't match, teach best practices from industry experts, and help you think like a professional developer. Invest in your growth today.
                </p>
              </div>

              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Learn from industry experts and thought leaders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Master advanced concepts and design patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Build a strong foundation for your career</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Access timeless knowledge that stays relevant</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 my-8" />

          {/* Store Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold font-display mb-6">
              Where to Find Programming Books
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {bookStores.map((store) => (
                <a
                  key={store.name}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 bg-background border-border/50 hover:border-cyan-500/50 transition-all duration-300 h-full hover:shadow-lg">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{store.icon}</span>
                      <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="font-bold font-display mb-2 group-hover:text-cyan-400 transition-colors">
                      {store.name}
                    </h4>

                    <p className="text-sm text-foreground/60 mb-4">
                      {store.description}
                    </p>

                    <div className={`h-1 w-12 bg-gradient-to-r ${store.color} rounded-full group-hover:w-full transition-all duration-300`} />
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 text-center">
            <p className="text-foreground/80 mb-4">
              Ready to level up your programming skills? Start exploring these amazing resources today!
            </p>
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
            >
              Close & Continue Exploring
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
