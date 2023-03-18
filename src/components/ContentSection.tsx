import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  sectionId: string;
};

const ContentSection: React.FC<SectionProps> = ({
  title,
  children,
  sectionId,
}) => {
  return (
    <section id={sectionId} className="my-8">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <div className="mt-4 text-gray-600 flex flex-col gap-5">{children}</div>
    </section>
  );
};

export default ContentSection;
