import { Navigation } from "@/components/Navigation";
import { EmailSignup } from "@/components/EmailSignup";
import heroBackground from "@/assets/hero-background.jpg";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-cover bg-center bg-fixed relative" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative min-h-screen pt-32 flex items-center justify-center px-4">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="z-10 text-center lg:text-left">
              <h1 className="font-outfit text-lg mb-8 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:400ms] text-white font-normal md:text-8xl">
                Bringing Stories to Homes
              </h1>
              <p className="font-outfit text-lg md:text-xl font-light mb-8 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:400ms] text-white">
                Crafting story-driven pieces with modern craftsmanship that transform homes into soulful sanctuaries. Each piece tells a unique narrative.
              </p>
            </div>

            {/* Right Content - Email Signup */}
            <div className="z-10 opacity-0 animate-fade-in-up [animation-delay:600ms]">
              <EmailSignup source="hero_signup" />
            </div>
            
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div id="about" className="h-screen bg-brand-beige flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-brand-forest mb-6">
            About CultureHuman
          </h2>
          <p className="font-outfit text-lg md:text-xl text-brand-forest/80 leading-relaxed">
            We believe every home should tell a story. Our curated collection of furniture and decor pieces 
            are carefully selected and crafted to bring meaning, warmth, and personality to your living spaces.
          </p>
        </div>
      </div>
    </div>;
};
export default Index;