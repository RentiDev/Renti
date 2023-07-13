interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
  }
  
  const Heading: React.FC<HeadingProps> = ({ 
    title, 
    subtitle,
    center
  }) => {
    return ( 
      <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-5xl font-bold text-slate-900">
          {title}
        </div>
        <div className="text-lg font-medium text-slate-700 mt-6">
          {subtitle}
        </div>
      </div>
     );
  }
   
  export default Heading;