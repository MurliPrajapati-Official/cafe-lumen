import { motion } from 'motion/react';

export function GuestStories() {
  return (
    <section className="py-24 md:py-32 bg-ivory" id="stories">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 text-center border-b border-border-light pb-12">
          <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase block mb-4">Reputation</span>
          <h2 className="text-4xl md:text-6xl font-display text-primary">Guest Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border-light bg-surface">
          
          {/* Story 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-border-light hover:bg-ivory/30 transition-colors"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              We hosted our parents' 25th anniversary here. The attention to detail, from the ambient lighting to the personalized menu curation, transformed dinner into a remarkable event.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Aranya S.</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Private Dining Guest</div>
            </div>
          </motion.div>

          {/* Story 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-border-light hover:bg-ivory/30 transition-colors"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              Not just the best food in Rohini, but the best atmosphere. The cocktails are architecturally constructed and the service anticipates your needs before you ask.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Vikram M.</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Weekend Reservation</div>
            </div>
          </motion.div>

          {/* Story 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col p-8 md:p-12 lg:p-16 hover:bg-ivory/30 transition-colors md:col-span-2 lg:col-span-1"
          >
            <div className="text-accent text-[80px] font-display leading-[0.5] mt-4 mb-8">"</div>
            <p className="text-xl md:text-2xl font-display text-primary mb-12 flex-grow leading-relaxed italic">
              A masterclass in hospitality. It doesn't feel like you're going out for dinner; it feels like you're attending a curated social event. Absolutely essential.
            </p>
            <div className="border-t border-border-light pt-6">
              <div className="font-bold text-primary uppercase tracking-[0.2em] text-[11px] mb-1">Neha K.</div>
              <div className="text-stone font-semibold text-[10px] uppercase tracking-[0.1em]">Corporate Dinner</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
