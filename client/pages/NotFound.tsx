import { Button } from "@/components/ui/button";
import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-white font-outfit flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-matrimony text-4xl font-playfair font-bold italic mb-2">
            Vivah
          </div>
          <div className="text-primary-dark text-sm font-outfit font-light">
            Your Perfect Match Maker
          </div>
        </div>

        {/* 404 Content */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-matrimony mb-4">404</h1>
          <h2 className="text-2xl font-gloock font-normal text-primary-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-primary-dark font-outfit font-light mb-6 leading-relaxed">
            Oops! It seems like this page has found its perfect match elsewhere.
            Let's help you find your way back to discovering meaningful
            connections.
          </p>
        </div>

        {/* Decorative Hearts */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          <Heart className="w-4 h-4 fill-matrimony/30 text-matrimony/30" />
          <Heart className="w-6 h-6 fill-matrimony/60 text-matrimony/60" />
          <Heart className="w-8 h-8 fill-matrimony text-matrimony" />
          <Heart className="w-6 h-6 fill-matrimony/60 text-matrimony/60" />
          <Heart className="w-4 h-4 fill-matrimony/30 text-matrimony/30" />
        </div>

        {/* Action Button */}
        <Link to="/">
          <Button className="bg-matrimony hover:bg-matrimony/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Button>
        </Link>

        {/* Additional Links */}
        <div className="mt-8 text-sm font-outfit font-light text-primary-dark">
          <p className="mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-matrimony hover:underline">
              Find Profiles
            </Link>
            <Link to="/" className="text-matrimony hover:underline">
              Success Stories
            </Link>
            <Link to="/" className="text-matrimony hover:underline">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
