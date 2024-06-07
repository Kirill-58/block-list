import React, { ReactNode } from "react";

type FormPageLayoutProps = {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
};

export const FormPageLayout: React.FC<FormPageLayoutProps> = ({
  header,
  form,
  title,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-100">
      {header}
      <main className="grow flex flex-col pt-24">
        <div className="rounded-xl border border-slate-300 px-14 py-8 pb-14 w-full max-w-[400px] bg-white self-center">
          <h1 className="text-2xl mb-6">{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};
