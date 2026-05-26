export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-teal-300" />
      <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-teal-300">
        {eyebrow}
      </p>
      <h2 className="bg-gradient-to-r from-stone-50 via-orange-100 to-teal-200 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-stone-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}