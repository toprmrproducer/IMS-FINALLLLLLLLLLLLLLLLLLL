import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stats: {
    label: string;
    value: string;
  }[];
}

export default function PortfolioCard({ title, description, image, icon: Icon, stats }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all duration-300"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#FF0000]/10 rounded-xl group-hover:bg-[#FF0000]/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#FF0000]" />
          </div>
          <h3 className="text-2xl font-display text-white">{title}</h3>
        </div>

        <p className="text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#FF0000]/10 group-hover:border-[#FF0000]/30 transition-all duration-300"
            >
              <div className="text-xl font-display text-[#FF0000] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}