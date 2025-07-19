import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface EmailSignupProps {
  source?: string;
}

export const EmailSignup = ({ source = "landing_page" }: EmailSignupProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("email_signups")
        .insert({
          email: email.toLowerCase().trim(),
          source
        });

      if (error) {
        if (error.code === "23505") { // Unique violation
          toast({
            title: "Already Registered",
            description: "This email is already on our waiting list!",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the waiting list!",
          description: "You'll be the first to know about our collections drop.",
          variant: "default",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur-xl border border-border rounded-xl p-8 shadow-premium">
      <div className="text-center mb-6">
        <h2 className="font-cormorant text-2xl md:text-3xl font-semibold text-brand-forest mb-2">
          Join The Waiting List
        </h2>
        <p className="font-lato text-sm text-muted-foreground">
          Be among the first to discover our exclusive story-driven pieces and receive insider access to our curated collections
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-lato font-medium text-brand-forest">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="font-outfit border-border focus:border-brand-forest transition-colors"
            disabled={isLoading}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading || !email}
          className="w-full bg-brand-forest hover:bg-brand-forest-light text-primary-foreground font-outfit font-medium transition-all duration-300 hover:shadow-soft"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </div>
  );
};