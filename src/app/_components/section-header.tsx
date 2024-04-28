export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 flex w-[90vw] flex-row items-center">
      <div className="w-fit font-titillium text-5xl font-extrabold">
        {title}
      </div>
      <div className="ml-3 h-0 w-full border-b border-portfolio-indigo_dye-700" />
    </div>
  );
}
