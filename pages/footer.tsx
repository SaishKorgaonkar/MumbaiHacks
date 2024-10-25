import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Information</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Connect</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2">
            <h2 className="text-lg font-semibold">Subscribe to Our Newsletter</h2>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground text-primary"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">&copy; {currentYear} Marketing Platform. All rights reserved.</p>
            <p className="text-sm italic">Adapting global strategies for Indian markets</p>
          </div>
        </div>
      </div>
    </footer>
  )
}