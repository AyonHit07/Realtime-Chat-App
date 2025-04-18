import React from 'react';

const AuthImagePattern = ({ title, subtitle }) => {
  // Vibrant yet light rainbow pastel shades
  const colorClasses = [
    'bg-rose-200',
    'bg-orange-200',
    'bg-yellow-200',
    'bg-lime-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-sky-200',
    'bg-indigo-200',
    'bg-pink-200'
  ];

  return (
    <div className="items-center justify-center hidden p-12 lg:flex bg-base-200">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {colorClasses.map((bgClass, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl
                ${bgClass}
                ${i % 2 === 0 ? 'animate-pulse' : ''}
              `}
            />
          ))}
        </div>
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;