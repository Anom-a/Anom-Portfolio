import { motion } from "motion/react";

export default function TimelineItem({ item, index }) {
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-[45%] mb-8 md:mb-0"
      >
        <div className="p-8 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_20px_40px_rgba(96,89,135,0.06)] border border-white/40 transition-all duration-500 hover:scale-[1.02]">
          <span className="text-[10px] text-primary-dim font-bold tracking-widest mb-2 block">
            {item.period}
          </span>
          <h4 className="text-xl font-bold text-on-background mb-2">{item.role}</h4>
          <p className="text-primary font-medium mb-4">{item.company}</p>
          <p className="text-sm text-on-surface-variant font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </motion.div>
      
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block" />
      
      <div className="md:w-[45%]" />
    </div>
  );
}
