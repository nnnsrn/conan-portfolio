import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
import { Lang } from "../Languages";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
export const languages: Lang[] = [
    { name: "Indonesian", level: "Native", proficiency: 100, type: "Native" },
    { name: "English", level: "Fluent - IELTS 7.0", proficiency: 80, type: "Foreign" },
    { name: "Russian", level: "Intermediate (B1)", proficiency: 40, type: "Foreign" },
    { name: "Japanese", level: "Beginner (N5)", proficiency: 10, type: "Foreign" },
  ];
