export type Resource = {
  id: number;
  custom_id: string;
  name: string;
  description: string;
  preview: string | null;
  type: string;
  href: string | null;
  tags: string[];
  category_name: string;
  snippets: snippets[];
};

type snippets = {
  framework: string;
  framework_slug: string;
  source: string;
  language: string;
}