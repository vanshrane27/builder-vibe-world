import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Search, MessageCircle, Clock } from "lucide-react";

interface TestimonialCard {
  id: string;
  names: string;
  image: string;
  message: string;
}

interface ProfileCard {
  id: string;
  name: string;
  image: string;
  age: string;
  height: string;
  religion: string;
  caste: string;
  gotra: string;
  education: string;
  salary: string;
  location: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: "1",
    names: "Ajinkya & Ashwini",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c4b40830da810787738fd2c9cdf515d285a84e4d?width=238",
    message:
      "Thank you Vivaha.com! I found my soulmate here. After chatting, we involved our families—now we're happily engaged as of 9th May 2025!",
  },
  {
    id: "2",
    names: "Piyas & Anindita",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8d4af72261c7118594a398b50857177f30cbad9d?width=238",
    message:
      "Thanks to Shaadi.com, my life has truly settled. Grateful to have found my partner through this platform.",
  },
  {
    id: "3",
    names: "Rohit & Sonam",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42f166d26a0176489f7969eb2245e394b0cefe0c?width=238",
    message:
      "We met on Vivaha.com and found our perfect match. Thank you for helping me find my soulmate and begin this beautiful new chapter of life!",
  },
];

const profiles: ProfileCard[] = [
  {
    id: "1",
    name: "Anindita",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c4abcc56c0b5e42d4e4f147243a684278c61c4b0?width=286",
    age: "44 Years",
    height: "5' 4\"",
    religion: "Hindu / Marathi",
    caste: "Maratha",
    gotra: "Kashyap",
    education: "MBA/PGDM",
    salary: "Rs. 3 - 4 Lakh",
    location: "Pune/ Chinchwad",
  },
  {
    id: "2",
    name: "Deepasha",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/86963251ef286e3e410d012dfb495cc68daf0f5a?width=286",
    age: "44 Years",
    height: "5' 4\"",
    religion: "Hindu / Marathi",
    caste: "Maratha",
    gotra: "Kashyap",
    education: "MBA/PGDM",
    salary: "Rs. 3 - 4 Lakh",
    location: "Pune/ Chinchwad",
  },
  {
    id: "3",
    name: "Vaishusakpal",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b6a7d8896cbb53702c2d4e9aca0522a9edd1ae21?width=286",
    age: "44 Years",
    height: "5' 4\"",
    religion: "Hindu / Marathi",
    caste: "Maratha",
    gotra: "Kashyap",
    education: "MBA/PGDM",
    salary: "Rs. 3 - 4 Lakh",
    location: "Pune/ Chinchwad",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-primary-white font-outfit">
      {/* Header */}
      <header className="relative">
        {/* Hero Background Image */}
        <div className="relative h-[400px] lg:h-[405px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/29c120ce2ea89234b57d01e4939f7033a9f3576f?width=1599"
            alt="Happy couple"
            className="w-full h-full object-cover"
          />

          {/* Navigation Overlay */}
          <nav className="absolute top-0 left-0 right-0 z-10 p-4 lg:p-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              {/* Logo */}
              <div className="flex items-center">
                <div className="text-primary-lighter text-xs lg:text-sm font-outfit font-light tracking-wide">
                  <div className="mb-1">Your Perfect Match Maker</div>
                  <div className="text-matrimony text-3xl lg:text-4xl font-playfair font-bold italic">
                    Vivah
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                <a
                  href="#"
                  className="text-primary-lighter text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-primary-lighter text-sm hover:text-white transition-colors"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-primary-lighter text-sm hover:text-white transition-colors"
                >
                  Help
                </a>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-5">
            <div className="text-center text-primary-lighter">
              <h1 className="font-monte-carlo text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight drop-shadow-lg">
                Find Your
              </h1>
              <div className="flex items-center justify-center mt-2 lg:mt-4">
                <h1 className="font-monte-carlo text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight drop-shadow-lg mr-4">
                  Forever
                </h1>
                <Heart className="w-12 h-12 lg:w-16 lg:h-16 fill-matrimony text-matrimony" />
              </div>
            </div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-white via-primary-white/20 to-transparent"></div>
        </div>
      </header>

      {/* Real Stories Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-xl lg:text-2xl font-gloock font-normal text-primary-dark mb-3">
            Real Stories, True Connections
          </h2>
          <p className="text-sm text-primary-dark font-outfit font-light max-w-md leading-relaxed">
            Discover how Vivah has brought together couples through meaningful
            connections and shared journeys. Your success story could be next!
          </p>
          <Button
            variant="default"
            className="mt-4 bg-primary-dark hover:bg-primary-dark/90 text-primary-lighter text-sm px-4 py-2 rounded"
          >
            More Stories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="overflow-hidden bg-gradient-to-b from-danger-lighter to-danger-light border-0 shadow-lg relative"
            >
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.names}
                  className="w-full h-24 lg:h-32 object-cover"
                />
                {/* Decorative hearts */}
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Heart className="w-2 h-2 fill-danger-lighter text-danger-lighter opacity-70" />
                  <Heart className="w-3 h-3 fill-danger-lighter text-danger-lighter opacity-50" />
                </div>
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-playfair font-bold text-primary-dark text-sm lg:text-base mb-3">
                  {testimonial.names}
                </h3>
                <p className="text-xs lg:text-sm text-primary-dark font-outfit font-light leading-relaxed">
                  {testimonial.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Find Your Partner Section */}
      <section className="py-8 lg:py-12 px-4 lg:px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-lg lg:text-xl font-gloock font-normal text-primary-dark mb-8">
          Find Your Partner with Filters
        </h2>
      </section>

      {/* Profiles Section */}
      <section className="py-8 lg:py-12 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="text-left mb-8">
          <h2 className="text-xl lg:text-2xl font-gloock font-normal text-primary-dark mb-3">
            View Profiles That Matches Your Interest
          </h2>
          <p className="text-sm text-primary-dark font-outfit font-light max-w-md leading-relaxed">
            Discover how Vivah has brought together couples through meaningful
            connections and shared journeys. Your success story could be next!
          </p>
          <Button
            variant="default"
            className="mt-4 bg-primary-dark hover:bg-primary-dark/90 text-primary-lighter text-sm px-4 py-2 rounded"
          >
            More Profiles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              className="overflow-hidden bg-primary-lighter border-0 shadow-lg"
            >
              <div className="relative h-32 lg:h-40">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-playfair font-bold text-primary-lighter text-base lg:text-lg">
                    {profile.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 lg:p-6">
                <div className="space-y-2 text-xs lg:text-sm">
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Age
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.age}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Height
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.height}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Religion
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.religion}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Caste
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.caste}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Gotra
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.gotra}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Education
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.education}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Salary
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.salary}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-outfit font-normal text-primary-dark">
                      Location
                    </span>
                    <span className="font-outfit font-light text-primary-dark">
                      {profile.location}
                    </span>
                  </div>
                </div>
                <Button
                  variant="default"
                  className="w-full mt-4 bg-primary-dark hover:bg-primary-dark/90 text-primary-lighter text-sm py-2 rounded"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Find Match 10x Faster Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-2xl lg:text-3xl font-gloock font-normal text-primary-dark mb-4">
              Find your match 10x faster
            </h2>
            <p className="text-sm lg:text-base text-primary-dark font-outfit font-light mb-8 max-w-md leading-relaxed">
              Personalized matchmaking service through expert Relationship
              Manager
            </p>

            {/* Feature Icons */}
            <div className="flex space-x-6 lg:space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-info-lighter rounded-xl flex items-center justify-center shadow-lg mb-2">
                  <Search className="w-8 h-8 text-blue-500" />
                </div>
                <span className="text-xs font-outfit font-light text-primary-dark text-center">
                  Guaranteed Matches
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-success-lighter rounded-xl flex items-center justify-center shadow-lg mb-2">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <span className="text-xs font-outfit font-light text-primary-dark text-center">
                  Guaranteed Matches
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-danger-lighter rounded-xl flex items-center justify-center shadow-lg mb-2">
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-xs font-outfit font-light text-primary-dark text-center">
                  Guaranteed Matches
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/db0c16284d32e9acb21a443107c1ac9bd35c8eb9?width=447"
                alt="Couple holding hands"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-gloock font-normal text-primary-dark mb-8">
          Explore Matrimonial Profiles By Categories
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="bg-primary-dark text-primary-lighter px-8 py-3 rounded inline-block">
              <span className="text-sm font-outfit font-light">Community</span>
            </div>
            <div className="mt-6 space-y-2 text-sm font-outfit font-light text-primary-dark">
              <div>Country</div>
              <div>Marital Status</div>
              <div>Religion</div>
              <div>City</div>
              <div>State</div>
              <div>Mother Tongue</div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-matrimony/20 to-matrimony/40 rounded-lg"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/312fee90a843b59f180c6af30bf3d1ab780aa275?width=362"
                alt="Happy couple embracing"
                className="w-full h-auto rounded-lg relative z-10"
              />
            </div>
          </div>

          <div className="flex-1 text-right">
            <div className="space-y-2 text-sm font-outfit font-light text-primary-dark">
              <div className="underline cursor-pointer hover:text-matrimony">
                Rajput Matrimony
              </div>
              <div className="underline cursor-pointer hover:text-matrimony">
                Maratha Matrimony
              </div>
              <div className="underline cursor-pointer hover:text-matrimony">
                Yadav Matrimony
              </div>
              <div className="underline cursor-pointer hover:text-matrimony">
                Reddy Matrimony
              </div>
              <div className="underline cursor-pointer hover:text-matrimony">
                More Communities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-light py-12 lg:py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-semibold text-primary-dark text-base mb-4">
                Need Help?
              </h3>
              <div className="space-y-2 text-sm font-outfit font-light text-primary-dark">
                <div>Member Login</div>
                <div>Sign Up</div>
                <div>Partner Search</div>
                <div>How to Use Shaadi.com</div>
                <div>Premium Memberships</div>
                <div>Customer Support</div>
                <div>Site Map</div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-primary-dark text-base mb-4">
                Company
              </h3>
              <div className="space-y-2 text-sm font-outfit font-light text-primary-dark">
                <div>About Us</div>
                <div>Shaadi Blog</div>
                <div>Careers</div>
                <div>Awards & Recognition</div>
                <div>Cov-Aid</div>
                <div>Contact Us</div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-primary-dark text-base mb-4">
                Privacy & You
              </h3>
              <div className="space-y-2 text-sm font-outfit font-light text-primary-dark">
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
                <div>Be Safe Online</div>
                <div>Report Misuse</div>
              </div>
            </div>

            <div>
              <h3 className="font-playfair font-semibold text-primary-dark text-base mb-4">
                Find us on
              </h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-primary-lighter text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-primary-lighter text-xs">@</span>
                </div>
                <div className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-primary-lighter text-xs">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-dark/20 pt-8">
            <div className="bg-matrimony text-center py-3">
              <p className="text-primary-lighter text-sm font-outfit font-light">
                © 1996-2025 Vivah.com, The World's Leading Matchmaking
                Service™
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
