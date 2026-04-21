interface TitleProps {
  title: string;
  label?: string;
}

const Title = ({ title, label }: TitleProps) => {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      {label && (
        <span className="text-xs font-mono text-[#5E6AD2] tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient-headline">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#5E6AD2]/50 to-transparent" />
    </div>
  );
};

export default Title;
