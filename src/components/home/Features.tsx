import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  const t = useTranslations("feature");

  const features = [
    {
      title: t("text7"),
      description: t("text8"),
      image: "/videos/3.mp4",
    },
    {
      title: t("text9"),
      description: t("text10"),
      image: "/videos/2.mp4",
    },
    {
      title: t("text11"),
      description: t("text12"),
      image: "/videos/1.mp4",
    },
  ];

  const featureList = [
    t("text1"),
    t("text2"),
    t("text3"),
    t("text4"),
    t("text5"),
    t("text6"),
  ];

  return (
    <section className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center text-pink-500">
        {t("text13")} 🎥
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature) => (
          <div key={feature}>
            <Badge
              className="text-sm rounded-full bg-pink-500"
              variant={"secondary"}
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }) => (
          <Card key={title} className="flex flex-col border-2 border-pink-600">
            <CardHeader>
              <CardTitle className="text-xl text-pink-300">{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter className="mt-auto">
              <video
                src={image}
                className="rounded w-[400px] h-32 lg:w-[400px] mx-auto z-0 select-none pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
