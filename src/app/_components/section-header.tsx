export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex w-[90vw] flex-row items-center">
      <div className="w-fit font-titillium text-2xl font-extrabold">
        {title}
      </div>
      <div className="ml-3 mr-auto h-0 w-[30%] border-b border-portfolio-indigo_dye-700/30" />
    </div>
  );
}
