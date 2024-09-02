import React from 'react';
import { Button } from '@/components/ui/button';
import { Building2, Dumbbell, Calendar } from 'lucide-react';

const EventCard = ({ date, title, subtitle, color, icon: Icon }) => (
  <div className="w-full mb-4 overflow-hidden relative">
    <div className={`w-1 h-full absolute left-0 ${color}`} />
    <div className="ml-1 bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg font-bold">{date}</p>
          <h3 className="text-xl font-bold mt-1">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <Icon className={`${color} w-6 h-6`} />
      </div>
      <Button className={`w-full mt-4 text-white ${color.replace('text', 'bg')}`}>
        MAS INFORMACIÓN
      </Button>
    </div>
  </div>
);

const Events = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-navy-900 mb-6">Eventos Cercanos</h2>
      
      <EventCard
        date="10 MAYO"
        title="REMEDIOS GRATIS"
        subtitle="MUNICIPALIDAD"
        color="text-blue-500"
        icon={Building2}
      />
      
      <EventCard
        date="TODA LA SEMANA"
        title="GYM GRATIS"
        subtitle="Promoción especial"
        color="text-green-500"
        icon={Dumbbell}
      />
      
      <EventCard
        date="15 MAYO"
        title="FERIA DE EMPLEO"
        subtitle="Centro Comunitario"
        color="text-red-500"
        icon={Calendar}
      />
    </div>
  );
};

export default Events;