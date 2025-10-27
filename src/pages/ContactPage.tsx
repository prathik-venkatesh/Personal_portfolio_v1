import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div 
      className="min-h-screen section-padding"
      style={{ paddingTop: '128px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-content-width px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="mb-4">Let's collaborate.</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I'm open to roles and freelance collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-input-background transition-all duration-150"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.18 }}
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-input-background transition-all duration-150"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.26 }}
                >
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    className="bg-input-background transition-all duration-150"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.34 }}
                >
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-150"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2" size={20} />
                          Message Sent!
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div>
                <h3 className="mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:prathikvenku7@gmail.com"
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-150">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="break-all">prathikvenku7@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:8660021310"
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-150">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div>+91 8660021310</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              <motion.div 
                className="p-6 bg-secondary/30 rounded-lg border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h4 className="mb-3">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond within 24-48 hours. For urgent inquiries, feel free to call directly.
                </p>
              </motion.div>

              <motion.div 
                className="p-6 bg-secondary/30 rounded-lg border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.38 }}
              >
                <h4 className="mb-3">Based in</h4>
                <p className="text-muted-foreground">
                  Bangalore, Karnataka, India
                </p>
                <p className="text-muted-foreground mt-2">
                  Available for remote work and local collaborations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
