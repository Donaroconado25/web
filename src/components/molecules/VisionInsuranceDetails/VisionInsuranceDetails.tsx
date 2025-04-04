import { useTranslations } from "next-intl";

export const VisionInsuranceDetails = () => {
  const t = useTranslations("home.services.details.visionInsurance");
  return (
    <div className="text-sm text-gray-700">
      <h3 className="text-xl font-semibold mb-3">{t("title")}</h3>
      <p className="mb-4">{t("description")}</p>
      <h4 className="font-semibold mb-2">{t("benefits.title")}</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>{t("benefits.itemOne")}</li>
        <li>{t("benefits.itemTwo")}</li>
        <li>{t("benefits.itemThree")}</li>
      </ul>
    </div>
  );
};
