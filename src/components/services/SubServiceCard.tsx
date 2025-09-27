import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <Card className="h-full transition-all duration-300 hover:shadow-lg bg-card">
      <CardHeader>
        {subService.icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            {subService.icon}
          </div>
        )}
        {subService.image && (
          <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
            <img
              src={subService.image}
              alt={subService.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardTitle className={`text-xl ${isRTL ? 'text-right' : 'text-left'}`}>
          {subService.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={`text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {subService.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}