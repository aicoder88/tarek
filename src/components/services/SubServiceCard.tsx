'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export interface SubService {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

interface SubServiceCardProps {
  subService: SubService;
  locale?: string;
}

export function SubServiceCard({ subService, locale = 'en' }: SubServiceCardProps) {
  const isRTL = locale === 'ar';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-2xl bg-card border-0 shadow-lg hover:shadow-primary/20 overflow-hidden">
        {subService.image && (
          <div className="w-full h-48 overflow-hidden relative">
            <img
              src={subService.image}
              alt={subService.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}

        <CardHeader className="relative">
          {subService.icon && (
            <motion.div
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {subService.icon}
            </motion.div>
          )}
          <CardTitle className={`text-xl font-bold group-hover:text-primary transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
            {subService.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className={`text-sm leading-relaxed text-muted-foreground mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {subService.description}
          </CardDescription>

          <Button
            variant="ghost"
            size="sm"
            className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-medium"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}