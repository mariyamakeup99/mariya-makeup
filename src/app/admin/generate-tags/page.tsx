import { TagGeneratorForm } from "@/components/ai/tag-generator-form";
import { Bot } from "lucide-react";

export default function GenerateTagsPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
            <Bot className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          AI Brand Tag Generator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Paste a description of a portfolio entry below. The AI will automatically generate relevant brand tags to help with categorization and discovery on your blog.
        </p>
        <div className="mt-12 text-left">
          <TagGeneratorForm />
        </div>
      </div>
    </div>
  );
}
